'use strict';

function versionModulo(modulo, callback) {
	var path = "./node_modulees/" + modulo + "/package.json";
	var fs = require('fs');
    fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
        if (err) {
            console.log("Error!" + err);
            callback(err);
            return;
        }

        var modulo = JSON.parse(data);
 
        var version = modulo['version'];
        callback(err,version);

    });

}



versionModulo('chance', function(err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La version del módulo es:', str);
});
