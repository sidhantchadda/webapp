var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/build'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(process.env.PWD, 'build', 'index.html'))
})


app.listen(port, function () {
  console.log('server listening on port  '+port);
})
