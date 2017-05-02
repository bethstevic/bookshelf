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



// app.get('/books', function(req, res) {
//   //find().then
//   res.send(req.body);
// });


app.post('/books', function(req, res) {
  //findOne
  console.log(req.body);
  res.send('post successful');
});









app.listen(port);

console.log('Server now listening on port: ' + port);

module.exports = app;