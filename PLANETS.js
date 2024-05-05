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

const PLANETS = {
	"sun": {
		type: 'star',
		name: "El Sol",
		icon: 'img/planets/sun.gif',
		textures: {
			diffuse: 'textures/sun.jpg',
			emissive: 'textures/sun.jpg'
		},
		glow: 3.5,
		info: {
			dayDuration: 672,
			diameter: 1390900,
			mass: 1989000,
			density: 141000,
			gravity: 274
		},
		description: 'El Sol, nuestra estrella más cercana, es un incansable reactor nuclear suspendido en el espacio. Con su resplandor dorado y su calor reconfortante, ilumina y alimenta la vida en nuestro pequeño rincón del universo. Es la fuente de energía que impulsa los ciclos naturales y despierta nuestra curiosidad infinita por explorar los misterios del cosmos.',
		curiousFacts: [
			'El Sol tiene alrededor de 4.6 mil millones de años y se estima que tiene otros 5 mil millones de años de vida activa.',
			'Su diámetro es aproximadamente 109 veces más grande que el de la Tierra.',
			'El núcleo del Sol alcanza temperaturas superiores a los 15 millones de grados Celsius.',
			'El Sol emite constantemente partículas cargadas conocidas como viento solar, que pueden afectar las comunicaciones y las auroras en la Tierra.',
			'Cada segundo, el Sol convierte alrededor de 600 millones de toneladas de hidrógeno en helio a través de la fusión nuclear, liberando enormes cantidades de energía en el proceso.'
		]
	},
	"mercury": {
		type: 'planet',
		name: "Mercurio",
		icon: 'img/planets/mercury.jpg',
		textures: {
			diffuse: 'textures/mercury.jpg',
			bump: 'textures/mercury_bump.png'
		},
		info: {
			dayDuration: 4222.6,
			sunDistance: 57.9,
			diameter: 4879,
			mass: 0.330,
			density: 5429,
			gravity: 3.7
		},
		description: 'Mercurio, el planeta más cercano al Sol, es un lugar desafiante y extremo. Con una superficie inhóspita y arrasada por el calor abrasador, presenta contrastes extremos de temperatura y una ausencia casi total de atmósfera. Su enigma radica en su historia volcánica y en la presencia de hielo en sus polos, desafiando nuestras expectativas sobre los mundos cercanos al Sol.',
		curiousFacts: [
			    'Es el planeta más cercano al Sol y tiene el mayor contraste de temperatura en el sistema solar.',
				'Tiene la superficie más arrugada, con acantilados altos y profundos llamados "escarpes".',
				'Su excentricidad orbital es la más pronunciada, lo que significa que su órbita alrededor del Sol es más elíptica.',
				'Mercurio tiene uno de los días más largos en comparación con su año, ya que tarda aproximadamente 59 días terrestres en completar una rotación.',
				'Es el segundo planeta más denso después de la Tierra y tiene un núcleo de hierro extremadamente grande en relación con su tamaño.'
		]
	},
	"venus": {
		type: 'planet',
		name: "Venus",
		icon: 'img/planets/venus.jpg',
		textures: {
			diffuse: 'textures/venus.jpg',
			bump: 'textures/venus_bump.png'
		},
		info: {
			dayDuration: 2802,
			sunDistance: 108.2,
			diameter: 12104,
			mass: 4.87,
			density: 5243,
			gravity: 8.9
		},
		description: 'Venus, el segundo planeta desde el Sol, es un mundo envuelto en una atmósfera densa y tóxica compuesta principalmente de dióxido de carbono. Su superficie es un infierno abrasador con temperaturas extremas y una presión atmosférica asfixiante.',
		curiousFacts: [
			'Venus es el planeta más caliente del sistema solar debido a su espesa atmósfera de dióxido de carbono.',
			'Tiene una atmósfera densa y tóxica que produce un efecto invernadero desbordante.',
			'Venus es el objeto más brillante en el cielo nocturno después de la Luna.',
			'Posee una rotación retrógrada, es decir, gira en dirección opuesta a la mayoría de los otros planetas.',
			'Su superficie está cubierta de volcanes y llanuras de lava, con pocos cráteres debido a la actividad volcánica reciente.'
		]
	},
	"earth": {
		type: 'planet',
		name: "La tierra",
		icon: 'img/planets/earth.gif',
		textures: {
			// diffuse: 'textures/earth.jpg',
			diffuse: 'textures/earth.jpg',
			bump: 'textures/earth_bump.png',
			emissive: 'textures/earth_night.jpg'
			//emissive: 'textures/earth_clouds.jpg'
		},
		glow: 1,
		moons: [ 'moon' ],
		info: {
			dayDuration: 24,
			sunDistance: 149.6,
			diameter: 12756,
			mass: 5.97,
			density: 5514,
			gravity: 9.8
		},
		description: 'El planeta Tierra es el único oasis conocido en el vasto universo que alberga vida en todas sus formas: desde microorganismos hasta complejas criaturas. Su belleza, diversidad y fragilidad lo convierten en un tesoro invaluable que debemos preservar.',
		places: [
			{
				id: 'america',
				name: 'América',
				icon: 'img/places/america.gif',
				location: {
					x: -0.18000000000000008,
					y: 0.24999999999999994
				}
			},
			{
				id: 'africa',
				name: 'África',
				icon: 'img/places/africa.png',
				location: {
					x:  0.009999999999999941,
					y:  1.9600000000000009
				}
			},
			{
				id: 'antartica',
				name: 'Antártida',
				icon: 'img/places/antartica.png',
				location: {
					x:  1.6800000000000008,
					y:  -6.418476861114186e-16
				}
			},
			{
				id: 'asia',
				name: 'Asia',
				icon: 'img/places/asia.png',
				location: {
					x:  0.7000000000000002,
					y:  3.1000000000000005
				}
			},
			{
				id: 'europe',
				name: 'Europa',
				icon: 'img/places/europe.png',
				location: {
					x:  1.0699999999999992,
					y:  2.500000000000001
				}
			},
			{
				id: 'oceania',
				name: 'Oceanía',
				icon: 'img/places/oceania.png',
				location: {
					x:  -0.539999999999999,
					y:  -2.15999999999999
				}
			}
		],
		curiousFacts: [
			'La Tierra tiene aproximadamente 4.500 millones de años.',
			'El desierto del Sahara, ubicado en África, es el desierto caliente más grande del mundo.',
			'El punto más alto de la Tierra es el Monte Everest, con una altura de 8.848 metros sobre el nivel del mar.',
			'La Tierra es el único planeta conocido donde existe agua en sus tres estados: sólido, líquido y gaseoso.',
			'El 71% de la superficie de la Tierra está cubierta por océanos, mientras que solo el 29% es tierra firme.',
		]
	},
	"mars": {
		type: 'planet',
		name: "Marte",
		icon: 'img/planets/mars.jpg',
		textures: {
			diffuse: 'textures/mars.webp',
			bump: 'textures/mars_bump.png'
		},
		moons: [ 'phobos', 'deimos' ],
		info: {
			dayDuration: 24.7,
			sunDistance: 228,
			diameter: 6792,
			mass: 0.642,
			density: 3934,
			gravity: 3.7
		},
		description: 'Marte, el cuarto planeta desde el Sol, es un mundo desértico y rocoso. Con una atmósfera delgada y condiciones extremas, es objeto de fascinación y exploración. La posibilidad de vida pasada y futura lo convierte en un enigma que anhelamos desvelar.',
		places: [
			{
				id: 'olympus-mons',
				name: 'Monte Olimpo',
				icon: 'img/places/olympus-mons.jpg',
				location: {
					x:  -0.30000000000000004,
					y:  -0.72
				}
			}
		],
		curiousFacts: [
			'Marte tiene la montaña más alta y el cráter de impacto más grande del sistema solar.',
			'Su color rojizo se debe al óxido de hierro en su superficie.',
			'Se han encontrado indicios de agua líquida en el pasado, lo que sugiere la posibilidad de vida.',
			'Tiene la mayor tormenta de polvo del sistema solar, que puede cubrir todo el planeta durante meses.',
			'Es el único planeta en el que se han registrado imágenes de eventos astronómicos, como tránsitos y eclipses.'
		]
	},
	"jupiter": {
		type: 'planet',
		name: "Júpiter",
		icon: 'img/planets/jupiter.jpg',
		textures: {
			diffuse: 'textures/jupiter.jpg'
		},
		moons: [ 'io', 'europa', 'ganymede', 'callisto' ],
		info: {
			dayDuration: 9.9,
			sunDistance: 778.5,
			diameter: 142984,
			mass: 1898,
			density: 1326,
			gravity: 23.1
		},
		description: 'Júpiter, el gigante gaseoso del sistema solar, es un mundo imponente y majestuoso. Con su atmósfera turbulenta y nubes en constante movimiento, presenta una gran mancha roja y múltiples lunas. Su tamaño descomunal y su poderoso campo magnético lo convierten en un guardián cósmico que nos fascina y nos enseña sobre la inmensidad del universo.',
		curiousFacts: [
			'Júpiter es el planeta más grande del sistema solar, con más de 1300 veces el volumen de la Tierra.',
			'Tiene una atmósfera turbulenta y colorida, con bandas nubosas y la Gran Mancha Roja, una tormenta gigante.',
			'Júpiter tiene al menos 79 lunas conocidas.',
			'Es conocido por su intenso campo magnético, el más fuerte de todos los planetas del sistema solar.',
			'Júpiter juega un papel crucial en la protección del sistema solar atrapando asteroides y cometas potencialmente peligrosos.'
		]
	},
	"saturn": {
		type: 'planet',
		name: "Saturno",
		icon: 'img/planets/saturn.jpeg',
		//mesh: 'Saturn.obj',
		textures: {
			diffuse: 'textures/saturn.jpg'
		},
		moons: [ 'mimas', 'enceladus', 'tethys', 'dione', 'rhea', 'titan', 'iapetus' ],
		info: {
			dayDuration: 10.7,
			sunDistance: 1432,
			diameter: 120536,
			mass: 568,
			density: 687,
			gravity: 9
		},
		description: 'Saturno es conocido por sus magníficos anillos, que le confieren una belleza única en el sistema solar. Con una atmósfera compuesta principalmente de hidrógeno, presenta tormentas y vientos intensos. Sus lunas, como Titán y Encélado, también han capturado nuestra atención debido a su potencial para albergar vida.',
		curiousFacts: [
			'Saturno es conocido por sus hermosos y distintivos anillos compuestos principalmente de partículas de hielo y roca.',
			'Es el segundo planeta más grande y posee un sistema de lunas fascinante, incluyendo a Titán, la luna más grande.',
			'Saturno es un gigante gaseoso con una atmósfera compuesta principalmente de hidrógeno y helio.',
			'Tiene una velocidad de rotación rápida, lo que provoca que su forma sea achatada en los polos y ensanchada en el ecuador.'
		]
	},
	"uranus": {
		type: 'planet',
		name: "Urano",
		icon: 'img/planets/uranus.jpg',
		textures: {
			diffuse: 'textures/uranus.jpg'
		},
		moons: [ 'miranda', 'ariel', 'umbriel', 'titania', 'oberon' ],
		info: {
			dayDuration: 17.2,
			sunDistance: 2867,
			diameter: 51118,
			mass: 86.8,
			density: 1270,
			gravity: 8.7
		},
		description: 'Urano, el séptimo planeta desde el Sol, es un mundo intrigante y misterioso. Conocido por su distintivo color azul verdoso, posee una atmósfera compuesta principalmente de hidrógeno y helio. Urano tiene una inclinación axial extrema, lo que resulta en estaciones largas y extremas.',
		curiousFacts: [
			'Urano es un planeta gigante de color azul verdoso, debido a la presencia de metano en su atmósfera.',
			'Tiene un eje de rotación inclinado casi 90 grados, lo que le da una apariencia de rodar sobre su órbita.',
			'Urano cuenta con anillos compuestos principalmente de partículas oscuras y fragmentos de hielo.',
			'Es el tercer planeta más grande del sistema solar y está compuesto principalmente de gases y hielo.',
			'Urano tiene una gran cantidad de lunas, siendo las más conocidas Miranda, Ariel, Umbriel, Titania y Oberon.'
		]
	},
	"neptune": {
		type: 'planet',
		name: "Neptuno",
		icon: 'img/planets/neptune.jpg',
		textures: {
			diffuse: 'textures/neptune.jpg'
		},
		moons: [ 'triton' ],
		info: {
			dayDuration: 16.1,
			sunDistance: 4515,
			diameter: 49528,
			mass: 102,
			density: 1638,
			gravity: 11
		},
		description: 'Neptuno es un mundo remoto y fascinante. Con una atmósfera compuesta principalmente de hidrógeno y helio, presenta vientos violentos y tormentas intensas, como la Gran Mancha Oscura. Sus lunas, como Tritón, exhiben características geológicas intrigantes.',
		curiousFacts: [
			'Neptuno es un planeta azul intenso, debido a la presencia de metano en su atmósfera.',
			'Es el cuarto planeta más grande y el más lejano del sistema solar.',
			'Neptuno tiene fuertes vientos y tormentas violentas, incluyendo la Gran Mancha Oscura.',
			'Su interior está compuesto principalmente de roca y hielo, con un núcleo sólido.',
			'Neptuno tiene una luna peculiar llamada Tritón, que orbita en dirección retrógrada y puede contener géiseres de nitrógeno.'
		]
	},
	"pluto": {
		type: 'planet',
		name: "Plutón",
		icon: 'img/planets/pluto.jpg',
		textures: {
			diffuse: 'textures/pluto.webp'
		},
		moons: [ 'charon' ],
		info: {
			dayDuration: 153.3,
			sunDistance: 5906.4,
			diameter: 2376,
			mass: 0.0130,
			density: 1850,
			gravity: 0.7
		},
		description: 'Plutón es un pequeño mundo helado en el Cinturón de Kuiper, con una órbita excéntrica y una superficie cubierta de hielo y rocas. Su luna, Caronte, presenta una relación orbital única con Plutón.',
		curiousFacts: [
			'Plutón solía ser considerado el noveno planeta, pero ahora es clasificado como un planeta enano.',
			'Es un mundo frío y helado en el Cinturón de Kuiper, en los confines del sistema solar.',
			'Plutón tiene una luna grande llamada Caronte, con la cual forma un sistema binario.',
			'Plutón tiene una atmósfera delgada compuesta principalmente de nitrógeno y metano congelados.'
		]
	},
	"planet 9": {
		type: 'planet',
		name: "Planeta 9",
		icon: 'img/planets/planet9.png',
		textures: {
			diffuse: 'textures/planet9.png',
			emissive: 'textures/planet9.png'
		},
		glow: 1,
		info: {
			sunDistance: 90000,
			diameter: 52000,
			mass: 60
		},
		description: 'Se cree que podría existir más allá de Plutón, en los confines del Cinturón de Kuiper. Aunque aún no se ha confirmado su existencia, su presencia se sugiere debido a las perturbaciones observadas en las órbitas de otros objetos transneptunianos.',
		curiousFacts: [
			'El Planeta Nueve se cree que es un gigante de hielo, compuesto principalmente de gases congelados como nitrógeno, metano y monóxido de carbono.',
			'El Planeta 9 es considerado el "eslabón perdido" del sistema solar, ya que su existencia explicaría ciertos fenómenos astronómicos inexplicables hasta ahora.',
			'Se cree que el Planeta 9 tendría una masa estimada entre 5 y 10 veces la de la Tierra, lo que lo convertiría en un objeto significativamente grande.',
			'A pesar de los esfuerzos de búsqueda intensivos, el Planeta 9 aún no ha sido observado directamente, lo que le da un aire de misterio y expectación a su posible descubrimiento.'
		]
	},
	"moon": {
		type: 'moon',
		owner: 'earth',
		name: "La luna",
		icon: 'img/planets/moon.jpg',
		textures: {
			diffuse: 'textures/moon.jpg',
			bump: 'textures/moon_bump.png'
		},
		info: {
			dayDuration: 708.7,
			sunDistance: '0.384*',
			diameter: 3475,
			mass: 0.073,
			density: 3340,
			gravity: 1.6
		},
		description: 'Nuestra Luna, un satélite cercano y hermoso. Con su brillo plateado y ciclos lunares, nos ha cautivado durante siglos. Sus cráteres y mares revelan su historia cósmica. Es un recordatorio constante de nuestra conexión con el universo.',
	},
	"phobos": {
		type: 'moon',
		owner: 'mars',
		name: "Fobos",
		icon: 'img/planets/phobos.png',
		mesh: 'Phobos.obj',
		textures: {
			diffuse: 'textures/phobos.webp'
		},
		lights: [
			{
				type: 'PointLight',
				position: {
					x: 0,
					y: 0,
					z: -0.5
				}
			}
		],
		info: {
			dayDuration: 7.65,
			diameter: 22.2,
			density: 1900,
			gravity: 0.0057
		},
		description: 'Fobos es un satélite pequeño y fascinante. Con su superficie irregular y llena de cráteres, orbita cerca de Marte a una distancia inusualmente cercana. Su origen y formación aún se debaten, y su destino final podría ser ser absorbida por la gravedad marciana.',
	},
	"deimos": {
		type: 'moon',
		owner: 'mars',
		name: "Deimos",
		icon: 'img/planets/deimos.jpg',
		mesh: 'Deimos.obj',
		textures: {
			diffuse: 'textures/deimos.webp'
		},
		info: {
			dayDuration: 30.3,
			diameter: 12.4,
			density: 1750,
			gravity: 0.003
		},
		description: 'Deimos, la luna más pequeña de Marte, es un objeto celestial intrigante. Con su forma irregular y su superficie cubierta de cráteres, orbita a Marte a una distancia mayor que Fobos. Se cree que se formó a partir de material expulsado durante impactos en Marte.',
	},
	"io": {
		type: 'moon',
		owner: 'jupiter',
		name: "IO",
		icon: 'img/planets/io.jpg',
		textures: {
			diffuse: 'textures/io.jpg'
		},
		info: {
			dayDuration: 1.77,
			diameter: 3643.2,
			density: 3528,
			gravity: 1.796
		},
		description: 'IO, la luna volcánica de Júpiter, es un mundo asombroso y lleno de actividad. Con su superficie cubierta de volcanes activos y llanuras de lava, es el objeto más geológicamente activo del sistema solar. Las erupciones periódicas arrojan materiales a grandes alturas, creando una atmósfera tenue. Su vibrante coloración se debe a compuestos de azufre y materiales volcánicos.',
	},
	"europa": {
		type: 'moon',
		owner: 'jupiter',
		name: "Europa",
		icon: 'img/planets/europa.jpg',
		textures: {
			diffuse: 'textures/europa.png'
		},
		info: {
			dayDuration: 3.55,
			diameter: 3122,
			density: 3013,
			gravity: 1.314
		},
		description: 'Bajo su superficie helada, se encuentra un vasto océano subsuperficial, posiblemente líquido, con el potencial de albergar vida. Su corteza está marcada por fracturas y crestas, producto de la actividad tectónica. Europa ha capturado la atención de los científicos debido a la posibilidad de condiciones habitables y la exploración futura podría revelar sus secretos más profundos.',
	},
	"ganymede": {
		type: 'moon',
		owner: 'jupiter',
		name: "Ganimedes",
		icon: 'img/planets/ganymede.jpg',
		textures: {
			diffuse: 'textures/ganymede.jpg'
		},
		info: {
			dayDuration: 7.16,
			diameter: 5268,
			density: 1942,
			gravity: 1.428
		},
		description: 'Ganímedes, la luna más grande de Júpiter y del sistema solar, es un mundo fascinante y diverso. Con su superficie cubierta de cráteres, crestas y valles, revela una historia de impactos y actividad tectónica pasada. Ganímedes alberga un océano subsuperficial de agua salada, posiblemente en contacto con su núcleo metálico. Su atmósfera es extremadamente tenue.',
	},
	"callisto": {
		type: 'moon',
		owner: 'jupiter',
		name: "Calisto",
		icon: 'img/planets/callisto.jpg',
		textures: {
			diffuse: 'textures/callisto.jpg'
		},
		info: {
			dayDuration: 16.69,
			diameter: 4821,
			density: 1834,
			gravity: 1.235
		},
		description: 'Calisto, una luna de Júpiter, es un mundo antiguo y con una superficie llena de cráteres. Aunque no muestra mucha actividad geológica, se cree que tiene un océano subsuperficial de agua salada. Calisto es un objeto intrigante que podría tener las condiciones adecuadas para albergar vida.'
	},
	"mimas": {
		type: 'moon',
		owner: 'saturn',
		name: "Mimas",
		icon: 'img/planets/mimas.webp',
		textures: {
			diffuse: 'textures/mimas.png'
		},
		info: {
			dayDuration: 0.94,
			diameter: 396.4,
			density: 1147,
			gravity: 0.063
		},
		description: 'Mimas, una de las lunas de Saturno, es conocida por su aspecto distintivo en forma de "Estrella de la Muerte". Posee un enorme cráter, llamado Herschel, que cubre una gran parte de su superficie. Mimas es un mundo pequeño pero intrigante que nos ofrece pistas sobre los impactos pasados en el sistema saturnino.'
	},
	"enceladus": {
		type: 'moon',
		owner: 'saturn',
		name: "Encélado",
		icon: 'img/planets/enceladus.jpg',
		textures: {
			diffuse: 'textures/enceladus.jpg'
		},
		info: {
			dayDuration: 1.37,
			diameter: 504.2,
			density: 1609,
			gravity: 0.113
		},
		description: 'Encélado, otra luna de Saturno, es un mundo helado y sorprendente. Su superficie muestra rayas y grietas, y se destacan los géiseres en el polo sur. Estos géiseres expulsan agua y vapor de hielo, lo que sugiere la presencia de un océano subsuperficial. Encélado es un objeto fascinante que ofrece la posibilidad de encontrar condiciones propicias para la vida. Su actividad geológica y su potencial para albergar un océano subterráneo lo convierten en un objetivo clave para futuras misiones de exploración.'
	},
	"tethys": {
		type: 'moon',
		owner: 'saturn',
		name: "Tetis",
		icon: 'img/planets/tethys.jpg',
		textures: {
			diffuse: 'textures/tethys.jpg'
		},
		info: {
			dayDuration: 1.89,
			diameter: 1060,
			density: 980,
			gravity: 0.145
		},
		places: [
			{
				id: 'ithaca-chasma',
				name: 'Ithaca Chasma',
				icon: 'img/places/ithaca-chasma.jpg',
				location: {
					x:  -1.9500000000000015 ,
					y:  8.829999999999979
				}
			}
		],
		description: 'Tetis, una de las lunas de Saturno, es un mundo intrigante con una gran cicatriz en su superficie llamada Ithaca Chasma. Su superficie está cubierta por cráteres y rayas, que revelan una historia de impactos pasados y actividad tectónica. Tetis tiene un gran impacto que formó un extenso sistema de cañones en su superficie. Esta luna única sigue siendo un enigma que nos invita a desvelar más secretos sobre la formación y evolución de los satélites de Saturno.'
	},
	"dione": {
		type: 'moon',
		owner: 'saturn',
		name: "Dione",
		icon: 'img/planets/dione.jpg',
		textures: {
			diffuse: 'textures/dione.jpg'
		},
		info: {
			dayDuration: 2.74,
			diameter: 1123,
			density: 1478,
			gravity: 0.233
		},
		description: 'Dione, otra luna de Saturno, es un mundo impresionante y geológicamente activo. Tiene una superficie con cráteres, valles y montañas. Uno de sus rasgos más distintivos es un extenso sistema de rayas en su hemisferio delantero. Estas rayas son causadas por la actividad tectónica y criovolcanismo. Dione también tiene un océano subsuperficial, lo que lo hace aún más intrigante para la investigación sobre la posibilidad de vida en las lunas de Saturno. Su belleza y complejidad geológica lo convierten en un objetivo clave para futuras exploraciones espaciales.'
	},
	"rhea": {
		type: 'moon',
		owner: 'saturn',
		name: "Rhea",
		icon: 'img/planets/rhea.jpg',
		textures: {
			diffuse: 'textures/rhea.jpg'
		},
		info: {
			dayDuration: 4.52,
			diameter: 1527,
			density: 1236,
			gravity: 0.264
		},
		description: 'Rhea, luna de Saturno, es un mundo con una superficie llena de cráteres y una gran línea ecuatorial que sugiere actividad tectónica. Es el segundo satélite más grande de Saturno y su composición de hielo y roca la hace un objeto celestial fascinante.'
	},
	"titan": {
		type: 'moon',
		owner: 'saturn',
		name: "Titán",
		icon: 'img/planets/titan.jpg',
		textures: {
			diffuse: 'textures/titan.jpg'
		},
		info: {
			dayDuration: 15.95,
			diameter: 5150,
			density: 1880,
			gravity: 1.352
		},
		description: 'Titán, la luna más grande de Saturno, es un mundo único y misterioso. Tiene una densa atmósfera rica en nitrógeno y una geografía intrigante con ríos y lagos de hidrocarburos líquidos. Su superficie está oculta por una espesa capa de niebla que ha desafiado la observación directa durante mucho tiempo.'
	},
	"iapetus": {
		type: 'moon',
		owner: 'saturn',
		name: "Jápeto",
		icon: 'img/planets/iapetus.png',
		textures: {
			diffuse: 'textures/iapetus.jpg'
		},
		info: {
			dayDuration: 79.33,
			diameter: 1471,
			density: 1088,
			gravity: 0.223
		},
		places: [
			{
				id: 'roncevaux-terra',
				name: 'Roncevaux Terra',
				icon: 'img/places/roncevaux-terra.jpeg',
				location: {
					x:  1.1800000000000006,
					y:  0.11000000000000003
				}
			},
			{
				id: 'cassini-regio',
				name: 'Cassini Regio',
				icon: 'img/places/cassini-regio.jpg',
				location: {
					x:  -0.06999999999999987,
					y:  4.059999999999999
				}
			}
		],
		description: 'Iapetus, otra luna de Saturno, es un mundo intrigante con una apariencia binaria. Tiene una mitad brillante y una mitad oscura, lo que le da un aspecto de "yin y yang". Su hemisferio oscuro, llamado Cassini Regio, está cubierto por materiales orgánicos y partículas de hielo, mientras que el hemisferio brillante, llamado Roncevaux Terra, está lleno de cráteres.'
	},
	"miranda": {
		type: 'moon',
		owner: 'uranus',
		name: "Miranda",
		icon: 'img/planets/miranda.jpg',
		textures: {
			diffuse: 'textures/miranda.webp',
			bump: 'textures/miranda_bump.png'
		},
		info: {
			dayDuration: 33.84,
			diameter: 471.6,
			density: 1200,
			gravity: 0.079
		},
		description: 'Miranda, una de las lunas de Urano, es un mundo pequeño y sorprendente. Tiene una superficie accidentada con montañas, cañones y crestas que crean un paisaje único. Miranda también muestra signos de actividad geológica pasada, como fracturas y terrazas. Su apariencia caótica y variada la hace fascinante para la investigación científica.'
	},
	"ariel": {
		type: 'moon',
		owner: 'uranus',
		name: "Ariel",
		icon: 'img/planets/ariel.jpg',
		textures: {
			diffuse: 'textures/ariel.webp'
		},
		info: {
			dayDuration: 60.48,
			diameter: 1157,
			density: 1593,
			gravity: 0.270
		},
		description: 'Ariel, una luna de Urano, es un mundo con una superficie accidentada y fracturas que sugieren actividad geológica pasada. Su coloración brillante la hace destacar entre las lunas de Urano. Ariel es un objeto intrigante que continúa desafiando nuestra comprensión de las lunas heladas del sistema solar.'
	},
	"umbriel": {
		type: 'moon',
		owner: 'uranus',
		name: "Umbriel",
		icon: 'img/planets/umbriel.jpg',
		textures: {
			diffuse: 'textures/umbriel.webp'
		},
		info: {
			dayDuration: 99.36,
			diameter: 1169,
			density: 1459,
			gravity: 0.230
		},
		description: 'Umbriel, otra luna de Urano, es un mundo oscuro y enigmático. Su superficie está cubierta por cráteres y presenta una región conocida como "Wunda", con una formación en forma de huevo de pascua. Umbriel también exhibe una amplia variedad de terreno, desde valles hasta montañas. Se cree que su color oscuro se debe a la presencia de material orgánico y compuestos ricos en carbono.'
	},
	"titania": {
		type: 'moon',
		owner: 'uranus',
		name: "Titania",
		icon: 'img/planets/titania.jpg',
		textures: {
			diffuse: 'textures/titania.webp'
		},
		info: {
			dayDuration: 209.04,
			diameter: 1578,
			density: 1710,
			gravity: 0.379
		},
		description: 'Titania, otra luna de Urano, tiene una cuenca de impacto enorme, llamada Gertrude, que abarca casi un tercio de su diámetro. Esta luna también posee una rara característica llamada "Aracnoides", una red de grietas radiales que se cree que se formaron por estallidos tectónicos.'
	},
	"oberon": {
		type: 'moon',
		owner: 'uranus',
		name: "Oberón",
		icon: 'img/planets/oberon.jpg',
		textures: {
			diffuse: 'textures/oberon.webp'
		},
		info: {
			dayDuration: 323.04,
			diameter: 1522,
			density: 1563,
			gravity: 0.346
		},
		description: 'Oberón, una de las lunas de Urano es la más alejada. Su superficie muestra signos de actividad geológica pasada. Oberón tiene un gran cráter, llamado Mommur Chasma, que es uno de los rasgos más destacados de su paisaje. Su coloración oscura sugiere la presencia de materiales ricos en carbono y compuestos orgánicos.'
	},
	"triton": {
		type: 'moon',
		owner: 'neptune',
		name: "Tritón",
		icon: 'img/planets/triton.jpg',
		textures: {
			diffuse: 'textures/triton.jpg'
		},
		info: {
			dayDuration: -140.52,
			diameter: 2706,
			density: 2059,
			gravity: 0.799
		},
		description: 'Tritón es el único satélite grande en el sistema solar que tiene una órbita retrógrada, lo que significa que orbita en dirección opuesta a la rotación de su planeta. Se cree que Tritón es un objeto capturado por la gravedad de Neptuno y que originalmente proviene de las regiones exteriores del sistema solar. Su atmósfera delgada es principalmente nitrógeno con una pizca de metano y, debido a su lejanía del Sol, es uno de los lugares más fríos del sistema solar.'
	},
	"charon": {
		type: 'moon',
		owner: 'pluto',
		name: "Caronte",
		icon: 'img/planets/charon.jpg',
		textures: {
			diffuse: 'textures/charon.jpg'
		},
		info: {
			dayDuration: 153.39,
			diameter: 1207,
			density: 1702,
			gravity: 0.273
		},
		places: [
			{
				id: 'mordor-macula',
				name: 'Mordor Macula',
				icon: 'img/places/mordor-macula.jpg',
				location: {
					x:  -1.4400000000000008,
					y:  0.09999999999999999
				}
			}
		],
		description: 'Caronte tiene un cráter gigante en su polo norte llamado Mordor Macula, y otro más pequeño llamado Kubrick Mons cerca del ecuador. Es interesante porque forma un sistema binario con Plutón, donde ambos cuerpos orbitan alrededor de un punto en común, en lugar de que solo Plutón orbite alrededor de Caronte.'
	}
}
