"use strict";

// Creamos un objeto con métodos

var persona = {
    name: "Luis",
    printName: function() {
        console.log(this.name);
    }
};

var mascota = {
    name: "Tobi"
};

persona.printName();

// Llamarlo sin this. Con bind se soluciona.
setTimeout(persona.printName.bind(persona), 1000);


//Aqui peta porque no tiene la función printName en el contexto global
function saluda(func) {
    func();
}

persona.printName.call(mascota);
//saluda(persona.printName);
