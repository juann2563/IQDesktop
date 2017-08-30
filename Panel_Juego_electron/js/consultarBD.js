
var preguntas = [];
var respuestas = [];
var ifDB = 0; // verifica si ya se había consultado la base de datos
var selectPregunta = 0; // va mostrando las preguntas si repetir ya que aumenta el contador
var globalRows = 0;
function mostrarRespuesta(){
    $("#p_respuesta").show(1000);
    $('#countdown').countdown360().stop();
}

function consultaBD(){
    //var arr = $('#'+ id + ' img').attr('src').split('.');
    
    //abre la ventan modal y consulta la base de datos
    $('#myModal').modal('show');  
    $("#p_respuesta").hide();

    if(ifDB ==0){

        var sqlite3 = require('sqlite3').verbose();
        var fs  = require('fs');
        //const path = require('path');
        //const dbPath = path.resolve('QQSI_DB.db');
        // Setup database:
        var dbFile = './DB/QQSI_DB.db';
        var dbExists = fs.existsSync(dbFile);

        // Initialize the database:
        var db = new sqlite3.Database(dbFile);
        db.all("SELECT * FROM A", function(err, rows) {
            globalRows = rows.length; // tamaño de la consulta para saber cuando para de mostrar
            for (var i=0; i<rows.length; i++){
                preguntas[i] = rows[i].Pregunta;
                respuestas[i] = rows[i].Respuesta;
            }
            ifDB = 1; // ya consultó una vez la BD ya no es necesario volver a consultar
            if(selectPregunta>rows.length){
                $('#p_pregunta').text("No hay más preguntas por esta letra");
            }
            else{
                $('#p_pregunta').text('' + preguntas[selectPregunta]);
                $('#p_respuesta').text('' + respuestas[selectPregunta]);
                selectPregunta++;    
            }
            
        });
          
        db.close();
    }
    if (ifDB == 1) {
        if(selectPregunta>globalRows-1){
                $('#p_pregunta').text("No hay más preguntas por esta letra");
            }
        else{
            $('#p_pregunta').text('' + preguntas[selectPregunta]);
            $('#p_respuesta').text('' + respuestas[selectPregunta]);
            selectPregunta++;  
        }    
    }

}  