import React from 'react'

interface TodoListProps {
	items: { id: string, text: string }[];
}


const NewTodo: React.FC<TodoListProps> = (/* props */) => {

	const todoSubmitHandler = () => {
		console.log("I AM RUNNING ON SUBMIT");
	}

	/* const newTodo: newTodo = e.target.value;

	let newItems = { ...props.items, newTodo }; */

	return (
		<>
			<form onsubmit="todoSubmitHandler">
				<div className="div">
					<label htmlFor="todo-text">Todo Text</label>
					<input type="text" id="todo-text" />
				</div>
				<button type="submit">Add Todo</button>
			</form>
		</>
	)
}

export default NewTodo
