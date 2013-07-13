var express = require('express');
var app = express.createServer(express.logger());
fs.readFileSync(index.html,"utf-8")
lol=buffer.toString("utf-8", 0, 12)
mes="please"

app.get('/', function(request, response) {
  response.send(mes);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
