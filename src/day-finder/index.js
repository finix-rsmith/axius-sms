// Dependencies
let day = require('../day-info');

// Methods
let check = (num) => {
	let pre,
		post = 'day';

	let setDay = (n) => {
		let r;
		n === 0 ? r = 'Sun' :
		n === 1 ? r = 'Mon' :
		n === 2 ? r = 'Tues' :
		n === 3 ? r = 'Wednes' :
		n === 4 ? r = 'Thurs' :
		n === 5 ? r = 'Fri' :
		n === 6 ? r = 'Satur' :
				  r = 'To';
		return r;
	};

	pre = setDay(num);
	return (pre + post);
};

// Export
module.exports = check(day);