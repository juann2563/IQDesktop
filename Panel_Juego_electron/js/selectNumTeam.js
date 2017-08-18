//Variable para manener un default de equipos por si el usuario
// no selecciona ninguna opción
var state = 0;
//Add to database the number of team to participated
function insertNumTeam(){
	if(state == 0){
		var btn = document.getElementById("btn1");
		btn.classList.add("selectTeam");	
	}
	else{
		var numteam = $('.selectTeam').text();	
	}
	
	var sqlite3 = require('sqlite3').verbose();
	//var fs  = require('fs');
	//const path = require('path');
	//const dbPath = path.resolve('QQSI_DB.db');
	// Setup database:
	var dbFile = 'DB/QQSI_DB.db';
	//var dbExists = fs.existsSync(dbFile);

	// Initialize the database:
	var db = new sqlite3.Database(dbFile);
	db.serialize(function(){
		// Insert some data using a statement:
	var statement = db.prepare("INSERT INTO 'configuracion' ('num_equipos') " +
	'VALUES (?)');
	//ejecuto el query a la base de datos
	statement.run(numteam);
	statement.finalize();
	// Close the database:
	
	});
	db.close();
	
	$('.myModal').fadeOut(1000);
}

// determinate what is the selected option for number of teams
function numTeam(clicked_id){
	// state=1 because  this way when it insert data into DB determine id insert default teams of change
	state = 1;
	var x = document.getElementById(clicked_id);
	x.classList.add("selectTeam");
	for(var i=1; i<4; i++){
				
				if("btn"+i == clicked_id){
					
				}
				else {
					$('#btn'+i).removeClass('selectTeam');
				}
			}
}
