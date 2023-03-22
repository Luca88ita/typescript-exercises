type One = string;
type Two = string | number;
type Three = 'hello';

// converto to more or less specific
let a5: One = 'hello';
let b5 = a5 as Two; // this is a less specific type
let c5 = a5 as Three; // more specific

let d5 = <One>'world';
let e5 = <string | number>'world';

/******************/

const addOrConcat = (
	a: number,
	b: number,
	c: 'add' | 'concat'
): number | string => {
	if (c === 'add') return a + b;
	return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string; // we assert we will return a string

//pay attention!!! here a string si returned!!!
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

console.log(myVal);
console.log(nextVal);

// The DOM
const img = document.querySelector('img')!;
const myImg = document.getElementById('img') as HTMLImageElement;
const myImg2 = <HTMLImageElement>document.getElementById('img');

img.src = 'https://www.sdangher.com/wp-content/uploads/2019/11/fucktotum-1.jpg';
myImg.src =
	'https://64.media.tumblr.com/b33fe0e3037d55ea3f4d5d5a03ba4a56/tumblr_n2qwiqWd121trpq44o1_1280.jpg';
myImg2.src =
	'https://64.media.tumblr.com/b33fe0e3037d55ea3f4d5d5a03ba4a56/tumblr_n2qwiqWd121trpq44o1_1280.jpg';
myImg.height = 350;
