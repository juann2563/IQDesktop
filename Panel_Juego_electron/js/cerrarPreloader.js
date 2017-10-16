function numEquipos(){
    var sqlite3 = require('sqlite3').verbose();
        var fs  = require('fs');
        //const path = require('path');
        //const dbPath = path.resolve('QQSI_DB.db');
        // Setup database:
        var dbFile = './DB/QQSI_DB.db';
        var dbExists = fs.existsSync(dbFile);

        // Initialize the database:
        var db = new sqlite3.Database(dbFile);
        db.serialize(function () {
            // Los query de mysql también funcionan
            // selecciona la última configuración realziada y así decide cuánntos equipos mostrar en el panel juego
            db.all("SELECT * FROM configuracion ORDER BY ID DESC LIMIT 1", function(err, rows) {
            	
 
            if(rows[0].num_equipos == 3){
            	$('#panelEquipo3').show();
                $('.imgEquipo3').show();
                $('.textEquipo3').show();
            	//alert(rows[0].num_equipos);
            }
            if(rows[0].num_equipos == 4){
            	$('#panelEquipo3').show();
            	$('#panelEquipo4').show();
                $('.imgEquipo3').show();
                $('.imgEquipo4').show();
                $('.textEquipo3').show();
                $('.textEquipo4').show();
            }

        });
            // body...
        });
        
          
        db.close();
}
var container = document.getElementById("container_preloader");
// setTimeout perimite aejecutar algo luego de haber pasado cierto tiempo
setTimeout(function(){
	container.classList.add('cerrar');
	numEquipos();
	$('#header').fadeIn(2000);
	$('#panel').fadeIn(2000);
	
},9000);