var express = require('express');
var router = express.Router();
var user = require('../models/user_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET users listing. */
router.get('/form', function(req, res, next) {
    user.getUsers(function(err, users) {
    	//cuando estén disponibles mando la vista
        res.render('user_form', { users: users });
            });
});

module.exports = router;
