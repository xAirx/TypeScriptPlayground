/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';

type NewTodoProps = {
	// Defining a function type, that doesnt return anything.
	onAddTodo: (id: number, enteredText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
	// we are passing useRef the HTMLInputElement

	/* 	We need to know which kind of data will be stored inside of that ref.
	And since you point at the input element will have a h to male input element stored in their now we
	all just have to provide a default value to the ref when it's getting setup and data will provide null
	because then the component gets rendered for the very first time when this code executes of course does
	hasn't been rendered down there.

	So then this will not point at anything.
	Once this has been rendered however the connection will be established and then this ref will work. */

	const textInputRef = useRef<HTMLInputElement>(null);
	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('I AM RUNNING ON SUBMIT');

		/* However here the problem is that this could be null.
		So to fix this we can add exclamation mark here to again tell
		typescript that this will be fine that the textInputRef
		 will be set and we're good by the way it what is correct. */

		const enteredText = textInputRef.current!.value;
		console.log(enteredText);
		props.onAddTodo(2, enteredText);
		// Using useRef to get data back from the input field.
	};

	return (
		<>
			<form onSubmit={todoSubmitHandler}>
				<div className="div">
					<label htmlFor="todo-text">
						Todo Text
						<input type="text" id="todo-text" ref={textInputRef} />
					</label>
				</div>
				<button type="submit">Add Todo</button>
			</form>
		</>
	);
};

export default NewTodo;
