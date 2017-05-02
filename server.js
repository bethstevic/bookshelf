//This will set up the connection to the server and handle get/post requests
//var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var Book = require('./database-config');

var port = 8989;

var app = express();



app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/books', function(req, res) {
  Book.find().exec(function(err, books) {
    if(err) {
      console.log(err);
    } else {
      console.log('get successful');
      res.status(200).send(books);
    }
  });
});



app.post('/books', function(req, res) {
  var newBook = new Book ({
    title: req.body.title,
    author: req.body.author,
  });
  newBook.save(function(err, newBook) {
    if(err) {
      res.status(500).send(err, 'error on server side post');
    } else {
      res.status(200).send(newBook);
    }
  });
});

app.put('/books', function(req, res) {
  console.log('put request');
  Book.findOneAndRemove({id: req.body.title})
    .exec(function(err, found) {
      if(found) {
        console.log('delete successful');
        res.status(200).send(found);
      } else {
        res.status(404).send('book not found');
      } if(err) {
        console.log(err, 'error on delete server side');
        res.status(500).send(err);
      }
    });
});








app.listen(port);

console.log('Server now listening on port: ' + port);

module.exports = app;