/* eslint-disable spaced-comment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* const person: object { */

// we can set our types
/* const person: {
name: string;
age:number;
} = { */

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
///////////////////// ## EXAMPLE 1 /////////////////////

// The best way is to let typescript infer its own types.
// Here it knows that name and age are strings and numbers.
// it gives an error on nickname since that does not not exist.

const person1 = {
  name: 'test',
  age: 30,
  // Typescript detects a a string array of data here with inference
  favoriteActivites: ['Sports', 'Cooking'],
};

////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////

////////////////////// ## Testing what we can assign ->  EXAMPLE 2 //////////////////////////

person1.favoriteActivites = ['Sports', 1];

// wont work because we expect a string array only.

person1.favoriteActivites = 'sports';

// Wont work since we define a string array above

person1.favoriteActivites = ['Sports', 1];
// The above line would work if we used the any type.
/* let favoriteActivites: any[]; */

/* The any type is a special type and typescript which will have a closer look later which basically means
  do whatever you want.

  It's of course a type you don't want to use too often because you'll lose the benefits typescript gives

  you your back and JavaScript the world where you also can use any value anywhere. */

/* Any is very flexible but gives up everything typescript has to offer
 */

console.log(person1.nickname); // ERROR

/* So a hobby on the other end is correctly identified as being a string because since we go through an
  array of strings Well the individual values have to be just strings and therefore typescript offers
  us great support down there and allows us to do anything with hobby that can be done with a string because
  it knows with certainty that hobby will be a string because of the types we setup up there.

  And that's really flexible in of course a great feature which makes writing code a lot easier and way
  */

for (const hobby of person1.hobbies) {
  console.log(hobby.toUpperCase());

  /* That map does not exist on type string because it doesn't.
  So here we get an error and that's good that we get it because this would be wrong.

  And here we see typescript inference really really shine. */

  console.log(hobby.map()); // ERROR
}
