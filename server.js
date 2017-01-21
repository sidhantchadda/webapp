var express = require('express');
var path = require('path');
var port = 8080;
var app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
