/*
Intersection Types (Multiple values into one)
An intersection type is a way of combining multiple types into one. Meaning that you can merge a given type A with a type B or more and get back a single type with all properties.
 */



// in case of object types its simply the combination of the types.

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Max',
	privileges: ['create-server'],
	startDate: new Date()
}



//////////////////// Using interfaces


interface Admin1 {
	name: string;
	privileges: string[];
};

interface Employee2 {
	name: string;
	startDate: Date;
}

type ElevatedEmployee2 = Admin1 & Employee2;

const e2: ElevatedEmployee2 = {
	name: 'Max',
	privileges: ['create-server'],
	startDate: new Date()
}


// in case of union types it will become the type they have in common below its numeric.



type Combineable = string | number;

type Numeric = number | boolean;

type Universal = Combineable & Numeric;

const e3: Universal = {
	test: 'string',
	test2: 1,
}
