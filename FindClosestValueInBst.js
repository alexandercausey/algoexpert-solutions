function findClosestValueInBst(tree, target) {
	const valuesFromTarget = {};
	let closest;
	let distance;
  const checkVal = (node) => {
		const currentDistance = Math.abs(node.value - target);
		if (!closest || distance > currentDistance) {
			closest = node.value;
			distance = currentDistance;
		}
		if (node.left && target < node.value) {
			checkVal(node.left);
		}
		if (node.right && target > node.value) {
			checkVal(node.right);
		}
	}
	checkVal(tree);
	return closest;
}

//time complexity O(log(n))
//space complexity O(1)