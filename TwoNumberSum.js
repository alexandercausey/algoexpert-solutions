function twoNumberSum(array, targetSum) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
				return [i, j];
			}
		}
	}
	return [];
}

const array = [3,6,2,4,-1,34];
const targetSum = 3;
const expected = [4, -1];

console.log("result: ", twoNumberSum(array, targetSum), " expected: ", expected);