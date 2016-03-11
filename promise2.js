"use strict";

function conArroz(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' ajo');
        //reject('no hay ajo!'); para hacer fallar la cadena de promesas
    });
}

function conSal(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' sal');
    });
}

function con(plato, ingrediente) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' ' + ingrediente);
    });
}

var paella = 'paella con';

conArroz(paella)
    .then(conAjo)
    .then(function(plato) {
        console.log('TRACE', plato);
        return con(plato, 'pimiento');
    })
    .then(conSal)
    .then(function(plato) {
        console.log('plato', plato);
    })
    .then(function(algo) {
        console.log('algo', algo);
    })
    .catch(function(err) {
        console.log('ERROR', err);
    });
