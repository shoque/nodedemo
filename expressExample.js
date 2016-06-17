var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');
var bodyParser = require("body-parser");

var api = require('./api.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

var url = 'mongodb://localhost:27017/nodedemo';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  api(app, db)
  app.listen(3000);

});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('locationList');
  // Insert some documents
  collection.insert(obj, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted documents into the document collection");
    callback(result);
  });
}
