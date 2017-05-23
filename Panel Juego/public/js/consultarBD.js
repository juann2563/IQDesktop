//var preguntas = [];
//var respuestas = [];
function mostrarRespuesta(){
    $("#p_respuesta").show(1000);
    $('#countdown').countdown360().stop();
}
function consultaBD(){
    //var arr = $('#'+ id + ' img').attr('src').split('.');
    
    //alert(bg);
    //abre la ventan modal y consulta la base de datos
    $('#myModal').modal('show');
    // var bg = $("#backImg" + cont).css("background-image");
    // bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
    var preguntas = [];
    var respuestas = [];
    var sqlite3 = require('sqlite3').verbose();
    var fs  = require('fs');
    //const path = require('path');
    //const dbPath = path.resolve('QQSI_DB.db');
    // Setup database:
    var dbFile = 'QQSI_DB.db';
    var dbExists = fs.existsSync(dbFile);

    // Initialize the database:
    var db = new sqlite3.Database(dbFile);
    db.all(query + "SELECT * FROM A", function(err, rows) {  
        rows.forEach(function (row) {

            preguntas[0] = row.Pregunta;
            respuestas[0] = row.Respuesta;
            $('#p_pregunta').text('' + preguntas[0]);
            $('#p_respuesta').text('' + respuestas[0]);  
            alert(row);  
        })  
    });  
    db.close();   
}  