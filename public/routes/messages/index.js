// Dependencies
let path			= require('path'),
	twilio			= require('twilio'),
	twiml			= new twilio.TwimlResponse(),
	twiml_string	= twiml.toString(),
	config_path		= '../../config/',
	module_path		= '../../modules/',
	answers			= require(config_path + 'answers'),
	template		= require(config_path + 'twilio/template'),
	dayCheck		= require(module_path + 'day-checker'),
	respond			= require(module_path + 'respond');

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