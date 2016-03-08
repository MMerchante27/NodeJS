"use strict";

var creaAgente = function(_edad) {
	var edad = _edad;
	return {
		dimeEdad: function(){
			console.log("Yo tengo " + edad);
			return edad;
		}
	}
};


var agente = creaAgente(130);
var smith = creaAgente(22);
console.log(agente.dimeEdad(), smith.dimeEdad());

setTimeout(agente.dimeEdad, 1000);
setTimeout(smith.dimeEdad, 1000);