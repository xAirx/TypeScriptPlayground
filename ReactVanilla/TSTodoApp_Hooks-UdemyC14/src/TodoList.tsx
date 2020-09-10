/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface TodoListProps {
	items: { id: number, text: string }[];
	todoDeleteHandler: (id: number) => void;
	/* onAddTodo: (id: number, text: string) => void; */
}

const Todolist: React.FC<TodoListProps> = props => {
	const { items, todoDeleteHandler } = props;
	return (
		<ul>
			{items.map(todo => (
				<li key={todo.id}>
					{todo.text}
					{/* The function returns void. void is not assingable to onClick which expects a function.  */}
					{/* 	<button type="button" onClick={onDeleteTodo(todo.id)}>DELETE</button> // WONT WORK */}

					<button type="button" onClick={() => todoDeleteHandler(todo.id)}>DELETE</button>

					{/* we need to make sure that this function
					is getting called when this button is getting clicked for that we can point at props on the lead to
					do and not execute this but instead just point at it so that this function of a receiving on this prop
					will be called when I click on this button occurs.
					The only problem with this approach of course is that here on this function we expect to get the to
					do idea as a parameter.
					Now to ensure that this works we can simply use bind here.
					I don't care about the this keyword in the to be called function so I'll set it to null but this second
					argument we pass to bind will be the first parameter received in on the lead to do and that should be
					the idea of the to do so to do dot I.D. here with that it should work. */}

					{/* 	<button type="button" onClick={() => todoDeleteHandler.bind(null, todo.id)}>DELETE ME </button>
 */}
				</li>
			))}
		</ul>
	);
};

export default Todolist;
