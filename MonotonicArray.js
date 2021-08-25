function isMonotonic(array) {
	if (array.length <= 2) {
		return true;
	}
	if (array[0] > array[array.length - 1]) {
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] < array[i + 1]) {
				return false;
			}
		}
	}
	if (array[0] < array[array.length - 1]) {
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				return false;
			}
		}
	}
	if (array[0] === array[array.length - 1]) {
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] !== array[0]) {
			return false;
		  }
		}
	}
	return true;
}

//space - O(1)
//time - O(n) - n is length of array