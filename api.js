var assert = require('assert');
module.exports = function(app, db) {

  app.get('/getAll', function(req, res) {
    var collection = db.collection('locationList');
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);

      console.log("Found the following records");
      //  console.dir(docs);
      res.json(docs);
    });

  });
  app.get('/', function(req, res) {
    res.send("hello world");
  });

  app.post('/save', function(req, res) {
  //  console.log(req.body);
		var collection = db.collection('locationList');
    collection.insert(req.body,(data)=>{
			console.log("data inserted");
		})

  });



  app.delete('/user/:id', function(req, res) {

  });

}
