let username = 'Luca';
console.log(username);

// Number, String and Boolean types
let a = 12;
let b = '6';
let c = 2;

console.log(a / +b);
console.log(c * +b);
console.log(+b * +b);

const sum = (n1: number, n2: string) => {
	return n1 + +n2;
};
console.log(sum(10, '5'));

// RegExp type
let re: RegExp = /\w+/g;
console.log(re);

// Arrays type

let stringArr = ['one', 'two', 'three'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['evh', 1984, true];

guitars.unshift(10);
console.log(guitars);
guitars = [...guitars, ...stringArr];
console.log(guitars);

// Tuple
let myTuple: [string, number, boolean];
myTuple = ['Luca', 35, true];
//myTuple = mixedData // error because is not granted that mixedData has the same elements
mixedData = myTuple; // ok
console.log(mixedData);

// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

// Object type

let myObj: object; //:{};
myObj = [];
console.log(typeof myObj);

// Union types
/*
	type Guitarist = {
		name: string;
		active?: boolean;
		albums: (string | number)[];
	};
	// */

// is the same as creating the following interface
interface Guitarist {
	name?: string;
	active: boolean;
	albums: stringOrNumberArray;
}

let evh: Guitarist = {
	name: 'Eddie',
	active: false,
	albums: [1984, 'OU812', 5150],
};

let jp: Guitarist = {
	name: 'Jimmy',
	active: true,
	albums: ['I', 'II', 'III'],
};

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
	if (guitarist.name) {
		return `Hello ${guitarist.name?.toUpperCase()}!`;
	}
	return 'Hello!';
};

console.log(greetGuitarist(jp));

// Enum type
enum Grade {
	U = 1,
	D,
	C,
	B,
	A,
}

console.log(Grade.D);

// Literal type
let myName: 'Luca';
// myName = "pippo" // error. myName can be only `Luca`
let userName: 'Luca' | 'Pinco' | 'Panco';
userName = 'Panco';

// Functions type

const add = (a: number, b: number): number => {
	return a + b;
};

const logMsg = (message: any): void => {
	console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));

let subtract = (c: number, d: number): number => {
	return c - d;
};

/*
	type mathFunction = (a: number, b: number) => number;
	}
	// */
// stesso risultato ottenuto col type, ma usando interface
interface mathFunction {
	(a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
	return c * d;
};

logMsg(multiply(2, 2));

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
	if (typeof c !== 'undefined') {
		return a + b + c;
	}
	return a + b;
};

logMsg(addAll(4, 5));
logMsg(addAll(3, 5, 9));

// Default parameters
const sumAll = (a: number = 0, b: number = 0, c: number = 0): number => {
	return a + b + c;
};

logMsg(sumAll(undefined, 4, 5));
logMsg(sumAll(4, 5));
logMsg(sumAll(3, 5, 9));

// Rest parameters
const total = (a: string, ...nums: number[]): string => {
	return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total('Il totale è ', 4, 5, 8, 9, 8));

// Error type
const createError = (errMsg: string): never => {
	throw new Error(errMsg);
};

const infinite = () => {
	let i: number = 1;
	while (true) {
		i++;
		if (i > 100) {
			break;
		}
	}
};

// Custom type guard
const isNumber = (value: any): boolean => {
	return typeof value === 'number' ? true : false;
};

// use of the Never type to manage errors
const numberOrString = (value: number | string): string => {
	if (typeof value === 'string') return 'string';
	if (isNumber(value)) return 'number';
	return createError('This should never happen!');
};

logMsg(numberOrString(12));
