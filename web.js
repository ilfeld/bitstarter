var express = require('express');
var app = express.createServer(express.logger());

//var lol=buffer.toString("utf-8", 0, 12)

app.get('/', function(request, response) {
  response.send(fs.readFileSync(index.html,"utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
