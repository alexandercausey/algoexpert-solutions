function firstDuplicateValue(array) {
  for (const val of array) {
		const absolute = Math.abs(val);
		if (array[absolute - 1] < 0) {
			return Math.abs(val);
		}
		array[absolute - 1] = 0 - array[absolute - 1];
	}
  return -1;
}

//time: O(n)
//space: O(1)