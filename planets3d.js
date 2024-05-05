/*
 *	Los Planetas - Visor de planetas en 3D
 *	Set HM (C) 2023.
 *	Todos los derechos reservados.
 *
 *	Este archivo forma parte del proyecto "Los Planetas", un visor de planetas en 3D creado con fines educativos.
 *	El objetivo de este proyecto es proporcionar una herramienta interactiva que permita a los usuarios explorar
 *	y aprender sobre los distintos planetas de nuestro sistema solar.
 *
 *	En algunos apartados de este código, se pueden utilizar recursos y códigos que son de autoría ajena.
 *	Estos recursos han sido utilizados únicamente con fines ilustrativos y con el propósito de mejorar la
 *	experiencia de aprendizaje para los usuarios.
 *
 *	Queda estrictamente prohibida la reproducción, distribución o utilización no autorizada de este contenido
 *	sin el permiso expreso del autor, Set HM.
 *
 *	Para más información sobre el proyecto "Los Planetas" o para solicitar permisos de uso, por favor
 *	comunicarse con Set HM a través del siguiente correo electrónico: [setghm@gmail.com]
 */

const canvas = document.getElementById('planet-render')

let engine = null
let scene = null
let sceneToRender = null
let model3d = null
let loader = null

function radToDeg(radians) {
	return radians * (180 / Math.PI)
}

function createDefaultEngine() {
	return new BABYLON.Engine(canvas, true, {
		preserveDrawingBuffer: true,
		stencil: true,
		disableWebGL2Support: false
	})
}

function startRenderLoop(engine, canvas) {
	engine.runRenderLoop(() => {
		if (sceneToRender && sceneToRender.activeCamera) {
			sceneToRender.render()
		}
	})
}

function createScene() {
	const scene = new BABYLON.Scene(engine)
	scene.clearColor = new BABYLON.Color4(0, 0, 0, 0)

	const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -1.5), scene)
	camera.attachControl(canvas, true)
	camera.inputs.clear()

	//const light = new BABYLON.SpotLight("light", new BABYLON.Vector3(-0.5, 1, -2), new BABYLON.Vector3(0, -1, 0), Math.PI * 2, 0, scene)
	//light.intensity = 0.5

	//const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(-0.5, 1, -1), scene)
	//light.specular = new BABYLON.Color3(0.25, 0.25, 0.25)

	const light = new BABYLON.PointLight('light', new BABYLON.Vector3(5, -5, -1), scene)
	light.intensity = 0.1
	light.specular = new BABYLON.Color3(1, 1, 1)

	let point = new BABYLON.PointLight("point", new BABYLON.Vector3(-0.5, 0.5, -1), scene)
    point.intensity = 1
    point.diffuse = new BABYLON.Color3(1, 1, 1)
    point.specular = new BABYLON.Color3(1, 1, 1);

	return scene
}

function createRotationAnimation() {
	// Create the rotate Y animation
	const animRotation = new BABYLON.Animation("planet-rotation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)

	const animRotationKeys = [
		{
			frame: 0,
			value: 0
		},
		{
			frame: 30 * 30,
			value: 2 * Math.PI
		}
	]

	animRotation.setKeys(animRotationKeys)

	return animRotation
}

async function planetCreate3dModel(planet) {
	// Create the model3d
	if (planet.mesh) {
		let result = await BABYLON.SceneLoader.ImportMeshAsync('', 'obj/', planet.mesh, scene)
		model3d = result.meshes[0]
	} else {
		model3d = BABYLON.MeshBuilder.CreateSphere("planet", {}, scene)
		model3d.rotation.z = Math.PI
		planetCreateMaterial(planet.textures)
	}
}

function planet3dConfigure() {
	// Play the animation
	model3d.animations = []
	model3d.animations.push(createRotationAnimation())
	model3d.animation = scene.beginAnimation(model3d, 0, 30 * 30, true)

	model3d.rotating = true
	planetToggleRotation()

	model3d.moveWithBackground = false

	// Configure the mouse input
	canvas.addEventListener('pointerdown', function(e) {
		document.body.style.cursor = 'grabbing'
		canvas.classList.replace('grab', 'grabbing')

		let position = { x: e.clientX, y: e.clientY }

		// Pause the rotate.y animation
		if (model3d.rotating) {
			model3d.animation.pause()
		}

		let pointermove = (e) => {
			let dx = e.clientX - position.x
			let dy = e.clientY - position.y

			let angleX = dy * 0.01
			let angleY = dx * 0.01

			model3d.rotation.y -= angleY
			model3d.rotation.x += angleX

			position.x = e.clientX
			position.y = e.clientY

			if (model3d.moveWithBackground) {
				document.body.style.backgroundPositionX = `${position.x}px`
				document.body.style.backgroundPositionY = `${position.y}px`
			}
		}

		let pointerup = () => {
			document.body.style.cursor = 'auto'
			canvas.classList.replace('grabbing', 'grab')
			window.removeEventListener('pointermove', pointermove)
			window.removeEventListener('pointerup', pointerup)

			// Resume the animation
			if (model3d.rotating) {
				planetStartPosition()
				model3d.animation.restart()
			}
		}

		window.addEventListener('pointermove', pointermove)
		window.addEventListener('pointerup', pointerup)
	})
}

function planetToggleRotation() {
	if (!model3d.rotating) {
		planetStartRotation()
	} else {
		planetStopRotation()
	}
}

function planetStartRotation() {
	model3d.animation.restart()

	if (model3d.moveWithBackground) {
		document.body.style.animation = 'background-move 30s linear infinite'
		document.body.style.animationPlayState = 'running'
	}

	model3d.rotating = true
}

function planetStopRotation() {
	model3d.animation.pause()

	if (model3d.moveWithBackground) {
		document.body.style.animationPlayState = 'paused'
		document.body.style.backgroundPositionX = '0px'
		document.body.style.backgroundPositionY = '0px'
	}

	model3d.rotating = false
}

function planetCreateMaterial(textures) {
	// Configure the texture
	model3d.material = new BABYLON.StandardMaterial('planet', scene)

	model3d.material.specularPower = 5
	model3d.material.specularColor = new BABYLON.Color3(0.25, 0.25, 0.25)

	model3d.material.diffuseTexture = new BABYLON.Texture(textures.diffuse, scene)
	if (textures.bump) {
		model3d.material.bumpTexture = new BABYLON.Texture(textures.bump, scene)
	}
	if (textures.emissive) {
		model3d.material.emissiveTexture = new BABYLON.Texture(textures.emissive, scene)
	}
}

function planetMoveWithBackground() {
	model3d.moveWithBackground = true
}

function planetStartPosition() {
	model3d.rotation.x = 0
	model3d.rotation.y = 0

	if (model3d.moveWithBackground) {
		document.body.style.backgroundPositionX = `0px`
		document.body.style.backgroundPositionY = `0px`
	}
}

function planetGoToLocation(location) {
	planetStopRotation()

	model3d.rotation.x = location.x
	model3d.rotation.y = location.y
}

function planetSetGlow(glow) {
	const highlightLayer = new BABYLON.HighlightLayer("highlight", scene)
	highlightLayer.addMesh(model3d, BABYLON.Color3.Black(), true)
	highlightLayer.blurVerticalSize = glow
	highlightLayer.blurHorizontalSize = glow
}

async function planetCreate(planet) {
	await planetCreate3dModel(planet)
	planet3dConfigure()

	// Create extra lights if needed
	if (planet.lights) {
		planet.lights.forEach((light, i) => {
			if (light.type === 'PointLight') {
				const pointLight = new BABYLON.PointLight(`light-${i}`, new BABYLON.Vector3(light.position.x, light.position.y, light.position.z), scene)
			}
		})
	}
}

function pGetRot() {
	console.log('x: ', model3d.rotation.x, '\ny: ', model3d.rotation.y)
}

async function asyncSceneCreation() {
	try {
		return createDefaultEngine()
	} catch (e) {
		console.log("Creating the default engine")
		return createDefaultEngine()
	}
}

async function init() {
	engine = await asyncSceneCreation()
	if (!engine) throw "Engine should not be null"

	startRenderLoop(engine, canvas)
	scene = createScene()
}

init().then(() => {
	sceneToRender = scene
})

window.addEventListener("resize", function () {
	engine.resize()
})
