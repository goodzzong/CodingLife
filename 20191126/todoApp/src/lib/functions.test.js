import storage from './storage';
import { addTask } from './functions';

test('addTask', () => {
	const state = {
		tasks: storage.get('tasks') ? storage.get('tasks') : []
	};
	const tasks = addTask(state, 'hihi');
	expect(tasks).toEqual([
		{ id: 1, title: 'hihi', completed: false }
	]);
});
