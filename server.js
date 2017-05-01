//This will set up the connection to the server and handle get/post requests
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var db = require('./database-config');

var app = express();

var port = 8989;

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname, 'public'));














app.listen(port);

console.log('Server now listening on port: ' + port);