var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

// Connection URL
var getDb = (db) => this.db;
var url = 'mongodb://localhost:27017/nodedemo';
// Use connect method to connect to the Server
var connect = ()=> MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  getDb(db);
  var collection = db.collection("locationList");

});

connect();
console.log(getDb);
