// Examples from https://www.youtube.com/watch?v=__92ek8Xh4o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=5

// here we declare a variable named character, that in the future will hold a string.
// we tell typescript that this variable will contain the string.
// This means we cannot assign anything else but a string here.

let character: string;

let age: number;

let isLoggedIn: boolean;

// age = 'luigi' // WONT WORK, a number is expected thus we get an error

// isLoggedIn = true; // will work.

// Arrays

// here an array is delcared, but we havent declared any type.
// so the type inferred is of any.

const ninjas1: string[] = [];

// We will set the expected array as a string and initalize it with an empty array.
// If we didnt do this we would not be able to do the push method or anything, since we
// arent telling TS its an array that we are dealing with here.

ninjas1.push('shaun');

// Using a union type to create a mixed array.
const mixed: (string | number | boolean)[] = [];

mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

// we can use union types on normal variables too.

let uid: string | number;

uid = '123';
uid = 123;
uid = false; // Not working.

// Objects

let ninjaOne: object;

ninjaOne = { name: 'yoshi', age: 30 };
// we can declare ninjaOne as an array because anarray is a kind of object still.
ninjaOne = ['test', 'test'];
console.log(ninjaOne);

// if we wanted to be more specific

let ninjaTwo: {
	name: string,
	age: number,
	beltColour: string
};

ninjaTwo = { name: 'mario', age: 30, beltColour: 'black' };
console.log(ninjaTwo);
