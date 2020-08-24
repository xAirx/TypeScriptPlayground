/* eslint-disable spaced-comment */

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/// ////////////*  ## EXAMPLE 1 *//////////////

/*
We could be more generic I could explicitly assign a type here to the constant of Object object is one
of the built in types.
Just like number and string and now if a hover over does we see persons of type object and now typescript
really only cares about the fact that this object type now is still if we compiled is we get that error
though because typescript still analyzes our code and sees that we try to access something which doesn't
exist there.  */

const person: object = {
  name: 'test',
  age: 30,
};

// as seen on the line above we can set the person objct to the type object.

/* age should be some number and now we basically are explicitly assigning
the same typescript inferred before as you learned.
That's not a good practice but to understand object types that wanted to do it here still this is something
you can do.
It's better to let typescript infer it is as we did before like this.
 */

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/// ////////////*  ## EXAMPLE 2 *//////////////

// we could also set our types
const person: {
  name: string;
  age: number;
};

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/// ////////////*  ## EXAMPLE 3 *//////////////

// The best way is to let typescript infer its own types.
// Here it knows that name and age are strings and numbers.
// it gives an error on nickname since that does not not exist.
const person2 = {
  name: 'test',
  age: 30,
};

console.log(person2.nickname);
console.log(person2.name);
