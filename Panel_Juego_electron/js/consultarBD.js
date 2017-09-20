
function mostrarRespuesta(){
    $("#p_respuesta").show(1000);
    $('#countdown').countdown360().stop();
}

function consultaBD(id){
    //var arr = $('#'+ id + ' img').attr('src').split('.');
    
    //abre la ventan modal y consulta la base de datos
    $('#myModal').modal('show');  
    $("#p_respuesta").hide();
    var x = $('#backImg' + id.substring(4)).css('background-image'); //obtengo la url complea de la imagen
    var x2 = x.substr(x.length-8); //obtengo los últimos 8carácteres de la url
    x2 = ''+ x2[0] + '' + x2[1]; // obtengo los dos primeros caracteres que son los que necesito para saber que imagen es
    x2 = String.fromCharCode(parseInt(x2)); // Copnvierto a codifo ascii para generar la letra correspondiente y poder consultar la base de datos
    //alert(x2);
    var sqlite3 = require('sqlite3').verbose();
    var fs = require('fs');
    var dbFile = './DB/QQSI_DB.db';
    var dbExists = fs.existsSync(dbFile);
    var pos = 0;
    var db = new sqlite3.Database(dbFile);
    var ide = 0;
    db.serialize(function(){
        db.all("SELECT * FROM " + x2, function(err, rows){
            for(var i=0; i<rows.length; i++){
                pos = i;
                ide = rows[i].id;
                if(rows[i].used != ""){
                    $('#p_pregunta').text('' + rows[i].pregunta);
                    $('#p_respuesta').text('' + rows[i].respuesta);
                    break;
                }
                
            }
        });
        
                    //ejecuto el query a la base de datos
        db.run("UPDATE A SET used = 'ok' WHERE respuesta = $id" ,{
            $val: "ok",
            $id: "Aislante"
        });
        
    });
    db.close();
    // if(ifDB ==0){

    //     var sqlite3 = require('sqlite3').verbose();
    //     var fs  = require('fs');
    //     //const path = require('path');
    //     //const dbPath = path.resolve('QQSI_DB.db');
    //     // Setup database:
    //     var dbFile = './DB/QQSI_DB.db';
    //     var dbExists = fs.existsSync(dbFile);

    //     // Initialize the database:
    //     var db = new sqlite3.Database(dbFile);
    //     db.all("SELECT * FROM A", function(err, rows) {
    //         globalRows = rows.length; // tamaño de la consulta para saber cuando para de mostrar
    //         for (var i=0; i<rows.length; i++){
    //             preguntas[i] = rows[i].Pregunta;
    //             respuestas[i] = rows[i].Respuesta;
    //         }
    //         ifDB = 1; // ya consultó una vez la BD ya no es necesario volver a consultar
    //         if(selectPregunta>rows.length){
    //             $('#p_pregunta').text("No hay más preguntas por esta letra");
    //         }
    //         else{
    //             $('#p_pregunta').text('' + preguntas[selectPregunta]);
    //             $('#p_respuesta').text('' + respuestas[selectPregunta]);
    //             selectPregunta++;    
    //         }
            
    //     });
          
    //     db.close();
    // }
    // if (ifDB == 1) {
    //     if(selectPregunta>globalRows-1){
    //             $('#p_pregunta').text("No hay más preguntas por esta letra");
    //         }
    //     else{
    //         $('#p_pregunta').text('' + preguntas[selectPregunta]);
    //         $('#p_respuesta').text('' + respuestas[selectPregunta]);
    //         selectPregunta++;  
    //     }    
    // }

}  