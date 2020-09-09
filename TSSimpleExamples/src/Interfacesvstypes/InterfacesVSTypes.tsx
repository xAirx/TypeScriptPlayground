////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////// Interfaces //////////////////////////////////////

///////////////////// Interfaces implementing objects, classes and functions ////////////////

interface Person {
	name: string;
	hungry: boolean;
}

//////// Extending with interfaces ////////
interface Harry extends Person {
	youtuber: boolean;
}

const him: Harry = {
	//ERROR // Missing property Youtuber.
	name: "Harry",
	hungry: false,
	/*  H2ungry: false,  */ // ERROR
};

//// Declaration Merging ////

interface Animal {
	name: string;
	hungry: boolean;
}

interface Animal {
	Green: false;
}

const Zebra: Animal = {
	name: "Zebra",
	hungry: true,
	// GREEN IS MISSING IN  IMPLEMENTATiON OF TYPE ZEBRA
};

//////////////////// make a person object/////////////////

const me: Person = {
	name: "Harry",
	hungry: false,
	H2ungry: false, // ERROR
};

////////////////////// IMPLEMENTING WITH CLASSES ///////////////
class Harry implements Person {
	// Not implementing properties gives an error
	name: string;
	hungry: boolean; // Error cus not assigned to constructor.

	constructor(name: string, hungry: boolean) {
		this.name = 1; // Error Name is not a string here.
		this.hungry = true;
	}
}

/////////////////// IMPLEMENTING WITH FUNCTIONS //////////////
interface Greeting {
	// anonymous function that returns a string.
	(name: string): string;
}

const myGreeting: Greeting = (name: boolean) => "Hello"; // error because name is not a boolean

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////// TYPES //////////////////////////////////////

// Type alias is hungry to boolean

type Hungry = boolean;

//type aliasing a function (EASIER TO WRITE THAN THE INTERFACE VERSION)
type Greetings = (name: string) => string;

// the interface way of writing it:
// takes the interface greeting here.
const greeting: Greeting = (name) => "Hello!";

// type aliasing functions helps us save time not typing type declarations inline and having to re-use them. elsewhere.

////////////// Interfaces vs types ///////////
/*

the thing that's different about types
is like let's say I had this type hungry
I said Harry is hungry and I said true




this is all good but if I were to change us to a string what's a little bit disappointing with type alias citizenbecause they're just aliases when I
hover over here: */

/* Hungry to a string here: */

const harry: Hungry = "true";

/*
the error message I get is that the string true is notassignable to type in boolean it's not
saying type hungry it's saying typeboolean because I'm just a liasing it

there there is a feature in type
languages called an opaque type which
would actually let this error message
say not assignable to type hungry but
type script doesn't have opaque type
 */

////// types are more alike to interfaces than ever now.
////// we are getting the error that we havent implemented hungry.

type Person2 = {
	name: string;
	hungry: boolean;
};

const harry: Person2 = {
	name: "Harry", // hungry is missing in type
};

/////////////////////////////////////////////////////////////////////
/* Types cant extend other types.

If you want to merge two types you will use unions or intersections */

//////////////////////////////////////////
/////// intersection ///////
type Person3 = {
	name: string;
	hungry: boolean;
} & { youtuber: boolean };

const harry2: Person3 = {
	name: "Harry", // hungry is missing in type
	hungry: true,
	/// Youtuber is not implemented
};

//////////////////////////////////////////
/////// Union ///////
type Person4 = {
	name: string;
	hungry: boolean;
};

type Youtuber = { youtuber: boolean };

type Harry2 = Person | Youtuber;

const harry3: Harry2 = {
	// we are not getting error if name or hungry is not here since HARRY2 is a union, its either person or a youtuber.

	/*  name: "Harry", // hungry is missing in type
	hungry: true, */
	youtuber: true,
	/// Youtuber is not implemented
};
