import React from 'react';

const TodoItem = ({ data, deleteTodo, completeHandler }) => {
	return (
		<li className='d-flex justify-content-between align-items-center px-5 my-3 '>
			<p
				onClick={() => completeHandler(data.id)}
				style={{
					textDecoration: data.completed ? 'line-through' : '',
				}}>
				{data.name}
			</p>
			<button
				onClick={() => deleteTodo(data.id)}
				className='btn btn-danger'>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
