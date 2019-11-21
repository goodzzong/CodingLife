import Counter from './counter';

test('counter', () => {
	const count = Counter();

	expect(count()).toBe(1);
	expect(count()).toBe(2);
	expect(count()).toBe(3);

})