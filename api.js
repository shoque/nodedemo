var assert = require('assert');
module.exports = (app, db)=> {

  app.get('/getAll', (req, res)=> {
    var collection = db.collection('locationList');
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      res.json(docs);
    });

  });
  app.get('/testejs', (req, res)=> {
    var collection = db.collection('locationList');
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      res.render('testejs',  { data: docs });
    });

  });
  app.get('/', (req, res)=> {
    res.send("hello world");
  });

  app.post('/save', (req, res)=> {
  //  console.log(req.body);
		var collection = db.collection('locationList');
    collection.insert(req.body,(data)=>{
		})

  });



  app.delete('/:id', (req, res)=> {

  });

}
