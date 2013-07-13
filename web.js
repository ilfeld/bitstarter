var express = require('express');
var app = express.createServer(express.logger());
var m= fs.readFileSync(index.html)
var lol=buffer.toString("utf-8", 0, 12)

app.get('/', function(request, response) {
  response.send(lol);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
