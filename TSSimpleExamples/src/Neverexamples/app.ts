let userInput2: unknown;
let userName: string;

userInput2 = 5;
userInput2 = 'Max';
if (typeof userInput2 === 'string') {
	userName = userInput2;
}



//////////////// WE CAN GIVE THIS FUNCTION VOID SINCE IT ACTUALLY RETURNS NOTHING.
function generateError(message: string, code: number): void {
	throw { message: message, errorCode: code };
	// while (true) {}
}


/////////////// IT DOESNT JUST RETURN NOTHING IF WE ARE TOTALLY HONEST IT RETURNS
/////////////// This functions returns NEVER, this function never produces a return value.
function generateError2(message: string, code: number): never { /* <---"Nevers inferred type is void.." */
	throw { message: message, errorCode: code };/*  <---- crashes our script so nothing is ever returned. */
	// while (true) {}
}

/* if we wanted to continue our script we would do try catch..

https://javascript.info/try-catch
let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (e) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( e.name );
  alert( e.message );
}


generateError('An error occurred!', 500);
/* console.log(result) */ //<---- NOTHING // ERROR