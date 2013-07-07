var express = require('express');

var app = express.createServer(express.logger());

var myBuffer = fs.readFileSync("index.html");

app.get('/', function(request, response) {
#  response.send(myBuffer.toString("utf8"));
   response.send("test test test\n");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
