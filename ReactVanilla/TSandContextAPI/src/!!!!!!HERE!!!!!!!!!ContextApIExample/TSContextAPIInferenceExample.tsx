/*
TS and Inference : Context API

https://fettblog.eu/typescript-react/context/

React’s context API allows you to share data on a global level. To use it, you need two things:
	• A provider. Providers pass data to a subtree.
	• Consumers. Consumers are components that consume the passed data inside render props

With React’s typings, context works without you doing anything else. Everything is done using type inference and generics.
You consume all the implied type information which @types/react produces for you.

 */
/*


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Inferred types - Create a context #//////////////////////

Let’s have a look! First, we create a context. The most important thing is to not forget default properties. */

import React from "react";

export const AppContext = React.createContext({
  authenticated: true,
  lang: "en",
  theme: "dark",
});

/*
And with that, everything you need to do in terms of types is done for you.

We have three properties called authenticated, lang and theme, they are of types boolean and string respectively.

 React’s typings take this information to provide you with the correct types when you use them.
 */

/*


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////Provide context #////////////////////////////////////////////

Our app component provides this context. It also sets values different from default values. */

/* Now, every component inside this tree can consume this context.  */
/*  */
/* You already get type errors when you forget a property or use the wrong type: */

export const App = () => {
  // ⚡️ compile error! Missing properties
  return (
    <AppContext.Provider
      value={{
        // Missing property values
        /*  lang: 1, */ /// Error number is nott assignable to string.
        lang: "number", /// Error number is nott assignable to string.
      }}
    >
      <Header />
    </AppContext.Provider>
  );
};

/* Now, let’s consume our global state.
 */

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Consume context #////////////////////////////////////////////

/* Consuming context is done via render props (see the previous chapter) for more details).

 You can destructure you render props as deep as you like, to get only the props you want to deal with: */

const Header = () => {
  return (
    <AppContext.Consumer>
      {({ authenticated }) => {
        if (authenticated) {
          return <h1>Logged in!</h1>;
        }
        return <h1>You need to sign in</h1>;
      }}
    </AppContext.Consumer>
  );
};

/* Because we defined our properties earlier with the right types, authenticated is of type boolean at this point. Again we didn’t have to do anything to get this extra type safety.
 */
