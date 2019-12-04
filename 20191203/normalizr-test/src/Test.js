import { normalize, schema } from 'normalizr';
import './originalData.json';

const user = new schema.Entity('users');

const comment = new schma.Entity('comments', {
	commenter: user
});

const post = new Schema.Entity('posts', {
	writer: user,
	comments: [comment]
});

export const normalizedData = normalize(originalData, post);