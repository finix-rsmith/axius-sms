// Dependencies
let express		= require('express'),
	routes		= express.Router(),
	bodyParser	= require('body-parser'),
	home 		= require('./home'),
	messages 	= require('./messages'),
	invite		= require('./invite');

// Config
routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());
routes.use(express.static(__dirname));

// Routes
routes.get('/', home);
routes.get('/messages', messages.read);
routes.post('/messages', messages.create);
routes.post('/invite', invite);

// Exports
module.exports = routes;