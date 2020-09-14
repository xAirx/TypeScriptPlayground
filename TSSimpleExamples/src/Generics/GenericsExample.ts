// reuseable blocks of code usable with different types.
// imagine a function that takes in any kind of object and returns a new object based on the old one.
// with a random ID attached aswell.
// Generics

/// ///////// object as paramter
const addUID = (obj: object) => {
	// Randome number
	const uid = Math.floor(Math.random() * 100);
	// return a new object along with all of the original properties
	/* 	destructured from the object that we sent in and the new UID property aswell.
	 */		// spits out a new object based on the object we passed in with a random UID.
	return { ...obj, uid };
};

const docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne);

/// ///////////////////////////////////////////////////////////////////////////
/// ///////////////////////////////////////////////////////////////////////////
/// ////////////////////////// THE PROBLEM ///////////////////////////////////
console.log(docOne.name); // Property name does not exist on this type with UID property.

// this problem occurs when we pass in the object to our addUID function. we are not specifying what the object should be
// it does not know when it returns the new object, what properties was on the object passed in before.
// It doesnt know that name or age exist on the object. because its not set so typescript does not know what properties to output.

// We can use a generic to mitigate this.
/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////

/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
/// ///////////////////////        USING GENERICS     ////////////////////////
/// //////////////////////////////////////////////////////////////////////////

/// Here we declare a generic with T
/// What this does is capture whatever item we pass into the function and it captures what properties are going
/// To be on it if its an object.
///
const addUID2 = <T>(obj: T) => {
	// Randome number
	const uid = Math.floor(Math.random() * 100);
	// return a new object along with all of the original properties
	/* 	destructured from the object that we sent in and the new UID property aswell.
	 */		// spits out a new object based on the object we passed in with a random UID.
	return { ...obj, uid };
};

const docTwo = addUID2({ name: 'yoshi', age: 40 });

console.log(docTwo.name); // This gives intellisense, now typescript knows about the
// properties on the object that is passed in and then returned.

// Doing above we are only capturing what the type of is of the passed in object.
// We are catching the specifics, as in the parameters.

// we are not specifying the type as an object.

/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////

/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////

/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////// GENERIC CONSTRAINTS  /////////////////////////////////

/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////

/* this means that we can do the following:
 */
const docThree = addUID2('hello'); // Error.
console.log(docThree);
// To make sure that we tell our generic that the passed in value will be an object we can do the following:

// The extends keyword means that whatever is passed into this function (object), MUST extend the object. must be an object.
const addUID3 = <T extends object>(obj: T) => {
	const uid = Math.floor(Math.random() * 100);
	// return a new object along with all of the original properties
	/* 	destructured from the object that we sent in and the new UID property aswell.
	 */		// spits out a new object based on the object we passed in with a random UID.
	return { ...obj, uid };
};

const docFour = addUID3('hello'); // error MUST be an object.
const docFour = addUID3({ name: 'hello' }); // Works
console.log(docFour);

/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////

const addUID5 = <T extends { name: string }>(obj: T) => {
	const uid = Math.floor(Math.random() * 100);
	// return a new object along with all of the original properties
	/* 	destructured from the object that we sent in and the new UID property aswell.
	 */		// spits out a new object based on the object we passed in with a random UID.
	return { ...obj, uid };
};

const docFive = addUID5('hello'); // error
const docFive = addUID5({ age: 20 }); // error no name
const docFive = addUID5({ name: 20, age: 20 }); // error name is not a string.

console.log(docFive);
