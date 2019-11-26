import axios from 'axios';

const TASK_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTasks = async () => {
	const { data } = await axios.get(TASK_URL);

	return data;
};
