class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
	function doSums (node, sum) {
		sum += node.value;
		if (!node.left && !node.right) {
			sums.push(sum);
		}
		if (node.left) {
			doSums(node.left, sum);
		}
		if (node.right) {
			doSums(node.right, sum);
		}
	}
	doSums(root, 0);
	return sums;
}

//space: O(n)
//time:  O(n)