
const solve = (array, commands) => {
	return commands.map(command => extractNumber(array, command));
};

const extractNumber = (array, command) => {
	return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1];
};

test('k-number', () => {

	expect(extractNumber([1, 5, 2, 6, 3, 7, 4], [2, 5, 3])).toEqual(5);
	expect(extractNumber([1, 5, 2, 6, 3, 7, 4], [4, 4, 1])).toEqual(6);
	expect(extractNumber([1, 5, 2, 6, 3, 7, 4], [1, 7, 3])).toEqual(3);
	expect(solve([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);

});