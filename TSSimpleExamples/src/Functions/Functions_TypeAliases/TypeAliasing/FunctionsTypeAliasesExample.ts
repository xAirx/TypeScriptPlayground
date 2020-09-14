/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
// Sometimes the type of specifications of the properties are getting long as above.

// Instead of writing all of it again we can use type aliases to avoid what happens below:

const logDetails = (uid: string | number, item: string) => {
	console.log(`${item} has a uid of ${uid}`);
};

const greet4 = (name: string, uid: string | number) => {
	console.log(`${name} has a uid of ${uid}`);
};

const greetAgain = (name: string, uid: string | number) => {
	console.log(`${name} has a uid of ${uid}`);
};

/// / Using type aliases:

type StringOrnum = string | number;

type ObjWithName = { name: string, uid: StringOrnum };

const logDetails2 = (uid: StringOrnum, item: string) => {
	console.log(`${item} has a uid of ${uid}`);
};

const greet5 = (user: ObjWithName) => {
	console.log(`${user.name} says hello`);
};

const greetAgai2 = (user: ObjWithName) => {
	console.log(`${user.name} says hello`);
};
