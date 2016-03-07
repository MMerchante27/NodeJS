"use strict";

var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' }); //Escribe cabecera para protocolo Http
    response.end('Hola node\n');
}); //Devuelve un metodo del paquete http

//Instanciamos 
server.listen(1337, "127.0.0.1");
console.log('Servidor arrancado en http://127.0.0.1:1337');
