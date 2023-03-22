function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log('Result: ' + num);
}
function printResult2(num: number): undefined {
	console.log('Result: ' + num);
	return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResult(add(5, 12));
printResult2(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
//combineValues = printResult; // not valid
//combineValues = 5; // not valid

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
	console.log(result);
	//return 100; // this will be ignored because the function is going ot return void
});
