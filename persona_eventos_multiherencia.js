"use strict";

//hacer función constructora 
var Persona = function(name) {
    this.name = name;
};
//crear instancia

var luis = new Persona('luis');

console.log(luis.name);

//cambiar su prototipo
Persona.prototype.saluda = function() {
    console.log("Hola soy " + this.name);
};

luis.saluda();
var pepe = new Persona('pepe');
pepe.saluda();

var extend = require('util')._extend;


////--------------HERENCIA-------------------

//Otra función constructora que hereda de Persona

var Agente = function(name) {
    // Ejecutamos contructor heredado
    //Lo mismo que llamar a super() en otros lenguajes
    Persona.call(this, name);
};


Agente.prototype = new Persona('soy un prototipo');
var smith = new Agente('smith');
smith.saluda();

console.log(smith instanceof Agente); //True
console.log(smith instanceof Persona); //True
console.log(smith instanceof Object); //True

var EventEmitter = require('events').EventEmitter;
var extend = require('util')._extend;
Persona.prototype = extend(Persona.prototype, EventEmitter.prototype);


var pe = new Persona('miriam');
pe.on('asdas', function(data){
	console.log("Ha saltado el evento: ", data);
});

process.on('exit', function(){
	jose.emit('asdas', 'el programa termina!');
})

pe.emit('asdas', {payload:5000});