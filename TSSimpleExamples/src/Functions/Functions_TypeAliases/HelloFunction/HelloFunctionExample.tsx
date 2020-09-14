/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

/* /////////////////////////////Example of type checking of props in a functional component://///////////////////////////
 */

/// //////// SOURCE //////////
/* https://reactnative.dev/docs/0.60/typescript
 */

/* type AppProps = {
    name: string;
    count: number;
  }const Message: React.FC = ({name, count}: AppProps) =>
    <p>{name} has {count} apples.</p> */

// Creating an interface for our props.
// using the interface makes it so that we dont have to set our types.
export interface Props {
	name: string;
	// the questionmark here means:
	// Basically, ? marks the member as being optional in the interface.
	// : means (specify our type);
	enthusiasmLevelProp?: number;
}

/* Note: React.FC is shorthand for React.FunctionComponent. In earlier versions of @types/react this was React.SFC or React.StatelessFunctionalComponent.
 */

/* Setting a return type on a functional component is easy enough. FC stands for Functional Component. */

const Hello: React.FC<Props> = (props) => {
	// Destructuring with typescript and interface

	const { enthusiasmLevelProp, name }: Props = props;

	const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
		enthusiasmLevelProp,
	);

	const onIncrement = () => setEnthusiasmLevel((enthusiasmLevel || 0) + 1);
	const onDecrement = () => setEnthusiasmLevel((enthusiasmLevel || 0) - 1);

	// Assigning numChars as a number.
	const getExclamationMarks = (numChars: number) =>
		Array(numChars + 1).join('!');
	return (
		<View style={styles.root}>
			<Text style={styles.greeting}>
				Hello
        {name + getExclamationMarks(enthusiasmLevel || 0)}
			</Text>

			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button
						title="-"
						onPress={onDecrement}
						accessibilityLabel="decrement"
						color="red"
					/>
				</View>

				<View style={styles.button}>
					<Button
						title="+"
						onPress={onIncrement}
						accessibilityLabel="increment"
						color="blue"
					/>
				</View>
			</View>
		</View>
	);
};

// styles;
const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		alignSelf: 'center',
	},

	buttons: {
		alignItems: 'stretch',
		alignSelf: 'center',
		borderWidth: 5,
		flexDirection: 'row',
		minHeight: 70,
	},

	button: {
		flex: 1,
		paddingVertical: 0,
	},

	greeting: {
		color: '#999',
		fontWeight: 'bold',
	},
});
