// Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');

// Globals
var port = 3002;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.use('/', indexRouter);

// Spin up server
app.listen(port, function() {
    console.log('Listening on port:', port);
}); // end server spin up