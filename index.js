// Dependencies
let express		= require('express'),
	app			= express(),
	path 		= require('path'),
	routes		= require('./public/routes'),
	port		= 4171;

// Static
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', routes);

// Listen
app.listen(process.env.PORT || port, () => {
	console.log('App on port ' + port);
});