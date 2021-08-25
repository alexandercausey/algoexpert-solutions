function spiralTraverse(array) {
	if (array[0].length === 0) {
		return [];
	}
	const result = [];
	if (array[0].length === 1) {
		for (let i = 0; i < array.legth; i++) {
			result.push(array[i][0]);
		}
		return result;
	}
  let iMax = array[0].length - 1;
	let iMin = 0;
	let jMax = array.length - 1;
	let jMin = 0;
	let i = 0;
	let j = 0;
	while (result.length < (array.length * array[0].length)) {
		if (i < iMax && j === jMin) {
      result.push(array[j][i]);
		  i++;
		  if (i === iMax) {
		    jMin++;
		  }
		  continue;
		}
		if (i === iMax && j < jMax) {
			result.push(array[j][i]);
			j++;
			if (j === jMax) {
			  iMax--;
	  	}
		  continue;
	  }
	  if (i > iMin && j === jMax) {
			result.push(array[j][i]);
			i--;
			if (i === iMin) {
				jMax--;
			}
			continue;
		}
		if (i === iMin && j > jMin) {
			result.push(array[j][i]);
			j--;
			if (j === jMin) {
				iMin++;
			}
			continue;
		}
    if (result.length === (array.length * array[0].length) - 1) {
      result.push(array[j][i]);
    }
	}
	return result;
}

const testArray = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];

console.log(spiralTraverse(testArray));