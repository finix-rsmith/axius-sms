// Dependencies
let path = require('path');

// Export
module.exports = (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
};