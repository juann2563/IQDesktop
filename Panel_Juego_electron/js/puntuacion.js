
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
	//Se obtiene el nmbre del equipo al cual se le hizo clic
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
	    var query = "SELECT color FROM usuarios WHERE equipo = 'zabala'"; // pendiente por verifficar por qué no funciona
	    // consulta la base de datos
	    db.serialize(function(){
	        db.all("SELECT *FROM usuarios", function(err, rows){
	        	//alert(typeof nameEquipo);
	        	//alert(nameEquipo + rows[0].color);
	        	for(var i=0; i<rows.length; i++)
	        	{
	        		//alert(rows[i].equipo + "" + nameEquipo);
	        		
	        		if(rows[i].equipo.trim() == nameEquipo.trim()) // el .trim() elimina los espacio que hayan en el string
	        		{
	        			//alert("Hoal");
	        			var imgChange = $("#imgActual").text();
	        			//var parentId = $("#"+imgChange).closest('div').prop('id');
    					//alert(parentId);
	        			//var imgChange = $("#imgActual").text().match(/\d/g).join("");
	        			//alert(x);
	        			$("#backImg" + imgChange).css("background", "none");
	        			$("#backImg" + ).css("background", "none");
	        			//document.getElementById("backImg" + imgChange).style.backgroundColor = "" + rows[i].color;
	        			alert("ImagenCambiada: " + rows[i].color);
	        			break;	

	        		}
	        	} 
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
