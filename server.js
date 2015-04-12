var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies
var coords = [];

app.use(function(req, res, next) {
    console.log(req.method + req.url);
    next();
});

// if (req.method == 'POST') { }
app.post('/', function(req, res) {
   try { 
   var x = parseFloat(req.body.x),
        y = parseFloat(req.body.y),
        z = parseFloat(req.body.z);
    console.log(req.body.x);
    console.log(req.body.y);
    console.log(req.body.z);
    coords.push([x,y,z]);
   } catch (e) {
    console.log(e);
   }
   res.send("got request");
});


app.get('/c', function(req, res) {
    res.send(JSON.stringify(coords[coords.length-1]));
});

port = 5000;
host = '127.0.0.1';
app.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
