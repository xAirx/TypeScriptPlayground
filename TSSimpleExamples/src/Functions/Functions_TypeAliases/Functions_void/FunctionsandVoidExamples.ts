// Typescript will now infer that this is a function.
// Much like inferred strings and booleans etc as before.
const greet = () => {
	console.log('hello world');
};

/* greet = 'hello';  */// Error type is of function.

// we can explicitly say that this variable will be a variable in the future like this:

let greet2: Function;

greet2 = () => {
	console.log('hello again');
};

greet2();

// Last one is an  optional union.
// the equal is a default value, if we do that we dont need the ? as optional

/* const add3 = (a: number, b: number, c?: number | string) => {
 */

// We dont use default values and optionals together.
// The advantage of using default instead of optional is avoiding the type | undefined return from TS.

// The convention is to do the requried parameters first then the optional ones last
const add3 = (a: number, b: number, c: number | string = 10) => {
	console.log(a + b);
	console.log(c);
};

// we can override the default type by passing it in.
add3(5, 10, 20);

/// ////////////// WHEN A FUNCTION RETURNS SOMETHING TYPESCRIPT CAN INFER THE TYPE THAT IS RETURNED.

const minus = (a: number, b: number) => a + b;

/// THIS MEANS THAT RESULT HERE IS OF THE TYPE THAT IS RETURNED FROM MINUS.
const result = minus(10, 7);
console.log(result);

// We cannot do this we cannot change the type here

result = 'something else';

/* Explicitly type the return of the function */

/* const minus = (a: number, b: number): number => a + b;
 */

 // what if we dont declare a return in a function?
 // A function returns a void value when we dont reutrn something.
 // Void represents a complete lack of return value.
 // Compiled into JS it becomes undefined
 // Undefined is not the same as void in TS, its a lack of value.
 // Undefined is what we get with using an optional forexample.
