// Dependencies
let path				= require('path'),
	twilio				= require('twilio'),
	twilio_credentials	= require('../../twilio-config/credentials'),
	twilio_message		= require('../../twilio-config/message'),
	config				= require('../../app-config');

// Config
let	cred				= twilio_credentials(config.status),
	msg					= twilio_message(config.status),
	client				= twilio(cred.sid, cred.auth);

// Export
module.exports = (req, res) => {
	client.messages.create(
		{
			to: req.body.phone,
			from: msg.from,
			body: msg.body
		},
		(err, message) => {
			err ? console.log('Error: ' + err) :
			console.log(
				'To: ' + message.to + '\n' +
				'Message: ' + message.body
			);
		}
	);
	res.sendFile(path.join(global.app_root + '/views/success.html'));
};