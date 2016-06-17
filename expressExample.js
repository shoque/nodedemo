var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');
var bodyParser = require("body-parser");

var api = require('./api.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public'));
app.set('view engine', 'ejs');
var url = 'mongodb://localhost:27017/nodedemo';
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  api(app, db)
  app.listen(3000);

});
