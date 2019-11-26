import storage from '../lib/storage';

export const getTasks = () => {
	return storage.get('tasks');
};

export const setTasks = task => {
	storage.set('tasks', task);
}