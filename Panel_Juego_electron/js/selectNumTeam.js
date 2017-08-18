
//Add to database the number of team to participated
function insertNumTeam(){
	var numteam = $('.selectTeam').text();
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
