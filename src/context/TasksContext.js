import { createContext, useContext, useReducer } from 'react';
import taskReducer from '../reducers/taskReducer';

const initialTasks = [
	{ id: 0, text: 'Visit Kafka Museum', done: true },
	{ id: 1, text: 'Watch a puppet show', done: false },
	{ id: 2, text: 'Lennon Wall pic', done: false },
];

export const TasksContext = createContext(null);

export const TasksDispatchContext = createContext(null);

export const TasksProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

	return (
		<TasksContext.Provider value={tasks}>
			<TasksDispatchContext.Provider value={dispatch}>
				{children}
			</TasksDispatchContext.Provider>
		</TasksContext.Provider>
	);
};

export const useTasks = () => {
	return useContext(TasksContext);
};

export const useTasksDispatch = () => {
	return useContext(TasksDispatchContext);
};
