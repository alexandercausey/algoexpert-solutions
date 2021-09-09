function arrayOfProducts(array) {
  const leftProducts = new Array(array.length).fill(1);
	const rightProducts = new Array(array.length).fill(1);
	const products = new Array(array.length).fill(1);
	let leftProduct = 1;
	let rightProduct = 1;
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
		leftProducts[i] = leftProduct;
		leftProduct *= array[i];
		rightProducts[array.length - 1 - i] = rightProduct;
		rightProduct *= array[array.length - 1 - i];
	}
	for (let j = 0; j < array.length; j++) {
		products[j] = leftProducts[j] * rightProducts[j];
	}
	return products;
}

//time: O(n)
//space: O(n)