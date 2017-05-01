//This will set up the connection to mongo and set up the database
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookshelf');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;