const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'mailsendersidhant@gmail.com',
		pass: 'whatisgoingon'
	}
});
module.exports = transporter;