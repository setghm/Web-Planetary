const btnStartPosition = document.getElementById('start-position')
const btnRotate = document.getElementById('rotate')

const divMoons = document.getElementById('moons')
const divOwnerPlanet = document.getElementById('owner-planet')
const divPlanets = document.getElementById('planets')
const divStars = document.getElementById('stars')
const h1PlanetName = document.getElementById('planet-name')
const pDescription = document.getElementById('description')
const divDescription = document.getElementById('div-description')
const divPlanetInfo = document.getElementById('planet-info')
const divPlaces = document.getElementById('places')
const divCuriousFacts = document.getElementById('curious-facts')

const urlParams = new URLSearchParams(window.location.search)
let nameParam = urlParams.get('name')

if (nameParam === null) {
	nameParam = 'earth'
}

async function setPlanet(planetName) {
	const planet = PLANETS[planetName]

	await planetCreate(planet)

	if (planet.type === 'planet') {
		divOwnerPlanet.classList.add('hidden')

		if (planet.moons) {
			planet.moons.forEach(moonName => {
				const moon = PLANETS[moonName]
				let div = createDivMoon(moonName, moon.name, moon.icon)
				divMoons.appendChild(div)
			})
		} else {
			divMoons.classList.add('hidden')
		}
	}
	else if (planet.type === 'moon') {
		divMoons.classList.add('hidden')
		let div = createDivOwnerPlanet(planet.owner, PLANETS[planet.owner])
		divOwnerPlanet.appendChild(div)
	}
	else if (planet.type === 'star') {
		divMoons.classList.add('hidden')
		divOwnerPlanet.classList.add('hidden')
	}

	h1PlanetName.firstChild.textContent = planet.name

	if (planet.description) {
		pDescription.textContent = planet.description
	} else {
		divDescription.classList.add('hidden')
	}

	if (planet.places) {
		planet.places.forEach(place => {
			let div = createDivPlace(place)
			divPlaces.appendChild(div)
		})
	} else {
		divPlaces.classList.add('hidden')
	}

	if (planet.curiousFacts) {
		planet.curiousFacts.forEach(curiousFact => {
			let div = createDivCuriousFact(curiousFact)
			divCuriousFacts.appendChild(div)
		})
	} else {
		divCuriousFacts.classList.add('hidden')
	}

	if (planet.info) {
		fillPlanetInfo(planet.info)
	} else {
		divPlanetInfo.classList.add('hidden')
	}

	if (planet.glow) {
		planetSetGlow(planet.glow)
	}

	fillOtherPlanetsDiv(planetName)

	setDocumentTitle(planet.name)

	planetMoveWithBackground()
}

function fillOtherPlanetsDiv(currentPlanetName) {
	Object.keys(PLANETS).forEach(planetKey => {
		if (planetKey !== currentPlanetName) {
			const planet = PLANETS[planetKey]

			if (planet.type !== 'moon') {
				let div = createDivPlanet(planetKey, planet)

				if (planet.type == 'planet') {
					divPlanets.appendChild(div)
				}
				else if (planet.type == 'star') {
					divStars.appendChild(div)
				}
			}
		}

	})

	let stars = divStars.querySelectorAll('.star').length

	if (stars < 1) {
		divStars.classList.add('hidden')
	}
}

function fillPlanetInfo(info) {
	const setText = (id, text) => {
		let div = document.getElementById(id)

		if (text != null) {
			let span = div.querySelector('.value')
			span.textContent = text
		} else {
			div.classList.add('hidden')
		}
	}

	setText('day-duration', info.dayDuration)
	setText('sun-distance', info.sunDistance)
	setText('diameter', info.diameter)
	setText('mass', info.mass)
	setText('density', info.density)
	setText('gravity', info.gravity)
}

function createDivMoon(id, name, icon) {
	let htmlString =
		`<div class="moon" id="${id}">
			<img src="${icon}">
			<h5>${name}</h5>
		</div>`
	let div = HTMLfromString(htmlString)

	div.addEventListener('click', () => {
		window.location = `planet-viewer.html?name=${id}`
	})

	return div
}

function createDivOwnerPlanet(key, planet) {
	let htmlString =
		`<div class="planet" id="${key}">
			<img src="${planet.icon}">
			<h5>${planet.name}</h5>
		</div>`
	let div = HTMLfromString(htmlString)

	div.addEventListener('click', () => {
		window.location = `planet-viewer.html?name=${key}`
	})

	return div
}

function createDivPlace(place) {
	let htmlString =
		`<div class="place" id="${place.id}">
			<img src="${place.icon}">
			<h5>${place.name}</h5>
		</div>`
	let div = HTMLfromString(htmlString)

	div.addEventListener('click', () => {
		planetGoToLocation(place.location)
	})

	return div
}

function createDivCuriousFact(curiousFact) {
	let div =
		`<div class="curious-fact">
			<p>${curiousFact}</p>
		</div>`
	return HTMLfromString(div)
}

function createDivPlanet(key, planet) {
	let htmlString =
		`<div class="${planet.type}" id="${key}">
			<img src="${planet.icon}">
			<h5>${planet.name}</h5>
		</div>`
	let div = HTMLfromString(htmlString)

	div.addEventListener('click', () => {
		window.location = `planet-viewer.html?name=${key}`
	})

	return div
}

function setDocumentTitle(name) {
	document.title += " | " + name
}

btnStartPosition.addEventListener('click', () => {
	planetStopRotation()
	planetStartPosition()
})
btnRotate.addEventListener('click', () => {
	planetStartPosition()
	planetToggleRotation()
})

setPlanet(nameParam)
