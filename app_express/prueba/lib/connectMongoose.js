"use strict";

var mongoose = require('mongoose');
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'mongodb connectionerror: '));
conn.once('open', function() {
    console.info('Connected to mongodb.');
});
mongoose.connect('mongodb://localhost/usoNode');
