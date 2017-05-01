//This will set up the connection to mongo and set up the database
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/bookshelf');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});

var BookSchema = new Schema ({
  title: {
    type: String,
    Required: true
  }
});

var Book = mongoose.model('Books', BookSchema);

module.exports = Book;