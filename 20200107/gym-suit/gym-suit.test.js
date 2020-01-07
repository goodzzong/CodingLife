
const solve = (n, lost, reserve) => {

	let newLost = overlap(lost, reserve);
	let newReserve = overlap(reserve, lost);

	newReserve.forEach(v => {
		const lostCheck = valueCheck(v, newLost);

		if (lostCheck > -1) {
			newLost = newLost.filter(n => n !== lostCheck);
		}
	});
	return n - newLost.length;
};

const valueCheck = (val, arr) => {
	return arr.includes(val - 1) ? val - 1 : arr.includes(val + 1) ? val + 1 : -1;
};

const overlap = (arr1, arr2) => {
	return arr1.filter(v => !arr2.includes(v));
};

test('gym-suit', () => {
	expect(solve(5, [2, 4], [1, 3, 5])).toBe(5);
	expect(valueCheck(1, [2, 4])).toBe(2);
	expect(overlap([2, 3, 4], [1, 2, 3, 6])).toEqual([4]);
});