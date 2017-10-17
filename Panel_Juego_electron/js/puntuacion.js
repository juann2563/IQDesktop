
var Modal_type = 0;
function puntuacionEquipos(opcion){
	if(opcion == 1)
	{
		Modal_type = 1;
	}
	if(opcion == 2){
		Modal_type = 2;
	}
	$('#modalEquipos').modal('show');
	
}
function cerrarModalEquipos(){
	$('#modalEquipos').modal('hide');
}
function puntuacionCorrecto(equipo)
{
	//Cuando entra a esta función solo permite hacer cambios una vez cada vez que se entra.
	// Cuando es correcto aumenta el progressbar correcto
	if(Modal_type == 1)
	{
		//var x = document.getElementById("Equipo" + equipo + "Correcto");
	//aalert(alert($("#Equipo" + equipo + "Correcto").css('width')););
	//var px = $("#Equipo" + equipo + "Correcto").css('width');
		var nameEquipo = $("#textEquipo" + equipo).text();
		//alert(nameEquipo);
		var px = $("#Equipo" + equipo + "Correcto").width();
		var progress = $('#Equipo' + equipo + "ProgressRight").text().replace(/\D/g,'');
		var numQuestions = parseInt(progress) + parseInt(1);
		// Aumenta el porcentaje cada vez que se presione el boton
		var porcentaje = ((px*100)/265.578)+5;
		//alert(parseInt(px));
		$("#Equipo" + equipo + "Correcto").css('width', '' + parseInt(porcentaje) + '%');
		//Asign text to span in proress bar
		$('#Equipo' + equipo + "ProgressRight").text(" " + numQuestions + " Preguntas");

		// consulta base de datos para poder cambiar el color de la letra
		var sqlite3 = require('sqlite3').verbose();
	    var fs = require('fs');
	    var dbFile = './DB/QQSI_DB.db';

	    var db = new sqlite3.Database(dbFile);
	    //var query1 = nameEquipo;
	    var query = "SELECT color FROM usuarios WHERE equipo = 'zabala'";
	    // consulta la base de datos
	    db.serialize(function(){
	        db.all("SELECT color FROM usuarios WHERE equipo = " + "'" + nameEquipo + "'", function(err, rows){
	            //Consulta la base de datos para obtener el color del equipo y asignarlo a la imagen
	            var imgChange = $("#imgActual").text();
	            alert(query);
	            alert(rows);
	            //$("#"+ imgChange).css('background-color',''+rows[0].color);  
	        });
	   
	    });
	    db.close();   	
		Modal_type = 0;
	}
	// cuando es incorrecta la pregunta aumenta el progressba incorrecto
	if(Modal_type == 2)
	{
		//var x = document.getElementById("Equipo" + equipo + "Incorrecto");
	//aalert(alert($("#Equipo" + equipo + "Correcto").css('width')););
	//var px = $("#Equipo" + equipo + "Correcto").css('width');
		var px = $("#Equipo" + equipo + "Incorrecto").width();
		var progress = $('#Equipo' + equipo + "ProgressWrong").text().replace(/\D/g,'');
		var numQuestions = parseInt(progress) + parseInt(1);
		var porcentaje = ((px*100)/265.578)+5;
		
	//alert(parseInt(px));
		$("#Equipo" + equipo + "Incorrecto").css('width', '' + parseInt(porcentaje) + '%');
	//Asign text to span in proress bar
		$('#Equipo' + equipo + "ProgressWrong").text(" " + numQuestions + " Preguntas");
		Modal_type = 0;
	}
	
}
