function avatarUsers(equipo){
    var sqlite3 = require('sqlite3').verbose();
    var fs  = require('fs');
    //const path = require('path');
    //const dbPath = path.resolve('QQSI_DB.db');
    // Setup database:
    var dbFile = 'QQSI_DB.db';
    var dbExists = fs.existsSync(dbFile);

    // Initialize the database:
    var db = new sqlite3.Database(dbFile);
    db.all("SELECT * FROM usuarios ORDER BY ID DESC LIMIT 4", function(err, rows) {
        $('#imgEquipo'+ equipo).attr('src', ''+ rows[parseInt(equipo)-1].avatar);
        $('#textEquipo' + equipo).text('' + rows[parseInt(equipo)-1].equipo);
        $('#colorEquipo' + equipo).css('background-color','' + rows[parseInt(equipo)-1].color);
        $('#modaltextEquipo4').html('' + rows[parseInt(equipo)-1].equipo);
    });
      
    db.close();
}
