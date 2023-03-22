// classes

// First way how to build a class
class Coder {
	name: string;
	music: string;
	age: number;
	lang: string;

	constructor(name: string, music: string, age: number, lang: string) {
		this.name = name;
		this.music = music;
		this.age = age;
		this.lang = lang;
	}
}

// Second way how to build a class
class Coder2 {
	secondLang!: string; // with ! we are saying we are going to eventually declare it later

	constructor(
		public readonly name: string,
		public music: string,
		private age: number, // I can only access it inside of this class
		protected lang: string = 'TypeScript' // I can access it in classes and sub-classes
	) {
		this.name = name;
		this.music = music;
		this.age = age;
		this.lang = lang;
	}
	public getAge() {
		return `Hello, I'm ${this.age}`;
	}
}

const Luca = new Coder2('Luca', 'Rock', 35);

console.log(Luca.getAge());
//console.log(Luca.age); // not valid
//console.log(Luca.lang); // not valid

class WebDev extends Coder2 {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number
	) {
		super(name, music, age);
		this.computer = computer;
	}

	public getLang() {
		return `I write ${this.lang}`;
	}
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 28);
console.log(Sara.getLang());

//console.log(Sara.age); // not valid
//console.log(Sara.lang); // not valid - property accessible only inside of the sub-class

/**********************************/

interface Musician {
	name: string;
	instrument: string;
	play(action: string): string;
}

class Drummer implements Musician {
	name: string;
	instrument: string;

	constructor(name: string, instrument: string) {
		this.name = name;
		this.instrument = instrument;
	}
	play(action: string) {
		return `${this.name} ${action} the ${this.instrument}`;
	}
}

const Pinco = new Drummer('Pinco', 'drum');

console.log(Pinco.play('rolls'));

/**********************************/

class Peeps {
	static count: number = 0;
	static getCount(): number {
		return Peeps.count;
	}

	public id: number;
	constructor(public name: string) {
		this.name = name;
		this.id = ++Peeps.count; // in this way the counter is initiated directly inside the class. This means that for every time I create an object with this class, the counter will increase. Having the ++ before the counter allows it to start from 1 instead of 0 as it usually would
	}
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);

/**********************************/

class Bands {
	private dataState: string[];

	constructor() {
		this.dataState = [];
	}

	public get data(): string[] {
		return this.dataState;
	}

	public set data(value: string[]) {
		if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
			this.dataState = value;
			return;
		} else throw new Error('Param is not an array of strings');
	}
}

const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zeppelin'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Rammstein'];
console.log(MyBands.data);
//MyBands.data = "Pippo Franco"; // not working - string not array of strings
//MyBands.data = ['Van Halen', 5150]; // throws an error
