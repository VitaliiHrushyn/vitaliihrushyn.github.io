let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll(".product-add-to-cart");
console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function() {

		let prevProductCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductCount + 1;

		console.log("clicked button # " + i);
	})
}


let likes = document.querySelectorAll(".product-like");
console.log(likes);

for (let i = 0; i < likes.length; i++) {
	likes[i].addEventListener("click", function() {

		// let prevProductCount = +productsCountEl.textContent;
		// productsCountEl.textContent = prevProductCount + 1;

		let backgroundImageURL = likes[i].style.backgroundImage //= "url(images/like-light.png)";
		
		if (backgroundImageURL != 'url("images/like-light.png")') {
			likes[i].style.backgroundImage = "url(images/like-light.png)";
			likes[i].style.backgroundColor ="#2c71b8";
		} else {
			likes[i].style.backgroundImage = "url(images/like-dark.png)";
			likes[i].style.backgroundColor = "transparent";
		}

		console.log("clicked like # " + i);
		console.log(likes[i]);
		console.log("1 = " + backgroundImageURL);
		console.log("2 = " + likes[i].style.backgroundColor);
	})
}

