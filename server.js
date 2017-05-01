//This will set up the connection to the server and handle get/post requests
//var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var db = require('./database-config');

var port = 8989;

var app = express();



app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
  res.send('get successful');
});












app.listen(port);

console.log('Server now listening on port: ' + port);

module.exports = app;