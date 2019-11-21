import Counter from './utils/counter';
import { getTasks as apiGetTasks } from './apis/task';

const state = {
	counter: Counter(),
	tasks: []
};

export const clearTasks = () => {
	state.tasks = [];
};

export const getTasks = () => {
	return state.tasks;
}

export const addTask = (title) => {
	const task = {
		id: state.counter(),
		title,
		completed: false
	};
	state.tasks = [
		...state.tasks,
		task
	];
	return state.tasks;
};

export const removeTask = (id) => {
	return state.tasks.filter(task => task.id !== id);
};

export const toggleTask = (id) => {
	// return state.tasks.map(task => (
	// 	task.id === id ? { ...task, completed: !task.completed } : task
	// ));
	state.tasks.forEach(task => {
		if (task.id === taskId) {
			task.completed = !task.completed;
		}
	});
	return state.tasks;
};

export const fetchTasks = async () => {
	const tasks = await apiGetTasks();
	const maxId = Math.max(0, ...tasks.map(task => task.id));
	state.counter = Counter(maxId);
	state.tasks = tasks.slice(0, 10);
	return state.tasks;
};