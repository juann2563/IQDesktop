function cambiarColor()
{
	var color = $('#imgActual').text();
	var sqlite3 = require('sqlite3').verbose();
    var fs = require('fs');
    var dbFile = './DB/QQSI_DB.db';

    var db = new sqlite3.Database(dbFile);
    // consulta la base de datos
    db.serialize(function(){
        db.all("SELECT pregunta, respuesta, id FROM " + x2 + " WHERE (used IS NULL or used = '')", function(err, rows){
            // verifica cada pregunta para ver si fue consultada
            if(rows.length == 0){
                alert("No hay más preguntas por esta letra");
            }
            else{
                $('#myModal').modal('show');
                $('#imgActual').text('' + imgActual);  
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