export default function Counter(initial = 1) {
	let count = initial - 1;
	return () => {
		count += 1;
		return count;
	}
}