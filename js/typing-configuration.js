addEventListener("load",()=>{
	var typed = new Typed('.typed', {
		// strings: [
		//  	'<i class="txt">Técnico en Programación</i>',
		//  	'<i class="txt">Desarrollador de Software</i>',
		//  	'<i class="txt">Desarrollador Web Full-Stack</i>',
		// ],
		stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
		typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
		startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
		backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
		smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
		shuffle: false, // Alterar el orden en el que escribe las palabras.
		backDelay: 200, // Tiempo de espera despues de que termina de escribir una palabra.
		loop: false, // Repetir el array de strings
		loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
		showCursor: true, // Mostrar cursor palpitanto
		cursorChar: '|', // Caracter para el cursor
		contentType: 'html', // 'html' o 'null' para texto sin formato
	});
})