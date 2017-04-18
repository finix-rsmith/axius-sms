// Dependencies
let express		= require('express'),
	app			= express(),
	path 		= require('path'),
	routes		= require('./src/routes'),
	port		= 4171;

// Static
global.app_root = path.resolve(__dirname + '/src');
app.use(express.static(__dirname + '/src'));

// Routes
app.use('/', routes);

// Listen
app.listen(process.env.PORT || port, () => {
	console.log('App on port ' + port);
});