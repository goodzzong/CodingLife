import { create } from 'react-test-renderer';

import React from 'react';
import App from './App';

it('renders without crashing', () => {
	const root = create(<App />);
	console.log(root.toJSON());
	expect(root.toJSON()).toBeTruthy();
});