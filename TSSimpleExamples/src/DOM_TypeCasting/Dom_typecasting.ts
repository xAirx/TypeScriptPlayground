/* const anchor = document.querySelector('a');
 */

/// ////////////////////////////////////////////////////////////////
/// ///////////////////////////////////////////////////////////////
/// //////////////// MITIGATING object is possibly null, /////////////////////
// typescript does not know if there actually is an anchor tag
// on the index page during development.
// Typescript cant see this.

// we can fix it with a runtime check

if (anchor) {
	console.log(anchor.href);
}

// if we are certain that it exists we can ask an exclamationmark

// with the exclamationmark we say we will return an anchor tag and not null.
const anchor = document.querySelector('a')!;

console.log(anchor.href); // HTMLAnchorElement

// TypeScript automatically contains special types for every DOM element
// This also gives us intellisense.

/// ////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////

/// ////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////
/// ///////////////////Grabbing Element with class//////////////////////////////////
/// ////////////////////TYPECASTING///////////////////////
/// ///// GRABBING A FORM
// if we have more than one form how do we know that we are grabbing the right form?

const form = document.querySelector('form')!; // HTMLFormElement

const form = document.querySelector('.new-item-form'); // Element  NOT HTMLFormElement.
// when we use form or anchor tag TS knows which type we are grabbing.

// This is the reason TS tells us when we hover that this is just an Element.

// To make sure that we make the element not Element but into an HTMLFormElement.

// we do :

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children); // Gives us INTELLISENSE.

/// ////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////

// inputs

// grabbing an input by its ID.
/* const type = document.querySelector('#type')!;
 */

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amounnt') as HTMLInputElement;

// Adding eventlistener to the form itself.

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();
	console.log(type.value, tofrom.value, details.value, amount.value);
	console.log(amount.valueAsNumber);
});
