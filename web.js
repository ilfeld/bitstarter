buf = new Buffer(256);
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
  lol=buffer.toString("utf-8");
});
mes="please"

app.get('/', function(request, response) {
  response.send(mes);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
