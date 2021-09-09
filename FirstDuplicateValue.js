function firstDuplicateValue(array) {
  const checked = [array.splice(0, 1)[0]];
	console.log(checked);
	while (array.length > 0) {
		console.log(checked, array[0]);
		if (checked.includes(array[0])) {
			return array[0];
		} else {
			checked.push(array.splice(0, 1)[0])
		}
	}
  return -1;
}

//space: O(n) n=input array
//time: O(n ^ 2)