function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	let result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

let num1 = `5`;
const num2 = 2.8;
const printResult = true;
let resultPhrase = 'The result is ';

add(+num1, +num2, printResult, resultPhrase);

/********************/

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person /*: {
	name: string;
	age: number;
	hobbies: string[];
	//role: [number, string];
  role: Role;
}*/ = {
	name: 'Luca',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	//role: [2, 'author'],
	role: Role.AUTHOR,
};

/*
person.role.push('admin'); // this error is not recognized
person.role[1] = 10; // this yes 
// */

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
if (person.role === Role.AUTHOR) {
	for (const hobby of person.hobbies) {
		console.log(hobby.toLowerCase());
	}
}
