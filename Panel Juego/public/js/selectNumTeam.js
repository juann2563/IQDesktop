function insertNumTeam(){
	var numteam = $('.selectTeam').text();
	var sqlite3 = require('sqlite3').verbose();
	var fs  = require('fs');
	//const path = require('path');
	//const dbPath = path.resolve('QQSI_DB.db');
	// Setup database:
	var dbFile = 'QQSI_DB.db';
	var dbExists = fs.existsSync(dbFile);

	// Initialize the database:
	var db = new sqlite3.Database(dbFile);

	// Insert some data using a statement:
	var statement = db.prepare("INSERT INTO 'configuracion' ('num_equipos') " +
	'VALUES (?)');
	//ejecuto el query a la base de datos
	statement.run(numteam);
	statement.finalize();
	// Close the database:
	db.close();
	$('.myModal').fadeOut(1000);
}
function numTeam(clicked_id){
	var x = document.getElementById(clicked_id);
	x.classList.add("selectTeam");
	for(var i=1; i<4; i++){
				
				if("btn"+i == id){
				}
				else {
					$('#btn'+i).removeClass('selectTeam');
				}
			}
}
