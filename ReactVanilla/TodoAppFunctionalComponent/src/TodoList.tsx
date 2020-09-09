import React from './node_modules/react'


interface TodoListProps {
	items: { id: string, text: string }[];
}

const Todolist: React.FC<TodoListProps> = (props) => {


	return (
		<ul>
			{props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
		</ul >
	)
}


export default Todolist;