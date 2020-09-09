/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import TodoList from './TodoList';
import NewTodos from './NewTodo';

const App: React.FC = () => {
	const todosArray = [{ id: 3, enteredText: 'Finish the course' }];

	const [todos, setNewTodo] = useState(todosArray);

	const onAddTodo = (id: number, enteredText: string) => {
		console.log('the new data is', enteredText);
		console.log('the new id is', id);
		// eslint-disable-next-line object-shorthand
		setNewTodo([...todos, { id: id, enteredText: enteredText }]);
		console.log('THESE ARE OUR NEW TODOS', todos);
		console.log('THESE ARE OUR NEW TODOS', todos);
	};
	return (
		<div className="App">
			<NewTodos onAddTodo={onAddTodo} />
			<TodoList items={todos} />
		</div>
	);
};

export default App;
