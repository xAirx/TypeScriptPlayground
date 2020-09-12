import React, { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { Todo } from './todo';

// we need a d.ts for types

// We need a todo type that teks a string and a number and completed boolean

// We need to import our todolist file here.

// Create initial Todos that we can pass down to our todolist component

// Rewrite app to const function taking reactFC

interface Todos {
	id: number;
	text?: string;
	completed?: boolean;
}

const App: React.FC<Todo> = () => {
	const initialTodos = [{ id: Math.random(), text: 'testtodo', completed: true }];

	/// //// USESTATE ///////

	// we have our useState we use for logic handling for adding a new todo and
	// setState with the value from the input field below
	// The state is now what is passed to our TodoList component so its dynamic
	// remember to add initial  todos to the useState.
	// remember that the useState needs the Todo type applied.
	// Remember to make sure that the generic is set as Todo[], since we are
	// working with arrays here. also you can pass the default value
	// as an empty array.

	const [todos, setNewTodos] = useState<Todos[]>(initialTodos);

	/// //// ADD FUNCTIONALITY //////

	// Write on addtodo function
	// The function expects a todo data prop from todolist

	/* The function will expect you to define  what goes in it as arguments
	so  todoId: number, text:string
	 */

	const addTodoHandler = (id: number, text: string, completed: boolean) => {
		/* const updatedTodos = (prevTodos) => [...prevTodos, { id: id, text: text, completed: completed }]; */
/* 		console.log("these are our new updated todos", updatedTodos);

	///////// LOGIC //////
	//compare prev and new "props" with "prevTodo"
	// Grab old array with prevTodo "PrevProps" function from es6
	// add with spread operator and destructuring, remember to , add new Todos.

 */		setNewTodos(prevTodos => [...prevTodos, { id, text, completed }]);
	};

	/// / DELETE FUNCITONALITY /////
	// remember that the function needs the Todo type applied as generic
	// We pass the Delete function down to todolist as a prop, and we can call it
	// from within todolist.tsx.

	/// ////// LOGIC //////

	const deleteTodoHandler = (id: number) => {
		setNewTodos(prevTodos => prevTodos.filter(id => id !== id));
	};

	/// / Update FUNCITONALITY /////

	/* The function will expect you to define  what goes in it as arguments
	so  todoId: number, text:string
	 */

	const updateTodoHandler = (id: number, text: string) => {
		setNewTodos(prevTodos => [...prevTodos, { id, text }]);
	};

	// remember that the function needs the Todo type applied as generic
	// We pass the update function down to todolist as a prop, and we can call it
	// from within todolist.tsx.

	/// ////// LOGIC //////
	/* To do update functionality and Toggle functionality we will use map()
	// we will map oiver the todos, and grab the id === id
	// use a ternary, if, then .{..todo, text:text} else todo));
		setState
	*/

	/// / Toggle FUNCITONALITY /////

	/* The function will expect you to define  what goes in it as arguments
	so  todoId: number, text:string
	 */

	const checkTodoHandler = (id: number, completed: boolean) => {
		setNewTodos(prevTodos => [...prevTodos, { id, completed }]);
	};

	// remember that the function needs the Todo type applied as generic
	// We pass the update function down to todolist as a prop, and we can call it
	// from within todolist.tsx.

	/// ////// LOGIC //////

	/* The function will expect you to define  what goes in it as arguments
	so  todoId: number, text:string
	 */
	// remember that the function needs the Todo type applied as generic
	/* To do update functionality and Toggle functionality we will use map()
	// we will map oiver the todos, and grab the id === id
	// use a ternary, if, then .{..todo, completed:text} else todo));
		setState
	*/

	return (
		<div className="App">
			<TodoList
				updateTodoHandler={updateTodoHandler}
				checkTodoHandler={checkTodoHandler}
				deleteTodoHandler={deleteTodoHandler}
				addTodoHandler={addTodoHandler}
				todos={todos}
			/>
		</div>
	);
};

export default App;
