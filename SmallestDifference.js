function smallestDifference(arrayOne, arrayTwo) {
  let diff;
	let pair;
	arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
	for (let i = 0; i < arrayOne.length; i++) {
		let lastMove;
		let j = Math.floor(arrayTwo.length / 2);
		while (diff !== 0) {
			if (!diff || Math.abs(arrayOne[i] - arrayTwo[j]) < diff) {
				diff = Math.abs(arrayOne[i] - arrayTwo[j]);
				pair = [arrayOne[i], arrayTwo[j]];
			}
			if ((arrayOne[i] > arrayTwo[j] && lastMove === 'left')
			 || (arrayOne[i] < arrayTwo[j] && lastMove === 'right')
			 || (j === arrayTwo.length - 1 || j === 0)) {
				break;
			}
			if (arrayOne[i] > arrayTwo[j] && lastMove !== 'left' && j < arrayTwo.length) {
				lastMove = 'right';
				j++;
			}
			if (arrayOne[i] < arrayTwo[j] && lastMove !== 'right' && j >= 0) {
				lastMove = 'left';
				j--;
			}
		}
	}
	return pair;
}

const arrOne = [-1, 5, 10, 20, 3];
const arrTwo = [26, 134, 135, 15, 17];

const result = smallestDifference(arrOne, arrTwo);

console.log(result);

//time: O(n(log(n) + Mlog(m))) where n is array 1 len and m is array 2
//space: O(1);