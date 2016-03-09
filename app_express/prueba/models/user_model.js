"use strict";
//datos
var users = [
	{name:'Smith', age:30}, 
	{name:'Jones', age:22}
];
//metodos del modelo
var user = {
	getUsers: function(cb){
		//imaginamos que lee un fichero
		var usuariosLeidos = users;
		cb(null, users);
	}
};

//exportamos el modelo
module.exports = user;