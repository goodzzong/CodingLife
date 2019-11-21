jest.mock('./utils/Counter');
jest.mock('./apis/task');

import { setMockCount } from './utils/Counter';
import { setMockTasks } from './apis/task';

import {
	clearTasks,
	getTasks,
	addTask,
	removeTask,
	toggleTask,
	fetchTasks
} from './services';

beforeEach(() => {
	setMockCount(100);
	clearTasks();
});

test('clearTasks', () => {
	expect(getTasks()).toEqual([]);
});

test('addTask', () => {
	const tasks = addTask("Hello");
	expect(tasks).toEqual([
		{ id: 100, title: 'Hello', completed: false },
	]);
});

test('removeTask', () => {
	addTask('hello');
	expect(removeTask(100)).toEqual([]);
});

test('toggleTask', () => {
	addTask('hello');
	expect(toggleTask(100)).toEqual([
		{ id: 100, title: 'hello', completed: true },
	]);
});

test('fetchTasks', async () => {
	setMockTasks([
		{ id: 100, title: 'Hello', completed: false },
		{ id: 200, title: 'Hellos', completed: false },
	]);

	const tasks = await fetchTasks();

	expect(tasks).toEqual([
		{ id: 100, title: 'Hello', completed: false },
		{ id: 200, title: 'Hellos', completed: false },
	]);
});