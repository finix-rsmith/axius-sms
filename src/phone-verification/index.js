module.exports = {};

let test = '(111) 111-1111';

// Isolate numerals
let isolateNumber = (input) => {
	let output = '';
	for(let i = 0; i < input.length; i++){
		let char = input[i],
			num = parseInt(char);
		isNaN(num) ? output += '' : output += char;
	}
	return output;
};
console.log('Isolated: ' + isolateNumber(test));

// Measure
let checkLength = (input) => {
	let output = '',
		l = input.length;
	switch(l){
		case(l < 10):
			output = input + ' is too short. Please include area code.';
			break;
		case(10):
			output = countryCode(input);
			break;
		case(11):
			output = input;
			break;
		case(nl > 11):
			output = input + ' is too long. Please check formatting';
	}
	return output;
};
console.log('Length checked : ' + checkLength(test));

// Country code
let countryCode = (input) => {
	let output = '1' + input;
	return output;
};
console.log('Country code added : ' + countryCode(test));

// Verify number
let	verify = (input) => {
	let digits,
		n = '',
		nl = n.length,
		msg = '',
		err = true;
	switch(nl){
		case(nl < 10):
			msg = ' is too short. Please include area code.';
			break;
		case(10):
			n = '1' + n;
			err = false;
			break;
		case(11):
			err = false;
			break;
		case(nl > 11):
			msg = ' is too long. Please check formatting';
	}
	err ? digits = n + msg : digits = '+' + n;
	if(err){
		console.log(n + msg)
	} else if(!err){
		return 'number: ' + digits;		
	} else {
		console.log('Hmm...')
	}
};

// Text cases
console.log(
	verify('1 (111) 111-1111') + '\n',
	verify('(222) 222-2222') + '\n',
	verify('333.333.3333') + '\n',
	verify('444-444-4444') + '\n',
	verify('555 555 5555') + '\n',
	verify('+16666666666') + '\n',
	verify('77') + '\n',
	verify('116666666666')
);