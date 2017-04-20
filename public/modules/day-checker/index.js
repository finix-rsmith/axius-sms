// Dependencies
let findDay	= require('../day-finder');

// Export
module.exports = (input) => {
	let a = input.toLowerCase(),
		b = findDay.toLowerCase();
	if(a === b){
		return true;
	} else {
		return false;
	}
};