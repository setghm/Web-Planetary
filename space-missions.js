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

/* ======================== MISSIONS OBJECT ======================== */
const MISSIONS = {
	cassiniHuygens: {
		name: 'Cassini-Huygens',
		cardStyle: {
			color: 'black',
			backgroundImage: 'img/mission_cassini.png'
		},
		images: [
			{
				src: 'img/ch-1.webp',
				source: 'NASA',
				description: 'Foto de Saturno tomada por la sonda Cassini.'
			},
			{
				src: 'img/ch-2.jpg',
				source: 'ESA/C. Carreau',
				description: 'Representación 3d del aterrizaje de la sonda Huygens en la luna Titán.'
			},
			{
				src: 'img/ch-3.jpg',
				source: 'David A. Hardy',
				description: 'Ilustración de los últimos momentos de la sonda Cassini.'
			},
			{
				src: 'img/ch-5.jpg',
				source: 'ESA',
				description: 'Titán visto en gran angular por Huygens.'
			},
			{
				src: 'img/ch-4.jpg',
				source: 'ESA',
				description: 'Ambiente de la luna Titán a 2 Km de altura.'
			}
		],
		info: {
			duration: '20 años',
			budget: '3.26 millones de dólares',
			participants: 'NASA, ESA',
			results: [
				'Huygens aterrizó exitosamente en la luna Titán en enero de 2005, proporcionando información valiosa sobre su superficie y atmósfera.',
				'Descubrimiento de géiseres de agua en la luna Encélado, sugiriendo la posibilidad de un océano subterráneo que podría albergar condiciones propicias para la vida.',
				'Estudios detallados de la hexagonal corriente de chorro en el polo norte de Saturno.',
				'Revelación de la presencia de lagos y mares de hidrocarburos líquidos en la superficie de Titán.'
			]
		},
		goal: 'El objetivo de la misión Cassini-Huygens era explorar el sistema de Saturno y sus lunas en detalle. La sonda Cassini, que fue lanzada por la NASA en cooperación con la Agencia Espacial Europea (ESA), tenía como objetivo estudiar Saturno, sus anillos y sus numerosas lunas, mientras que la sonda Huygens, desarrollada por la ESA, tenía la misión de aterrizar en la luna más grande de Saturno, Titán. La misión buscaba obtener información sobre la atmósfera, composición, geología y características de estas fascinantes regiones del sistema solar. Cassini-Huygens fue una misión emblemática que proporcionó una gran cantidad de datos e imágenes espectaculares, lo que permitió avances significativos en nuestra comprensión de Saturno y sus lunas.'
	},
	juno: {
		name: 'Juno',
		cardStyle: {
			backgroundImage: 'img/mission_juno.png'
		},
		images: [
			{
				src: 'img/juno-1.jpg',
				source: 'NASA',
				description: 'Polo sur de Júpiter a 52,000 Km.',
			},
			{
				src: 'img/juno-2.jpg',
				source: 'NASA/JPL-Caltech',
				description: 'Representación digital de la sonda Juno volando sobre el polo sur de Júpiter.',
			},
			{
				src: 'img/juno-3.jpg',
				source: 'NASA/ESA',
				description: 'Aurora sobre el polo norte de Júpiter.',
			},
		],
		info: {
			duration: '6 años',
			budget: 'Aproximadamente 1.1 mil millones de dólares',
			participants: 'NASA',
			results: [
				'Estudio de la atmósfera de Júpiter: Juno ha proporcionado información detallada sobre la atmósfera jupiteriana, incluyendo su estructura de nubes, vientos y patrones climáticos.',
				'Mapa del campo magnético: La sonda ha mapeado el campo magnético de Júpiter, revelando datos importantes sobre su intensidad y distribución.',
				'Mediciones de la gravedad: Juno ha realizado mediciones precisas de la gravedad de Júpiter, lo que ha permitido a los científicos inferir detalles sobre la estructura interna y la composición del planeta.',
				'Observación de la Gran Mancha Roja: La sonda ha estudiado en detalle la famosa Gran Mancha Roja de Júpiter, proporcionando imágenes y datos para comprender mejor este fenómeno atmosférico.',
				'Caracterización de las auroras: Juno ha investigado las auroras de Júpiter, arrojando luz sobre su origen y los procesos que las generan.'
			]
		},
		goal: 'El objetivo principal de la misión Juno es estudiar Júpiter, el gigante gaseoso más grande de nuestro sistema solar. Esta sonda espacial, lanzada por la NASA, busca comprender la estructura interna, la composición, la atmósfera y el campo magnético de Júpiter. Juno también tiene como objetivo arrojar luz sobre la formación y evolución de este planeta y proporcionar información sobre su historia temprana. La misión busca obtener datos clave para mejorar nuestra comprensión de los procesos fundamentales que dan forma a los planetas gigantes y, por extensión, a otros cuerpos celestes similares en el universo.'
	},
	newHorizons: {
		name: 'New Horizons',
		cardStyle: {
			color: 'black',
			backgroundImage: 'img/mission_new_horizons.jpg'
		},
		images: [
			{
				src: 'img/nh-1.jpg',
				source: 'NASA',
				description: 'Representación artística de la sonda New Horizons.'
			},
			{
				src: 'img/nh-2.png',
				source: 'NASA/JHUAPL/SwRI/The University of Arizona.',
				description: 'Plutón a todo color.'
			},
			{
				src: 'img/nh-3.webp',
				source: 'UIG/Getty Images',
				description: 'Representación artística de la sonda espacial New Horizons.'
			},
			{
				src: 'img/nh-4.webp',
				source: 'NASA/KSC',
				description: 'La sonda New Horizons antes de su lanzamiento en la instalación de servicio de cargas peligrosas del Centro Espacial Kennedy de la NASA'
			}
		],
		info: {
			duration: '17 años',
			budget: 'Alrededor de 700 millones de dólares',
			participants: 'NASA',
			results: [
				'Exploración de Plutón y Caronte: La sonda New Horizons proporcionó las primeras imágenes detalladas de Plutón y su luna más grande, Caronte, ofreciendo una visión completamente nueva de estos cuerpos celestes distantes.',
				'Descubrimiento de otras lunas: Durante la misión, New Horizons descubrió varias lunas pequeñas de Plutón que no se conocían anteriormente.',
				'Estudios de la atmósfera de Plutón: La sonda recopiló datos sobre la atmósfera de Plutón, revelando detalles sobre su composición y dinámica.',
				'Exploración del Cinturón de Kuiper: Tras su éxito en el sobrevuelo de Plutón, la misión New Horizons fue extendida para continuar explorando otros objetos del Cinturón de Kuiper.',
				'Observaciones de la heliosfera: New Horizons llevó a cabo mediciones y estudios de la heliosfera, la región del espacio influenciada por el viento solar y el campo magnético del Sol'
			]
		},
		goal: 'El objetivo de la misión New Horizons es explorar el sistema plutoniano y el Cinturón de Kuiper. La sonda espacial New Horizons, lanzada por la NASA el 19 de enero de 2006, tiene como objetivo principal estudiar Plutón y su luna más grande, Caronte, proporcionando una visión detallada de su superficie, atmósfera y características geológicas. Además, después de su sobrevuelo histórico de Plutón en julio de 2015, la misión se extendió para estudiar uno o más objetos del Cinturón de Kuiper en su trayectoria, brindando información valiosa sobre estos cuerpos celestes remotos y helados.'
	},
	apollo11: {
		name: 'Apolo 11',
		cardStyle: {
			backgroundImage: 'img/mission_apollo11.jpg'
		},
		images: [
			{
				src: 'img/a11-1.webp',
				source: 'NASA',
				description: 'El astronauta Edwin "Buzz" Aldrin organiza un experimento en la superficie lunar.'
			},
			{
				src: 'img/a11-2.webp',
				source: 'NASA',
				description: 'Imágenes tomadas del espacio exterior por los astronautas del "Apollo 11".'
			},
			{
				src: 'img/a11-3.webp',
				source: 'NASA',
				description: 'Foto de la sombra del astronauta Neil Armstong en el Cráter Este de la luna.'
			},
			{
				src: 'img/a11-4.webp',
				source: 'NASA',
				description: 'Foto del lado oculto de la luna.'
			},
			{
				src: 'img/a11-5.webp',
				source: 'NASA',
				description: 'Representación artística del regreso a La Tierra después del viaje a la luna.'
			}
		],
		info: {
			duration: '8 días',
			budget: 'Alrededor de 25.4 mil millones de dólares',
			participants: 'NASA',
			results: [
				'Primer alunizaje tripulado: El resultado más significativo de la misión Apollo 11 fue el alunizaje exitoso y seguro de los astronautas Neil Armstrong y Buzz Aldrin en la superficie lunar el 20 de julio de 1969.',
				'Experimentos y muestras lunares: Los astronautas realizaron una serie de experimentos científicos y recogieron muestras de rocas y suelo lunar durante su estancia en la superficie lunar.',
				'Incremento del interés público en la exploración espacial: La misión Apollo 11 capturó la imaginación y el entusiasmo del público en todo el mundo, convirtiéndose en un evento histórico de gran trascendencia.',
				'Impulso a la exploración espacial: La misión Apollo 11 inspiró una serie de misiones lunares posteriores dentro del programa Apollo y sentó las bases para futuras exploraciones espaciales, tanto en la Luna como más allá, en otros planetas y cuerpos celestes.'
			]
		},
		goal: 'El objetivo principal de la misión Apollo 11 fue lograr el primer alunizaje tripulado en la historia de la humanidad. La misión, llevada a cabo por la NASA, tenía como objetivo llevar a los astronautas Neil Armstrong, Edwin "Buzz" Aldrin y Michael Collins a la Luna y regresarlos de manera segura a la Tierra. La misión fue un hito crucial dentro del programa espacial Apollo y fue un paso significativo en la carrera espacial entre Estados Unidos y la Unión Soviética durante la década de 1960.'
	}
}

/* ======================== START PAGE ======================== */
const divMissionsList = document.querySelector('div.missions-list')

Object.keys(MISSIONS).forEach(missionKey => {
	const div = newDivMission(missionKey)
	divMissionsList.appendChild(div)
})

function newDivMission(missionKey) {
	const mission = MISSIONS[missionKey]
	const htmlString = `<div class="mission"><h3>${mission.name}</h3></div>`
	const div = HTMLfromString(htmlString)

	if (mission.cardStyle) {
		if (mission.cardStyle.backgroundImage) {
			div.style.backgroundImage = `url(${mission.cardStyle.backgroundImage})`
		}
		if (mission.cardStyle.color) {
			div.style.color = mission.cardStyle.color
		}
	}

	div.addEventListener('click', () => {
		showSpaceMission(missionKey)
	})

	return div
}

/* ======================== MISSION VIEW ======================== */
const divStartPage = document.querySelector('div.start-page')
const divMissionView = document.querySelector('div.mission-view')
const btnBack = document.querySelector('button#back')
const h2MissionName = document.querySelector('h2#mission-name')
const divImages = document.querySelector('div#images')
const divInfoDuration = document.querySelector('div#duration')
const divInfoBudget = document.querySelector('div#budget')
const divInfoParticipants = document.querySelector('div#participants')
const divInfoResults = document.querySelector('div#results')
const divGoal = document.querySelector('div#goal')

btnBack.addEventListener('click', () => {
	divStartPage.classList.remove('hidden')
	divMissionView.classList.add('hidden')

	divImages.innerHTML = ''
	divInfoResults.innerHTML = ''
})

function showSpaceMission(missionKey) {
	const mission = MISSIONS[missionKey]

	h2MissionName.textContent = mission.name
	divInfoDuration.textContent = mission.info.duration
	divInfoBudget.textContent = mission.info.budget
	divInfoParticipants.textContent = mission.info.participants
	divGoal.textContent = mission.goal

	if (divImages.children.length == 0) {
		mission.images.forEach(image => {
			divImages.appendChild(newImage(image))
		})
	}

	if (divInfoResults.children.length == 0) {
		mission.info.results.forEach(result => {
			divInfoResults.appendChild(newDivResult(result))
		})
	}

	divStartPage.classList.add('hidden')
	divMissionView.classList.remove('hidden')
}

function newImage(image) {
	const htmlString = `<img src="${image.src}" class="image">`
	const img = HTMLfromString(htmlString)

	img.addEventListener('click', () => {
		openImageViewer(image.src, image.source, image.description)
	})

	return img
}

function newDivResult(result) {
	const htmlString = `<div class="result highlight">${result}</div>`
	const div = HTMLfromString(htmlString)

	return div
}

/* ======================== IMAGE VIEWER ======================== */
const divIV = document.querySelector('#image-viewer')
const btnIVClose = document.querySelector('#close')

btnIVClose.addEventListener('click', () => {
	divIV.classList.add('hidden')
})

function openImageViewer(link, source, description) {
	const imgImage = divIV.querySelector('img')
	const bSource = divIV.querySelector('b#source')
	const spanDescription = divIV.querySelector('span#description')

	imgImage.src = link
	bSource.textContent = source
	spanDescription.textContent = description

	divIV.classList.remove('hidden')
}

