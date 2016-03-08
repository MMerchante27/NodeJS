"use strict";

var objeto = {
    vuela: function() {
        console.log('volando voy');
    }
};

module.exports = objeto;
//exports.objeto = objeto;  // Exports con nombre

/*
module.exports = {
    objeto1: objeto,
    objeto2: {
        nada: function() { console.log('nadando voy'); }
    }

};*/
