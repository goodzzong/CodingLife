import Counter from './Counter';

describe('Counter test', () => {
	it('init Counter number is 1', () => {
		const count = Counter();

		expect(count()).toBe(1);
		expect(count()).toBe(2);
		expect(count()).toBe(3);
	});



});