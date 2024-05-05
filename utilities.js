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

function HTMLfromString(htmlString) {
	let div = document.createElement('div')
	div.innerHTML = htmlString
	return div.firstChild
}
