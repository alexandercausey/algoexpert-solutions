function isValidSubsequence(array, sequence) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[0]) {
			sequence.splice(0, 1);
		}
	}
	return sequence.length === 0;
}

const testArray = [5,1, 22, 6, 25, 3, -1, 8];
const testSequence = [1, 6, 8];
const expected = true;

console.log('Returns: ', isValidSubsequence(testArray, testSequence), ' Expected: ', expected);