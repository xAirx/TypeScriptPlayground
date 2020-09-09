/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface TodoListProps {
	items: { id: number, enteredText: string }[];
}

const Todolist: React.FC<TodoListProps> = props => {
	const { items } = props;
	return (
		<ul>
			{items.map(todo => <li key={todo.id}>{todo.enteredText}</li>)}
		</ul>
	);
};

export default Todolist;
