//This will set up the connection to the server and handle get/post requests
var express = require('express');
var bodyParser = require('body-parser');

var db = require('./config');

var app = express();

var port = 8989;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(_dirname + '/public'));














app.listen(port);

console.log('Server now listening on port: ' + port);