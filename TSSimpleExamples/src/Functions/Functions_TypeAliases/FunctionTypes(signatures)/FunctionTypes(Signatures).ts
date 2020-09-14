/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

// Assigning a variable to a function, here we declare that this variable will in the future
// hold any type of function.
/* let greet: Function; */

// the idea here is that we can create the function signatures as we want them to be spefically
// Here we know and declare the functions beforehand so that we know how they will look like
// and which parameters they will take.

// Example 1

// the declared parameters can be called anything you want.
let greet6: (a: string, b: string) => void;

// here we call them name and greeting, as long as they are strings
// as per contract.
greet6 = (name: string, greeting: string) => {
	// we dont have to write void here
	// Because typescript infers that its void
	// becauser we dont return anything.
	console.log(`${name} say ${greeting}`);
};

// Example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string): number => {
	if (action === 'add') {
		return numOne + numTwo;
	}
	return numOne - numTwo;
};

// Example 3

let logDetails3: (obj: { name: string, age: number }) => void;

type Person5 = { name: string, age: number };

/* logDetails = (ninja: { name: string, age: number }) => { */

logDetails3 = (obj: Person5) => {
	console.log(`${obj.name} is ${obj.age} year old`);
};

console.log(logDetails3);
