import React from "react";

//// AN ENUM IS the way of adding labels  to  variables.
// Defines the three kinds of messages that are displayed.
// Here we define our types for the context PROPERTIES THAT WE PASS INTO CREATE CONTEXT.
export enum ToastType {
  Info = "INFO",
  Error = "ERROR",
  Success = "SUCCESS",
}

// What is a type?
/* 1. Any type: – By using any data type, it means type checking for a variable cannot be done.

2. Built-in type: – the data types which are already there in a system like a number, string, boolean, void, null and undefined. Null means that the variable has been set to an object whose value is undefined. Undefined means that the variable has no value or object assigned to it.

3. User-defined data types: – the data types which are declared by the user like enums, classes, arrays, etc.
 */

//  another word for types are TypeALIASES.

/* TypeScript - Type Aliases

TypeScript allows to create reuseable aliases for a simple, intersection, unions, tuples or any other valid TypeScript types.

To declare an alias we need to use the following syntax:
 */

/* type myTypeName = <a valid TypeScript type>
 */

//  Defines the parameters required to display the toast.
type ToastConfigType = { type: ToastType; message: string; duration: number };

// The toast context exposes this object throughout the APP.

type ToastContextType = {
  // A benefit of types is the abillity to use unions
  //A union is a way to declare that a type could be one of many types
  //Defining a variable as of type null does not give it a value of null, but it gets the default value of undefined
  toastConfig: ToastConfigType | null; // Null is basically undefined.
  //Void (a function which returns undefined or has no return value).¨
  // Here we set type as toastType which is our enum giving us labels for each "STATE" of the toast.
  showToast: (type: ToastType, message: string, duration?: number) => void;
  hideToast: () => void;
};

// Creating the Toast Context

// createcontext requires default properties, we are using our TypeAlias ToastContextType to set them.

// here we pass in our typealias ToastContextType, which uses Our enum  ToastConfigType for our messages
// contains the properties show toast and hidetoast which we can access and use within our context.

// The context we create here is now typed and Either contains the types, and
// that we can control what is inside showtoast, hidetoast.

//////////////// ToastContextType here is passed as a Generic.////////////////
/* generics are a way to provide variables to types.

A common example is an array, an array without generics could contain anything.

 An array with generics can describe what values are inside in the array. */

/*  Array without generics could contain anything. */

/* Generics provide a way to make components work with any data type
 */

/// Why we pass in null here:

/*  ypeScript’s compiler will complain here as providing a defaultValue is compulsory.
 I find this requirement of Context API absurd because in many cases, a meaningful default value can not be provided.
We can workaround this limitation by changing the context’s type parameters a bit.
 */

export const ToastContext = React.createContext<ToastContextType | null>(null);
