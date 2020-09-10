/* eslint-disable object-shorthand */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
	/* 	const todosArray = [{ id: 3, enteredText: 'Finish the course' }];
	 */

	/* we have to tell react how our state will look like over time.
	And for that we can again use that you state is a generic function because we can pass in the structure
	of our estate so which type of data our state is off and there we can pass in that our state should
	be an array of objects to be precise in the array of objects where we have an I.D. property which is
	a string and a text property which is a string.
	And now this state update is allowed  */

	// we pass in an empty array as a default value to useState.
	// we could pass in a initial todos array
	const [todos, setNewTodo] = useState<Todo[]>([]);

	// useState always returns an array with exactly two elements:

	/* 	The first element is the
		latest state snapshot for this render cycle and the second argument The second element in the array
		is a function to update that state and re render the component
	 */

	const todoAddHandler = (todoId: number, enteredText: string) => {
		console.log('the new data is', enteredText);
		console.log('the new id is', todoId);
		// eslint-disable-next-line object-shorthand
		// our initial explanation of our todosArray expects strings.

		/* setNewTodo([...todos, { id: id, text: enteredText }]); */
		/* 		The above
				It will most likely work in all scenarios we have in this app but theoretically react schedules state
				updates and data for what's it are to do is value here might not necessarily be the latest state when
		this update is performed to guarantee this we can pass a function to the state updating function or
		though a function which gets our previous to do this and which then returns to new state.
				This also is supported by react dysfunction will all be called by react for us and then we can rely
				on prefer to do is inside of this function to really be the latest state snapshot.
		 */
		setNewTodo(prevTodos => [...prevTodos, { id: todoId, text: enteredText }]);
		console.log('THESE ARE OUR NEW TODOS', todos);
	};

	const todoDeleteHandler = (todoId: number) => {
		console.log('We are deleting this todo', todoId);
		/* const filteredId = todos.filter(id => id === id);
		setNewTodo(prevTodos => [...prevTodos, filteredId]); */

		/* filter is
		a built in method in JavaScript which returns a new array of data and this new Array will basically
		be the old array minus anything you filter out filter takes a function which is executed on every item
		in the old array.
		And when that function you pass and returns true the item is kept and added to the new array if it returns
		false it will be dropped. */

		setNewTodo(prevTodos => prevTodos.filter(todo => todo.id !== todoId));

		/* logic that returns false if you do I.D. we were looking at is equal to
		the ID to do I.D. we're getting here so that if the two dos are equal there get it's getting dropped.
		So we need faults here not true and hence let's inverse as an addict and add an exclamation mark with
		that we keep all to DOS but the to do where the idea is equal to the idea we're getting here because
		that is the idea we want to drop because it is easy to do we want to delete. */
	};

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList items={todos} todoDeleteHandler={todoDeleteHandler} />
		</div>
	);
};

export default App;
