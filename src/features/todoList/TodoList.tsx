import React from 'react'
import TodoListItem from './TodoListItem'
import { RootState } from 'app/rootReducer';
import { useSelector } from 'react-redux';

export default function TodoList() {
	const todos = useSelector(
		(state: RootState) => state.todos
	);

	return (
		<ul>
			{todos.map(todo => (
				<TodoListItem key={todo.id} {...todo} />
			))}
		</ul>
	);
}