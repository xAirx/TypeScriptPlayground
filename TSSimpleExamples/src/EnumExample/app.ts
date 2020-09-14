// Enums

import { number } from 'prop-types';

// To show how enums work here we can  assign specific LABELS, to our resourcetypes here.
// lets say our resourceType 4 could be a book, and 3 is a person, etc.

// Its easier to maintain our resourceType with enums its easier to read labels than numbers.
// Enums are a away to specifiy descriptive constants and associate each one with a numeric value.
// we can create a constant that represents our number 3 in our resourceType as a book forexample.

// When we create our enum each index in our enum has a number.
// So we dont have to do the below:
enum ResourceType {
	PERSON = 3,
	BOOK = 4,
}

enum ResourceType2 {
	person, // index 0
	book, // index 1
	author, // index 2
	film, // index 3
}

interface Resource<T> {
	uid: number;
	resourceType: ResourceType2;
	data: T;
}

const DocOne: Resource<object> = {
	uid: 1,
	resourceType: ResourceType2.book, // if you hover this is labeled as 1
	data: { title: 'Name of the wind' },
};

console.log(DocOne);

const DocTwo: Resource<object> = {
	uid: 10,
	resourceType: ResourceType2.author, // data.PERSON is now labeled as  "2
	data: { title: 'Yoshi' },
};

console.log(DocTwo);

/// ////////////////// /// ////////////////// /// //////////////////
/// ////////////////// /// ////////////////// /// //////////////////
/// ////////////////// /// ////////////////// /// //////////////////
/// ////////////////// ANOTHER ENUM EAMPLE
enum Role {
	ADMIN = 'ADMIN',
	READ_ONLY = 100,
	AUTHOR = 'AUTHOR',
}

const person4 = {
	name: 'Maximilian',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
// eslint-disable-next-line prefer-const
favoriteActivities = ['Sports'];
console.log(favoriteActivities);

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); // !!! ERROR !!!
}

if (person4.role === Role.AUTHOR) {
	console.log('is author');
}
