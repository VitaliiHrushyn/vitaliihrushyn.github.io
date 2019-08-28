let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll(".product-add-to-cart");
// console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function() {

		let prevProductCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductCount + 1;

		// console.log("clicked button # " + i);
	})
}


// let likes = document.querySelectorAll(".product-like");
// console.log(likes);

// for (let i = 0; i < likes.length; i++) {
// 	likes[i].addEventListener("click", function() {

// 		// let prevProductCount = +productsCountEl.textContent;
// 		// productsCountEl.textContent = prevProductCount + 1;

// 		// let backgroundImageURL = likes[i].style.backgroundImage //= "url(images/like-light.png)";
		
// 		// if (backgroundImageURL != 'url("images/like-light.png")') {
// 		// 	likes[i].style.backgroundImage = "url(images/like-light.png)";
// 		// 	likes[i].style.backgroundColor ="#2c71b8";
// 		// } else {
// 		// 	likes[i].style.backgroundImage = "url(images/like-dark.png)";
// 		// 	likes[i].style.backgroundColor = "transparent";
// 		// }

// 		// console.log("clicked like # " + i);
// 		// console.log(likes[i]);
// 		// console.log("1 = " + backgroundImageURL);
// 		// console.log("2 = " + likes[i].style.backgroundColor);





// 	})
// }


// change like button state

let likeButtons = document.querySelectorAll(".product-like");

for (let i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function (){
		if (this.classList.contains("liked")) {
			this.classList.remove("liked");
		} else {
			this.classList.add("liked");
		}
	})
}

// change quantity state

let decrementButton = document.querySelector(".decrement-button");
let incrementButton = document.querySelector(".increment-button");
let quantityInput = document.querySelector(".quantity-input input");
let minProductCount = 1;
let maxProductCount = 10;

console.log(decrementButton);
console.log(incrementButton);
console.log(quantityInput);

function toggleButtonsState(value) {
	if (value <= minProductCount) {
		decrementButton.disabled = true;
	} else {
		decrementButton.disabled = false;
	}

	if (value >= maxProductCount) {
		incrementButton.disabled = true;
	} else {
		incrementButton.disabled = false;
	}
}

let currentValue = quantityInput.value;
toggleButtonsState(currentValue);


incrementButton.addEventListener("click", function() {
	let currentValue = quantityInput.value;
	let nextValue = ++currentValue;
	quantityInput.value = nextValue;
	toggleButtonsState(nextValue);
})

decrementButton.addEventListener("click", function() {
	let currentValue = quantityInput.value;
	let nextValue = --currentValue;
	quantityInput.value = nextValue;
	toggleButtonsState(nextValue);
})

