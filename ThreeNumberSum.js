function threeNumberSum(array, targetSum) {
	const results = [];
	array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			for (let k = j + 1; k < array.length; k++) {
				if (array[i] + array[j] + array[k] === targetSum) {
					results.push([array[i], array[j], array[k]]);
				}
			}
		}
	}
	return results;
}

//time: O(n^3)
//space: O(n)