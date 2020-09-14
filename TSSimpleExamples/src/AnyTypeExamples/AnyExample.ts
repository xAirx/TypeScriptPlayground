const age: any = 25;

// this is still type any, so we can give it any type we want to this is not very specific.
age = true;
console.log(age);
age = { name: 'luigi' };
console.log(age);
age = 'hello';
console.log(age);

/// ///////// No hints no errors, and is really going against what typescript really is.//////////

// we can push any kind of value onto this
const mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

// Objects

const ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
ninja = { name: false, age: 'marco' };
console.log(ninja);
