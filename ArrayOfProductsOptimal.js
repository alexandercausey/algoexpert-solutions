function arrayOfProducts(array) {
	const products = new Array(array.length).fill(1);
	let leftProduct = 1;
	let rightProduct = 1;
	for (let i = 0; i < array.length; i++) {
		products[i] = leftProduct;
		leftProduct *= array[i];
	}
	for (let j = array.length - 1; j >= 0; j--) {
		products[j] *= rightProduct;
		rightProduct *= array[j];
	}
	return products;
}

//time: O(n)
//space: O(n), same big O but two fewer arrays than previous solution