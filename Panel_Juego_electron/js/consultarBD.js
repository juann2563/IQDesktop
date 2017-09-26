
function mostrarRespuesta(){
    $("#p_respuesta").show(1000);
    $('#countdown').countdown360().stop();
}
var idPregunta = 0;
var query = "";

function consultaBD(id){
    
    var x = $('#backImg' + id.substring(4)).css('background-image'); //obtengo la url complea de la imagen
    var x2 = x.substr(x.length-8); //obtengo los últimos 8 carácteres de la url
    x2 = ''+ x2[0] + '' + x2[1]; // obtengo los dos primeros caracteres que son los que necesito para saber que imagen es
    if(x2 == '64'){
        x2 = '42'; // se realiza porque la imagen con nombre 64 es el asterisco(*)
        // pero en ascii el * es 42 para así poder consultar la tabla que es
        x2 = String.fromCharCode(parseInt(x2)); // Convierto a codigo ascii para generar la letra correspondiente y poder consultar la base de datos
    }
    else{
        x2 = String.fromCharCode(parseInt(x2)); // Convierto a codigo ascii para generar la letra correspondiente y poder consultar la base de datos
    }
    
    //alert(x2);
    var pos = 0;
    
    var sqlite3 = require('sqlite3').verbose();
    var fs = require('fs');
    var dbFile = './DB/QQSI_DB.db';

    var db = new sqlite3.Database(dbFile);
    // consulta la base de datos
    db.serialize(function(){
        db.all("SELECT pregunta, respuesta, id FROM " + x2 + " WHERE used IS NULL", function(err, rows){
            // verifica cada pregunta para ver si fue consultada
            if(rows.length == 0){
                alert("No hay más preguntas por esta letra");
            }
            else{
                $('#myModal').modal('show');  
                $("#p_respuesta").hide();
                $('#p_pregunta').text('' + rows[0].pregunta);
                $('#p_respuesta').text('' + rows[0].respuesta);
                idPregunta = rows[0].id;
                query = "UPDATE " + x2 + " SET used='ok' " + "WHERE ID=" + idPregunta;
            }
        });
   
    });
    db.close();    
} 

// funcion que pone la paralabra ok en la base de datos en la columna used para
// saber que la pregunta ya fue consultada y no volverla a mostrar
function modalClose(){
    var sqlite3 = require('sqlite3').verbose();
    var fs = require('fs');
    var dbFile = './DB/QQSI_DB.db';
//var dbExists = fs.existsSync(dbFile);

    var db = new sqlite3.Database(dbFile);
    // realiza el query a la base de datos
    db.serialize(function(){
        db.run(query);
    });
    // cierra el modal
    $('#myModal').modal('hide');
} 