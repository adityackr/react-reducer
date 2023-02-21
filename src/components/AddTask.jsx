import { useState } from 'react';
import { useTasksDispatch } from '../context/TasksContext';

export default function AddTask() {
	const [text, setText] = useState('');
	const dispatch = useTasksDispatch();
	let nextId = 3;
	return (
		<>
			<input
				placeholder="Add task"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				onClick={() => {
					setText('');
					dispatch({
						type: 'added',
						id: nextId++,
						text: text,
					});
				}}
			>
				Add
			</button>
		</>
	);
}
