var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var myBuffer = fs.readFileSync("index.html");

app.use(express.favicon("images/favicon.ico"));
app.get('/', function(request, response) {
    response.send(myBuffer.toString("utf8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
