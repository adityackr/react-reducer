import { useReducer } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/Tasklist';
import taskReducer from './reducers/taskReducer';

const App = () => {
	const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

	function handleAddTask(text) {
		dispatch({
			type: 'added',
			id: nextId++,
			text: text,
		});
	}

	function handleChangeTask(task) {
		dispatch({
			type: 'changed',
			task: task,
		});
	}

	function handleDeleteTask(taskId) {
		dispatch({
			type: 'deleted',
			id: taskId,
		});
	}

	return (
		<>
			<h1>Prague itinerary</h1>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	);
};

export default App;

let nextId = 3;
const initialTasks = [
	{ id: 0, text: 'Visit Kafka Museum', done: true },
	{ id: 1, text: 'Watch a puppet show', done: false },
	{ id: 2, text: 'Lennon Wall pic', done: false },
];
