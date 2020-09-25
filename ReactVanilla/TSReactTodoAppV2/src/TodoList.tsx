/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import react
import React, { useState } from 'react';
/* import { Todo } from './todo';
 */
// add Interface for our function component also to define our props coming from
// instead of adding an interface we have a d.ts file providing a type.

// App.tsx,

/// we want an interface to handle our TODOLIST PROPS

interface TodoListProps {
	todos: {
		id: number,
		text: string,
		completed: boolean
	}[];
	addTodoHandler: (text: string, completed: boolean) => void;
	deleteTodoHandler: (id: number) => void;
	updateTodoHandler: (id: number, text: string) => void;
	checkTodoHandler: (id: number, completed: boolean) => void;
}

// add function componentxw

export const TodoList: React.FC<TodoListProps> = props => {
	const {
		todos, addTodoHandler, deleteTodoHandler, updateTodoHandler, checkTodoHandler,
	} = props;

	const [newInput, setNewTodo] = useState('');
	const [toggled, setToggle] = useState(Boolean);

	const handleInput = (e: React.ChangeEvent) => {
		const element = e.currentTarget as HTMLInputElement;
		const { value } = element;
		setNewTodo(value);
		/* addTodoHandler(todo); */
	};

	const handleToggle = (id: number, completed: boolean | undefined) => {
		setToggle(completed === true);
		checkTodoHandler(id, toggled);
	};

	return (
		// we want to return the todolist here passed in as props as a list
		<div className="todoWrapper">
			<ul>
				{/* 	// Mappingo out items out.... using todo.id as key. */}
				{todos.map(todo => (
					<li key={todo.id}>
						{todo.text}
						<input onChange={e => { handleInput(e); }} placeholder="New Todo" />
						<button type="button" onClick={() => { addTodoHandler(newInput, toggled); }}> Add New Todo</button>
						<input type="checkbox" onClick={() => { handleToggle(todo.id, todo.completed); }} checked={todo.completed} />
						<button type="button" onClick={() => { deleteTodoHandler(todo.id); }}>DELETE</button>
						<button type="button" onClick={() => { updateTodoHandler(todo.id, newInput); }}>UpdateTodo</button>
					</li>
				))}
			</ul>

		</div>
	);
};

// we can display the todos with destructuring within the JSX

// Within the LI's we can add a button for deleting
