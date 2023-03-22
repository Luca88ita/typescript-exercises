// Index signatures

// interface v1
/*
interface TransactionObj {
	Pizza: number;
	Books: number;
	Job: number;
}
//*/

// interface v2
/* 
interface TransactionObj {
	readonly [index: string]: number;
}
 //*/
// interface v3
interface TransactionObj {
	readonly [index: string]: number;
	Pizza: number;
	Books: number;
	Job: number;
}

const todaysTransactions: TransactionObj = {
	Pizza: -10, // these are needed for how we built the interface v3
	Books: -5, // these are needed for how we built the interface v3
	Job: 50, // these are needed for how we built the interface v3
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
	let total = 0;
	for (const transaction in transactions) {
		total += transactions[transaction];
	}
	return total;
};

console.log(todaysNet(todaysTransactions));

//todaysTransactions.Pizza = 40; // error because in the interface we set readonly

console.log(todaysTransactions['Dave']);

/**************************/

interface Student {
	//[key: string]: string | number | number[] | undefined;
	name: string;
	GPA: number;
	classes?: number[];
}

const student: Student = {
	name: 'Luca',
	GPA: 98,
	classes: [101, 202],
};

// console.log(student.test); // return undefined because is not yet added in the Object student

for (const key in student) {
	console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
	console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
	console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name');

/**************************/

/*
interface Incomes {
  [ key: string]:number
}
// */

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const montlyIncomes: Incomes = {
	salary: 500,
	bonus: 100,
	sidehustle: 250,
};

for (const revenue in montlyIncomes) {
	console.log(montlyIncomes[revenue as keyof Incomes]);
}
