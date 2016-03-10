"use strict";
// Conectar con driver:  var conn = require('../lib/connectMongo');

var conn = require('../lib/connectMongoose');
var mongoose = require('mongoose');

// Creo el esquema

var userSchema = mongoose.Schema({
    name: String,
    age: Number
});

// Método estático
userSchema.statics.list = function(sort, cb) {
    // preparamos la query sin ejecutar ( no ponemos callback a find)
    var query = User.find({});

    //añadimos más parámetros a la query
    query.sort(sort);

    //La ejecutamos
    query.exec(function(err, rows) {
        if (err) {
            cb(err);
            return;
        }
        cb(null, rows);
        return;

    });
};
//Lo registro en mongoose
var User = mongoose.model('User', userSchema);






//----------------------- antiguo ejemplo sin usar el modelo
//metodos del modelo
// var user = {
//     getUsers: function(cb) {

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

//         var User = mongoose.model('User');
//         User.find({}, function(err, datos) {
//             if (err) {
//                 cb(err);
//                 return;
//             }
//             cb(null, datos);
//             return;
//         });

//     }

// };


//exportamos el modelo
// module.exports = user;
