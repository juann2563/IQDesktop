function coneccionBD(equipo,institucion,avatar,date,color){
	var sqlite3 = require('sqlite3').verbose();
	//var fs  = require('fs');
	//const path = require('path');
	//const dbPath = path.resolve('QQSI_DB.db');
	// Setup database:
	var dbFile = './DB/QQSI_DB.db';
	//var dbExists = fs.existsSync(dbFile);

	// Initialize the database:
	var db = new sqlite3.Database(dbFile);

	// Insert some data using a statement:
	var statement = db.prepare("INSERT INTO 'usuarios' ('equipo', 'institucion','avatar','fecha','color') " +
	'VALUES (?, ?,?,?,?)');
	//ejecuto el query a la base de datos
	statement.run(equipo, institucion,avatar,date,color);
	statement.finalize();
	// Close the database:
	db.close();
}
function mensajeAlert(mensaje){

	swal({
		  title: "Error!",
		  text: "" + mensaje,
		  type: "error",
		  confirmButtonText: "OK",
		  confirmButtonColor: "#455A64",
		});

}
function validarRegistro(){
	
	// Get Date when a user is registered
	var date = new Date().toString();
	// extract only date and hour from date
  	var res = date.substring(0, 24);
	//Se obtienes los valores de los campos nombre e institución
	
	var equipo = $('#equipo').val();
    var institucion = $('#institucion').val();
    //var formulario = document.getElementBy'')
	// //obtengo la ruta comleta y el nombre de la imagen del avatar seleccionado
	var avatar = $('.active img').attr('src');
	
	/*Se empieza la validación del formulario con las combinaciones posibles
	Y se muestra una alerta si falta algun campo*/
	/*Se realiza un return false en cada validación para que el campo
	que si llenó correctamente no se borre el texto y solo sea llenar 
	el campo faltante*/
    if (equipo == "" && institucion == "" && avatar == null){
    	var msg = "Debe ingresar el nombre del equipo, la institución y escoger un avatar";
    	
    	mensajeAlert(msg);
    	/*con el return false, se mantien los datos ingresdos por el usuario
    	y no se envía el formulario*/
        return false;
    }
    if(equipo == "" && institucion != "" && avatar == null){
    	var msg = "Debe ingresar el nombre del equipo y escoger un avatar";
    	mensajeAlert(msg);
    	return false;
    }
    if(equipo != "" && institucion == "" && avatar == null){
    	var msg = "Debe ingresar el nombre de la institucion y escoger un avatar";
    	mensajeAlert(msg);
    	return false;
    }
    
    if(equipo != "" && institucion != "" && avatar == null){
    	var msg = "Debe escoger un avatar";
    	mensajeAlert(msg);
    	return false;
    }
    if(equipo == "" && institucion == "" && avatar != null){
    	var msg = "Debe ingresar el nombre del equipo y la institución";
    	mensajeAlert(msg);
    	return false;
    }
    if(equipo != "" && institucion == "" && avatar != null){
    	var msg = "Debe que ingresar el nombre de la institución";
    	mensajeAlert(msg);
    	return false;
    }
    if(equipo != "" && institucion != "" && avatar != null){
    	var msg = "Equipo Registrado";
    	swal({
		  title: "" + msg,
		  text: "Registra otro equipo",
		  type: "success",
		  //confirmButtonColor: "#8CD4F5",
		  confirmButtonColor: "#455A64",
		  confirmButtonText: "OK",
		  closeOnConfirm: true,
		},
		function(isConfirm){
		  if (isConfirm) {
		    $('#equipo').val('');
		    $('#institucion').val('');
		    $('a').removeClass("active");
		    //colorTeam is a global varable from selectColorTeam for 
		    // get the current color team
		    coneccionBD(equipo, institucion, avatar, res,colorTeam);
		  } 
		});
    	return false;
    	
    }
    
}

