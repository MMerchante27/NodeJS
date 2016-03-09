"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //http: //localhost:3000/admin/5
    res.send('Hola Express');
});


router.get('/:id([0-9]+)/piso/:piso(A|B|C)', function(req, res) {
    http: //localhost:3000/admin/5
    console.log(req.params, ' el id es', req.params.id, ' y el piso:', req.params.piso);
    res.send('Hola Express');

});router.get('/:id([0-9]+)', function(req, res) {
    http: //localhost:3000/admin/5
        console.log(req.params, ' el id es', req.params.id);
    res.send('Hola Express');
});

router.get('/:id', function(req, res) {
    http: //localhost:3000/admin/5
        console.log(req.params);
    res.send('Hola Express');
});

router.post('/', function(req, res) {
    //post a //localhost:3000/admin
    console.log(req.body);
    res.send('body recogido');
});



module.exports = router;
