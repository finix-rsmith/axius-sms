const CREDENTIALS = {
	live: {
		sid: 'AC3eb7f6620e49ecea307ad4b73f551e1f',
		auth: '6086e95b4d1832cf041d510cac25409e'
	},
	test: {
		sid: 'AC6850e629dd94f10ea0b9503b31f4d148',
		auth: 'eb79cd07f943ad188bc78c7acb905fac'
	}
};

module.exports = (status) => {
	let credentials;
	status === 'live' ? credentials = CREDENTIALS.live :
	status === 'test' ? credentials = CREDENTIALS.test :
	console.log('Error: unable to retrieve credentials for ' + status);
	return credentials;
};