function spiralTraverse(array) {
	if (array[0].length === 0) {
		return [];
	}
  if (array.length === 2) {
    return array[0].concat(array[1].reverse());
  }
	const result = [];
	if (array[0].length === 1) {
		for (let i = 0; i < array.length; i++) {
			result.push(array[i][0]);
		}
		return result;
	}
  if (array[0].length === 2) {
    const front = [array[0][0], array[0][1]];
    const back = [];
    for (let i = 1; i < array.length; i++) {
      front.push(array[i][1]);
      back.unshift(array[i][0]);
    }
    return front.concat(back);
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