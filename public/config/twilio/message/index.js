const MESSAGE = {
	live: {
		from: '+14152124899',
		body: 'What day is it?'
	},
	test: {
		from: '+15005550006',
		body: 'What day is it? (testing)'
	}
};

module.exports = (status) => {
	let message;
	status === 'live' ? message = MESSAGE.live :
	status === 'test' ? message = MESSAGE.test :
	console.log('Error: unable to retrieve credentials for ' + status);
	return message;
};