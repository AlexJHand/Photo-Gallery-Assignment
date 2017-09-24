// Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Globals
var port = 3002;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Spin up server
app.listen(port, function() {
    console.log('Listening on port:', port);
}); // end server spin up