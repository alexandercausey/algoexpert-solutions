function nodeDepths(root) {
  let sum = 0;
	function depthSummer (node, depth) {
		if (!node) {
			return;
		}
		sum += depth;
		depthSummer (node.left, depth + 1);
		depthSummer (node.right, depth + 1);
	}
	depthSummer(root, 0);
	return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//space: O(h) - depth of tree
//time: O(n) - number of nodes