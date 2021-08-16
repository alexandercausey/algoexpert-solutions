function nonConstructibleChange(coins) {
  if (coins.length === 0) {
		return 1;
	}
	coins.sort((a, b) => b - a);
	for (let i = 1; i > 0; i++) {
		let remainder = i;
	  for (let j = 0; j < coins.length; j++) {
			if (j === coins.length - 1 && remainder - coins[j] !== 0) {
				return i;
			}
			if (remainder - coins[j] === 0) {
				break;
			}
			if (remainder - coins[j] > 0) {
				remainder -= coins[j];
			}
		}
	}
}

//space complexity = O(1)
//time complexity = O(n2) quadratic