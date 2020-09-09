import React from './node_modules/react';
import TodoList from './TodoList';
import NewTodos from './NewTodo';

const App: React.FC = () => {
	const todos = [{ id: 't1', text: 'Finish the course' }];

	return (
		<div className="App">
			<NewTodos items={todos} />
			<TodoList items={todos} />
		</div>
	);
}

export default App;
