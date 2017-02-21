
	// grab everything we need from DOM
	const priceInput = document.querySelector('[name=price]');
	const quantityInput = document.querySelector('[name=quantity]');
	const total = document.querySelector('.total');
	const quantityLabel = document.querySelector('.quantity-label');

	// create the functions that we need

	function calculatePieCost() {
		console.log(priceInput.value);
		const price = priceInput.value;
		const quantity = quantityInput.value;


		const cost = price * quantity;

		console.log(cost);

		total.innerText = '$' + cost.toFixed(2);

	}

	function updateQuantityLabel () {
		const quantity = quantityInput.value;
		quantityLabel.innerText = quantity;

	} 

	// on first run
	calculatePieCost();


	// add event listeners
	priceInput.addEventListener('input', calculatePieCost);
	quantityInput.addEventListener('input', calculatePieCost);
	quantityInput.addEventListener('input', updateQuantityLabel);
