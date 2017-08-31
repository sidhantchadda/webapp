var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var port = 80;
var app = express();

var transporter = require('./config/mailer');
//setup middleware
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/build'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(process.env.PWD, 'build', 'index.html'))
})

app.post('/contact', function(req, res) {
	if(req.body.fname == null || req.body.lname == null || req.body.email == null || req.body.message == null) {
		res.sendFile(path.resolve(process.env.PWD, 'build', 'index.html'));
		return;
	}
	var name = req.body.fname+" "+req.body.lname;
	var email = req.body.email;
	var message = req.body.message;
	
	var mailOptions = {
		from: '"'+name+'"'+' <'+email+'>',
		to: 'sidhantchadda@gmail.com',
		subject: 'Website Message from '+email,
		text: message
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if(err)
			return console.log(err);
	});

	res.sendFile(path.resolve(process.env.PWD, 'build', 'index.html'));
})

app.listen(port, function () {
  console.log('server listening on port  '+port);
})
