"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET users listing. */
router.get('/form', function(req, res, next) {
    var User = mongoose.model('User');
    User.list(function(err, rows) {
        if (err) {
            res.send('error',err);
            return;
        }
        //cuando estén disponibles mando la vista
        res.render('user_form', { users: rows });
        return;

    });

});

module.exports = router;
