'use strict';
 //Cargar librería del API
 var fs = require('fs');

 // leer fichero de texto en utf8 y sacar en consola su contenido
 fs.readFile('./package.json', {encoding:'utf8'}, function(err, data){
 	if(err) {
 		console.log("Error!" + err);
 		return;
 	}

 	var paquete = JSON.parse(data);

 	//Si hay error esto no lo va a escribir por el return dentro del if.
 	console.log(paquete);
 	console.log("fin");

 });