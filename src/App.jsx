import AddTask from './components/AddTask';
import TaskList from './components/Tasklist';
import { TasksProvider } from './context/TasksContext';

const App = () => {
	return (
		<TasksProvider>
			<h1>Prague itinerary</h1>
			<AddTask />
			<TaskList />
		</TasksProvider>
	);
};

export default App;
