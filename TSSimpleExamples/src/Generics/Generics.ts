

// The array type does not care what type is stored inside.

/*
const names3: Array = [];

const names4: any[] = []; */


const names: Array<any> = [];

const names2: Array<string> = [];

// if we make sure that we define that the array contains strings
// we can do string stuff with it.

names[0].split(''); // etc;


/*
Generics: the ability to abstract types

The implementation of generics in Typescript give us the ability to pass in a range of types to a component, adding an extra layer of abstraction and re-usability to your code. Generics can be applied to functions, interfaces and classes in Typescript.

This talk will explain what generics are and how they can be used for these items, visiting a range of viable use cases along the way to further abstract your code.
The Hello World of Generics

To demonstrate the idea behind generics in simple terms, consider the following function, identity(), that simply takes one argument and returns it:
 */

function identity(arg: number): number {
	return arg;
}

/* Our identity function’s purpose is to simply return the argument we pass in. The problem here is that we are assigning the number type to both the argument and return type, rendering the function only usable for this primitive type — the function is not very expandable, or generic, as we would like it to be.

We could indeed swap number to any, but in the process we are losing the ability to define which type should be returned, and dumbing down the compiler in the process.

What we really need is identity() to work for any specific type, and using generics can fix this. Below is the same function, this time with a type variable included:
 */
function identity<T>(arg: T): T {
	return arg;
}

/* After the name of the function we have included a type variable, T, in angled brackets <>.T is now a placeholder for the type we wish to pass into identity, and is assigned to arg in place of its type: instead of number, T is now acting as the type.

Note: Type variables are also referred to as type parameters and generic parameters. This article opts to use the term type variables, coinciding with the official Typescript documentation.

T stands for Type, and is commonly used as the first type variable name when defining generics. But in reality T can be replaced with any valid name. Not only this, we are not limited to only one type variable — we can bring in any amount we wish to define. Let’s introduce U next to T and expand our function:
 */
function identities<T, U>(arg1: T, arg2: U): T {
	return arg1;
}

/* Now we have an identities() function that supports two generic types, with the addition of the U type variable — but the return type remains T. Our function is now clever enough to adopt two types, and return the same type as our arg1 parameter.

But what if we wanted to return an object with both types? There are multiple ways we can do this. We could do so with a tuple, providing our generic types to the tuple like so:
 */
function identities<T, U>(arg1: T, arg2: U): [T, U] {
	return [arg1, arg2];
}

/* Our identities function now knows to return a tuple consisting of a T argument and a U argument. However, you will likely in your code wish to provide a specific interface in place of a tuple, to make your code more readable. */