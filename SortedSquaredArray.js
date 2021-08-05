function sortedSquaredArray(array) {
	const squaredArray = [];
	for (let i = 0; i < array.length; i++) {
		squaredArray.push(array[i] ** 2);
	}
  return squaredArray.sort((a, b) => a - b);
}

const testArray = [-3, -2, 0, 1, 4];
const expected = [0, 1, 4, 9, 16];

console.log('Result: ', sortedSquaredArray(testArray), ' Expected: ', expected);

//Time Complexity: O(nlogn)
//Space Complexity: O(n)