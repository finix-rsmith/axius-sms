// Dependencies
let express	= require('express'),
	app		= express(),
	path	= require('path'),
	routes	= require('./src/routes'),
	twilio	= require('./src/twilio-config'),
	port	= 3030;

// Routes
global.app_root = path.resolve(__dirname + '/src');
app.use(express.static(__dirname + '/src'));
app.use('/', routes);

// Twilio
let cred	= twilio.credentials.test,
	msg		= twilio.message.test,
	client	= require('twilio')(cred.sid, cred.auth);

client.messages.create(
	{
		to: msg.to, 
		from: msg.from,
		body: msg.body
	},
	(err, message) => {
		console.log(err, message);
	}
);

// Listen
app.listen(process.env.PORT || port);