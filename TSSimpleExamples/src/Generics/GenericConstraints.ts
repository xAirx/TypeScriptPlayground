/* TypeScript Generic Constraints

Summary: in this tutorial, you’ll learn about the generic constraints in TypeScript.
Introduction to generic constraints in TypeScript

Consider the following example: */

function merge2<U, V>(obj1: U, obj2: V) {
	return {
		...obj1,
		...obj2
	};
}

/* The merge() is a generic function that merges two objects.
For example:
 */

let person6 = merge2(
	{ name: 'John' },
	{ age: 25 }
);

console.log(person6);

/*  */
/* Output: */
/*  */
/* { name: 'John', age: 25 } */


/*
It works perfectly fine.

The merge() function expects two objects.

However, it doesn’t prevent you from passing a non - object like this: */


let person7 = merge(
	{ name: 'John' },
	25
);

console.log(person);

/* Output:

{ name: 'John' }
 */


/* TypeScript doesn’t issue any error.

Instead of working with all types, you may want to add a constraint to the merge() function so that it works with objects only.

To do this, you need to list out the requirement as a constraint on what U and V types can be.

In order to denote the constraint, you use the extends keyword.

For example: */


function merge<U extends object, V extends object>(obj1: U, obj2: V) {
	return {
		...obj1,
		...obj2
	};
}

/*
Because the merge() function is now constrained, it will no longer work with all types.Instead, it works with the object type only.

The following will result in an error: */

let person8 = merge(
	{ name: 'John' },
	25
);

/* Error:

Argument of type '25' is not assignable to parameter of type 'object'.

Using type parameters in generic constraints

TypeScript allows you to declare a type parameter constrained by another type parameter.

	Summary

Use extends keyword to constrain the type parameter to a specific type.
Use extends keyof to constrain a type that is the property of another object.