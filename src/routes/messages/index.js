// Dependencies
let path			= require('path'),
	twilio			= require('twilio'),
	twiml			= new twilio.TwimlResponse(),
	twiml_string	= twiml.toString(),
	answers			= require('../../answers'),
	dayCheck		= require('../../day-checker'),
	respond			= require('../../respond'),
	template		= require('../../twilio-config/template');

// Export
module.exports = {
	read: (req, res) => {
		res.sendFile(path.join(global.app_root + '/views/success.html'));
	},
	create: (req, res) => {
		let body = req.body.Body,
			guess = dayCheck(body),
			message = respond(answers.default);

		if(guess === true){
			message = respond(answers.correct);
		} else if(guess === false){
			message = respond(answers.incorrect);
		}
		console.dir(req.body);
		res.send(template(message));
		res.end(twiml_string);
	}
};