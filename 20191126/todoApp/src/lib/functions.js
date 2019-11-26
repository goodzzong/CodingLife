import storage from './storage';

export const addTask = (state, title) => {
	const { tasks } = state;

	storage.set('tasks', tasks.concat({
		id: 1,
		title,
		completed: false
	}));

	return storage.get('tasks')
};