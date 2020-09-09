//////////////
///////
///////
///////
///////






function add(n1: number, n2: number) {
	return n1 + n2;
}



// The void return type, means that the function will complete but return nothing.
function printResult2(num: number): void {
	console.log('Result' + num);
}

printResult2(add(5, 12));




//////////////////////////////////Why Do we use :Function ?
/////////////////////////////////// :FUNCTION //////////////////////////////////////////////////



// Declare Variable pointer as a function.
let combineValues: Function; /*  < --- this is why we declare the: Function on the variable here. */


// Pointing to function via a variable

combineValues = add;

// CombineValues is any and not typed, this means that if we set combineValues to a number, we wont get an error here as TypeScript cant catch it
// BUT AT RUNTIME WE WILL GET THE ERROR.
/* combineValues = 5;

// Executing function via that variable */
console.log(combineValues(8, 8));


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////



/////////// Error will return undefined.
combineValues = printResult2;
// We can do this but since printresult takes one argument and not two we will get undefined, this wont give an error

/* ----->from TS. */

//////////////////HOW DO WE CHECK FOR THIS? ASWELL WITH TS?


// This is where function types are relevant.



////////////////////////////////// Introducing function types////////////////////////////////////////////


/////////////////////////////////////////

function add2(n3: number, n4: number) {
	return n3 + n4;
}

function PrintResult3(num: number): void {
	console.log('Result' + num)
}
///////////CALLBACK HANDLING/////////////////
// THE CALLBACK FUNCTION DOES NOT RETURN ANY VALUE BUT TAKES A NUMBER
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}
/////////////////////////////////////////
PrintResult3(add2(5, 12));


/*
callback functions can return something,
even if the argument on which they're passed does
NOT expect a returned value. */



// TS KNOWS THAT RESULT IS A NUMBER BECAUSE WE STATE IT ABOVE, THIS IS CALLED INFERENCE.
addAndHandle(1, 2, (result) => {
	console.log(result);
});


// DEfining a a function type:

/////////////////////////////////// :Function Types //////////////////////////////////////////////////

//function typoes are types that describe a funtion regarding the parameters and the return vslue of that function.

//  A function type is created with the arrow function notation.


//We want combinevalues to take a function or store a function or pointing to one,that returns two numbers and return a number.
// take any function taking arguments (2) taking numbers. and return a number.
let combineValues2: (arg1: number, arg2: number) => number;

combineValues2 = add2;
combineValues2 = PrintResult3;

console.log(combineValues(8, 8));
