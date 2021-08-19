function moveElementToEnd(array, toMove) {
  for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] === toMove) {
			array.push(array.splice(i, 1)[0]);
		}
	}
	return array;
}

//space: O(1)
//time: O(n)