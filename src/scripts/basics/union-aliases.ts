type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
	n1: Combinable,
	n2: Combinable,
	resultConversion: ConversionDescriptor
) {
	let result: Combinable;
	if (
		(typeof n1 === 'number' && typeof n2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +n1 + +n2;
	} else {
		result = `${n1.toString()} ${n2.toString()}`;
	}
	return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedAgesString = combine('30', '26', 'as-number');
console.log(combinedAgesString);

const combinedNames = combine('Luca', 'Pennini', 'as-text');
console.log(combinedNames);
