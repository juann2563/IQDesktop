
function mostrarRespuesta(){
    $("#p_respuesta").show(1000);
    $('#countdown').countdown360().stop();
}
var idPregunta = 0;
var query = "";

function consultaBD(id){
    //var arr = $('#'+ id + ' img').attr('src').split('.');
    //abre la ventan modal y consulta la base de datos
    
    var x = $('#backImg' + id.substring(4)).css('background-image'); //obtengo la url complea de la imagen
    var x2 = x.substr(x.length-8); //obtengo los últimos 8carácteres de la url
    x2 = ''+ x2[0] + '' + x2[1]; // obtengo los dos primeros caracteres que son los que necesito para saber que imagen es
    x2 = String.fromCharCode(parseInt(x2)); // Copnvierto a codifo ascii para generar la letra correspondiente y poder consultar la base de datos
    //alert(x2);
    var pos = 0;
    
    var sqlite3 = require('sqlite3').verbose();
    var fs = require('fs');
    var dbFile = './DB/QQSI_DB.db';
//var dbExists = fs.existsSync(dbFile);

    var db = new sqlite3.Database(dbFile);
    db.serialize(function(){
        var ifQuestions = 0;
        db.all("SELECT * FROM " + x2, function(err, rows){
            for(var i=0; i<rows.length; i++){
                if(rows[i].used != "ok"){
                    pos = i;
                    $('#myModal').modal('show');  
                    $("#p_respuesta").hide();
                    $('#p_pregunta').text('' + rows[i].pregunta);
                    $('#p_respuesta').text('' + rows[i].respuesta);
                    idPregunta = rows[i].id;
                    query = "UPDATE " + x2 + " SET used='ok' " + "WHERE ID=" + idPregunta;
                    //console.log(idPregunta);
                    break;
                }
                else{
                    ifQuestions++;
                }
            }
            if(ifQuestions == rows.length){
                alert("No hay mas preguntas por esta letra");
                $('#myModal').modal('hide');
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