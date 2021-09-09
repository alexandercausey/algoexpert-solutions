function firstDuplicateValue(array) {
  const checked = new Set();
	for (const value of array) {
		if (checked.has(value)) {
			return value;
		}
		checked.add(value);
	}
  return -1;
}

//time: O(n)
//space: O(n)