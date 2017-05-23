$(document).ready(function(){
  $("#add_user").click(function(){
  	var sqlite3 = require('sqlite3').verbose();
	var fs  = require('fs');
	 
	// Setup database:
	var dbFile = 'BD/QQSI_DB.db';
	var dbExists = fs.existsSync(dbFile);

	// Initialize the database:
	var db = new sqlite3.Database(dbFile);

	// Insert some data using a statement:
	var statement = db.prepare("INSERT INTO 'A' ('Pregunta', 'Respuesta') " +
	'VALUES (?, ?)');
	statement.run('coma', 'comer');
	statement.finalize();
	// Close the database:
	db.close();
    alert("Hello");
  });
});