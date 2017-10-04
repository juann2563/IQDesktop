

function avatarUsers(equipo){
    var sqlite3 = require('sqlite3').verbose();
    var fs  = require('fs');
    //const path = require('path');
    //const dbPath = path.resolve('QQSI_DB.db');
    // Setup database:
    var dbFile = './DB/QQSI_DB.db';
    var dbExists = fs.existsSync(dbFile);

    // Initialize the database:
    var db = new sqlite3.Database(dbFile);
    db.serialize(function (){
        db.all("SELECT * FROM usuarios ORDER BY ID DESC LIMIT 4", function(err, rows) {
            //var img = $(".imgEquipo" + equipo);
            //alert(rows[0].avatar);
            //alert(img.length);
            //alert(imgLength.length);
            // se obtiene la cantidad de elements que existen por la misma clase
            var imagenes = document.getElementsByClassName("imgEquipo" + equipo);
            
                
            for(var j = 0; j<imagenes.length; j++){}
                // se le asigna la msima imagen a todos los elementos con la msima clase
                imagenes[j].src = './'+ rows[parseInt(equipo)-1].avatar; // cambia la imagen a todas la imagenes con la misma clase  
            }
                
                               // $(".imgEquipo" + parseInt(i+1)).attr('src', './'+ rows[parseInt(equipo)-1].avatar);    
            
            // Se le asigna el nombre al equipo correspondiente
            $('#textEquipo' + equipo).text('' + rows[parseInt(equipo)-1].equipo);
            // Se le asigna el color a cada equipo
            $('#colorEquipo' + equipo).css('background-color','' + rows[parseInt(equipo)-1].color);
            $('#modaltextEquipo4').html('' + rows[parseInt(equipo)-1].equipo);
        });
    });
    
      
    db.close();
}
