function longestPeak(array) {
  let longest = 0;
	for (let i = 1; i < array.length - 1; i++) {
		if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
			let current = 3;
			let left = i - 1;
			let right = i + 1;
			while (array[left - 1] < array[left] || array[right] > array[right + 1]) {
				if (array[left - 1] < array[left]) {
					current++;
					left--;
				}
				if (array[right] > array[right + 1]) {
					current++;
					right++;
				}
			}
			if (current > longest) {
				longest = current;
			}
		}
	}
	return longest;
}

//time - O(n) n = input array length
//space O(1)