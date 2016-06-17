var http = require('http');
var fs = require('fs');
var os = require('os');
http.createServer((req,res)=>{
    // first route
    try{
    if (req.url === '/') {
          var html = fs.readFileSync(__dirname + '/test.html', 'utf8');
          res.end(html);
    }
    // second route
    else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        // handle other routes
        res.writeHead(404);
        res.end("Page not found");
    }
  }
  catch(err){
    console.log("err caught");
  }

}).listen(3000);
console.log(os.cpus());
