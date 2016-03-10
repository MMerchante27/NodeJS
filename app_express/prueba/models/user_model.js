"use strict";
// Conectar con driver:  var conn = require('../lib/connectMongo');

var conn = require('../lib/connectMongoose');
var mongoose = require('mongoose');

// Creo el esquema

var userSchema = mongoose.Schema({
    name: String,
    age: Number
});

//Lo registro en mongoose
mongoose.model('User', userSchema);

//metodos del modelo
var user = {
    getUsers: function(cb) {

        //Con driver
        //     conn.db.collection('agentes').find({}).toArray(function(err, usuariosLeidos) {
        //         if (err) {
        //             cb(err);
        //             return;
        //         }

        //         //devuelvo users
        //         cb(null, usuariosLeidos);
        //         return;

        //     });

        // con Mongoose

        var User = mongoose.model('User');
        User.find({}, function(err, datos) {
            if (err) {
                cb(err);
                return;
            }
            cb(null, datos);
            return;
        });

    }

};


//exportamos el modelo
module.exports = user;
