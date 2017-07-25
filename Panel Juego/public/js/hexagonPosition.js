var i = 1;
var posleft = 20;
//empieza en -10 porque con 0 no se posiciona en la 
//parte superior sino más abajo como si tuviera una margen
var arriba = -10;
var posleftInit = 20;
var posleftAfter = 20+102/2;

//Funcion para obtener los id de los hexágonos y posicionarlos correctamente
function hexagonos(izquierda,arriba){
	// se obtiene los id de los hexagonos
	var x = document.getElementById("hexa"+i);
	//asigno posición absoluta
    x.style.position = 'absolute';
    
    //asigno posición a la izquierda
    x.style.left = izquierda + 'px';
    //Asigno posición parte superior top
    x.style.top = arriba + 'px';
    //$('#' + x).attr("data-toggle","modal");
    //$('#' + x).attr("data-target","#myModal");
}
// utilizo un for para ir recorriendo todos los hexagonos creados e ir 
//asignando la posicion necesaria
for (i = 1; i<37; i++) {
	switch (i) {
		case 7:
			posleft = posleftAfter;
			arriba = 77.5;
			break;

		case 13:
			posleft = posleftInit;
			arriba = arriba+88;
			break;

		case 19:
			posleft = posleftAfter;
			arriba = arriba+88;
			break;

		case 25:
			posleft = posleftInit;
			arriba = arriba+88;
			break;

		case 31:
			posleft = posleftAfter;
			arriba = arriba+88;
			// statements_1
			break;
	}
	hexagonos(posleft,arriba);
	posleft = posleft + 102;
}