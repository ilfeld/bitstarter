buf = new Buffer(256);
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

var content= fs.readFileSync("index.html");



mes="please believe me, because I believe you"

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
