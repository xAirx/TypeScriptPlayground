
// Inference here make the RETURN TYPE of the function a number:
// hovering over add shows :number in the end.

function add(n1: number, n2: number) {
	return n1 + n2;
}

// We can add our own types.

function add(n1: number, n2: number): number {
	return n1 + n2;
}


// if we add string it wont work, since we set the types of the arguments to numbers.
function add(n1: number, n2: number): string {
	return n1 + n2;
}


// The void return type, means that the function will complete but return nothing.
function printResult2(num: number): void {
	console.log('Result' + num);
}

printResult2(add(5, 12));

// if we use the return value of the value of a voided function we get undefined.
// The strange thing is that in JS undefined is actualy a value we can use.
// Undefined is also a type in TS.

/* We can set a return type to undefined in a function return aswell.

function printResult2(num: number): undefined { */

console.log(printResult2(add(5, 12)));
