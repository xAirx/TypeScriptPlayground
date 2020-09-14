/* eslint-disable prettier/prettier */
/* Now you might note tuples from other programming languages.
Javascript does not have them.
This is a tuple for example and you would say well this is an array.
It is an array but it's a fixed length array and actually not just fixed length but all the fixed type.
Now where could this be handy.
 */

/// /////////////////// /////////////////// ///////////////////
/// /////////////////// /////////////////// ////////////////
/// /////////////////// /////////////////// ////////////////
/// //////////////// ANOTHER EXAMPLE //////////////////
// Any of these types can be in any of these positions, arrays are quite flexible.
let arr = ['ryu', 25, true];
// eslint-disable-next-line computed-property-spacing
arr[0] = false;
// eslint-disable-next-line computed-property-spacing
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

/* The difference between regular arrays and tuples are that once we define a type in a specific index, we cannot change them AudioBufferSourceNode.
 */

// we will define a tuple this way else it thinks its a regular array.
const tup: [string, number, boolean] = ['ryu', 24, true]; // fine
const tup2: [string, number, boolean] = [40, 24, true]; // ERROR
// once each position has been defined as a type that position cant be anything else.
tup[0] = 'ken';
/* tup[1] = 'string'; // error */
tup[1] = 24;

let student: [string, number];
student = ['chun-li', 22234];
/* student = [123131321, 22234]; // ERROR
 */

/// /////////////////// /////////////////// ///////////////////
/// /////////////////// /////////////////// ////////////////
/// /////////////////// /////////////////// ////////////////

const person3: {
	name: string;
	age: number;
	hobbies: string[];

	/// /////////////////////////////////////////////////////////////////////////////////////
	/// /////////////////////////////////////////////////////////////////////////////////////
	/// /////////////////////////////////////////////////////////////////////////////////////
	/// ////////////////// ## EXAMPLE 1.5 adding the tuple /////////////////////
	/*   So here we also have an example where typescript doesn't fir a type but we explicitly want to override
  it.

  Now here we can therefore add an explicit object type by adding a colon after person then the curly
  braces and then name should be a string.
  Age should be a number and Hobbes should be a string array so all as inferred by typescript.

  So for that we wouldn't have required this explicit assignment.
  And as you learn it would have been bad.

  But now we have a scenario where the inference does not work in the way we want and we want to set roll
  to be a tuple.

  Now instead of setting a two string array or number array we're using the same type that was inferred
  here earlier.

  We can now use a special type.
  We use square brackets again but now inside of the square brackets we add no and then a comma and then

  string.
  Now this marks a tuple type here a tuple is a special construct typescript understands in JavaScript
   */

	role: [number, string];
} = {
	name: 'test',
	age: 30,
	// Typescript detects an array of data here.
	hobbies: ['Sports', 'Cooking'],

	/// /////////////////////////////////////////////////////////////////////////////////////
	/// /////////////////////////////////////////////////////////////////////////////////////
	/// /////////////////////////////////////////////////////////////////////////////////////
	/// ////////////////// ## EXAMPLE 1 The problem /////////////////////

	/* This is a union type and you can see it if you hover over it. */

	role: [2, 'author'], // This should be a number and a string.

	/* The key takeaway is that typescript understands that this should be an array with these types of values.
	 */
};

/* The downside is that we could run the below code though person role push admin.
Now for our application this might not make sense because we know we only need two elements still typescript

doesn't know that we only want two elements.
We would also be able to switch person role.

The second element with index one to be a number as well.
This would work because typescript only knows that role should be of type String or no array and therefore
*/
person3.role.push('admin');
person3.role[1] = 10;

/// ////////// Length is enforces by tuples ////////////
person3.role = []; // error missing two items!
person3.role = ['test', 'test', 'test']; // error first one has to be number
person3.role = [1, 'test', 'test']; // Error there is no 3rd type.

/*
assigning a number here to the second element and therefore replacing it with a number would be allowed
because we're just saying something about the types we generally can use in there.

We know we want to have exactly that structure two elements first element no second element string but
typescript doesn't do that well for such a scenario.

A tuple would be perfect we can tell typescript what role should be by explicitly setting the type of
role.

So here we also have an example where typescript doesn't fir a type but we explicitly want to override

it. */
