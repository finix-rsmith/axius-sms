// Dependencies
let path = require('path');

// Export
module.exports = (req, res) => {
	res.sendFile(path.join(global.app_root + '/views/index.html'));
};