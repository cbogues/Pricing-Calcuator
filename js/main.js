
	// grab everything we need from DOM
	const priceInput = document.querySelector('[name=price]');
	const quantityInput = document.querySelector('[name=quantity]');
	const total = document.querySelector('.total');


	// create the functions that we need

	function calculatePieCost() {
		console.log(priceInput.value);
		const price = priceInput.value;
		const quantity = quantityInput.value;


		const cost = price * quantity;

		console.log(cost);

		total.innerText = '$' + cost.toFixed(2);

	}




	// add event listeners
	priceInput.addEventListener('input', calculatePieCost);
	quantityInput.addEventListener('input', calculatePieCost);
