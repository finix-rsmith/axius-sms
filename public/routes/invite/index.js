// Dependencies
let path				= require('path'),
	twilio				= require('twilio'),
	config_path			= '../../config/',
	twilio_credentials	= require(config_path + 'twilio/credentials'),
	twilio_message		= require(config_path + 'twilio/message'),
	config				= require(config_path + 'app');

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
	res.sendFile(path.join(__dirname + '/success.html'));
};