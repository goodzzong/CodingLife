import { getTasks } from './task';
import storage from '../lib/storage';

test('getTasks', async () => {
	const tasks = await getTasks();
	storage.set('tasks', tasks);
	expect(storage.get('tasks')[0].id).toBe(1);
});