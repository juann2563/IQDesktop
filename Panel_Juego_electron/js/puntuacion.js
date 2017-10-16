function puntuacionEquipos(){
	$('#modalEquipos').modal('show');
}
function puntuacionCorrecto(equipo)
{
	var x = document.getElementById("Equipo" + equipo + "Correcto");
	//aalert(alert($("#Equipo" + equipo + "Correcto").css('width')););
	//var px = $("#Equipo" + equipo + "Correcto").css('width');
	var px = $("#Equipo" + equipo + "Correcto").width();
	// Aumenta el porcentaje cada vez que se presione el boton
	var porcentaje = ((px*100)/265.578)+3;
	//alert(parseInt(px));
	$("#Equipo" + equipo + "Correcto").css('width', '' + parseInt(porcentaje) + '%');
}