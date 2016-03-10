"use strict";
var conn = require('../lib/connectMongo');


//metodos del modelo
var user = {
    getUsers: function(cb) {
        //imaginamos que lee un fichero
        // var usuariosLeidos = users;
        // cb(null, users);
        conn.db.collection('agentes').find({}).toArray(function(err, usuariosLeidos) {
            if (err) {
                cb(err);
                return;
            }

            //devuelvo users
            cb(null, usuariosLeidos);
            return;

        });
    }

};


//exportamos el modelo
module.exports = user;
