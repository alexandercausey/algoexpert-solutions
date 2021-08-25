function longestPeak(array) {
  let longest = 0;
	let current = 0;
	let descending = false;
	for (let i = 0; i < array.length; i++) {
		if (descending && i === array.length - 1) {
			current++;
			if (current > longest) {
				longest = current;
				break;
			}
		}
		if (descending && array[i] <= array[i + 1]) {
			current++;
			if (current > longest) {
				longest = current;
				current = 0;
				descending = false;
			}
		}
		if (!descending && array[i] < array[i + 1]) {
			current++;
		}
		if (!descending && current > 0 && array[i] > array[i + 1]) {
			descending = true;
		}
		if (descending && array[i] > array[i + 1]) {
			current++;
		}
		if (array[i] === array[i + 1]) {
			current = 0;
		}
	}
	return longest;
}

//time - O(n)
//space - O(1)