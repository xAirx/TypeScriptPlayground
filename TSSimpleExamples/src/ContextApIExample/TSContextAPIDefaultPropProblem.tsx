/* Context with Type Aliases no - default values

https://fettblog.eu/typescript-react/context/

The whole example above works best if we have default properties and values. Sometimes, you don’t have default values or you need to be more flexible in which properties you want to set.

Generics for createContext and the Partial helper can help you greatly with that: */

import React from "react";

// We define our type for the context properties right here

///////////////////////////
///////////////////////////
//////////// using types
type ContextProps = {
	authenticated: boolean;
	lang: string;
	theme: string;
};

///tring to override the default prop problem.
/*
type ProviderValue = ContextProps; // since you know this is what the provider will be passing
type DefaultValue = undefined;
type ContextValue = ProviderValue | DefaultValue; */

////////////////////////////////////
////////////////////////////////////
///////// Using interfaces

/*
interface ContextProps {
  authenticated: boolean;
  lang: string;
  theme: string;
} */

/////////////////////////// FIXING THE ABOVE PROBLEM WITH DEFAULT VALUES/////////////////
////////////////////////// USING PARTIALS ////////////////////
// we initialise them without default values, to make that happen, we

// apply the Partial helper type.

// Strangely works but is not a great way to do it?
/*  export const AppContext = React.createContext<ContextProps>(null);
 */

export const AppContext = React.createContext<Partial<ContextProps>>({});

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

// Now, we can set only the properties we really need

const App = () => {
	return (
		<AppContext.Provider
			value={{
				// Properties are missing lang and theme
				authenticated: true,
			}}
		>
			<Header />
		</AppContext.Provider>
	);
};
