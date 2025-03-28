//0 saved data goes into an empty array. When there is data, it loads from sessionstorage
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

//Updating amount of items in cart
function updateCartCount() {
  const cartLength = cart.length;
  const cartIconCountElement = document.getElementById("cart-icon-count");
  //Displays amount of items
  if (cartLength > 0) {
    cartIconCountElement.textContent = cartLength > 0 ? cartLength : "";

    //Trigger animation when smth is added to the cart
    cartIconCountElement.classList.add("animate-cart");
    setTimeout(() => {
      cartIconCountElement.classList.remove("animate-cart");
    }, 300);
  } else {
    cartIconCountElement.textContent = "0";
  }
}

//Add items to the cart
function addToCart(event) {
  const button = event.target;
  const img = button.parentElement.querySelector("img");

  img.classList.add("cart-img");

  const item = {
    id: button.getAttribute("data-id"),
    name: button.getAttribute("data-name"),
    price: button.getAttribute("data-price"),
    imgSrc: img.getAttribute("src"),
  };

  cart.push(item);

  //Saving cart update
  sessionStorage.setItem("cart", JSON.stringify(cart));

  //Cart count showing
  updateCartCount();
}

//Event listener to all the add cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

//Runs the function on any page w the link
window.onload = function () {
  updateCartCount();
};

//Only run carthtml to display items
if (window.location.pathname.includes("shoppingcart.html")) {
  displayCart();
}

//Function to display items
function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalAmountElement = document.getElementById("total-amount");

  //Clear before adding item
  cartItemsContainer.innerHTML = "";

  let totalAmount = 0;

  //Loop through cart and create HTML for each item
  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    //Item details
    cartItemDiv.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>Price:${item.price}</p>
      <img src=${item.imgSrc} />
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    //Item to the cart container
    cartItemsContainer.appendChild(cartItemDiv);

    //Total amount
    totalAmount += parseFloat(item.price);

    //Event listener- Remove button
    const removeButton = cartItemDiv.querySelector(".remove-btn");
    removeButton.addEventListener("click", removeItem);
  });

  //Update total amount
  totalAmountElement.textContent = `${totalAmount.toFixed(2)}kr`;
}

//Function to remove
function removeItem(event) {
  const index = event.target.getAttribute("data-index");

  //Remove item from cart array
  cart.splice(index, 1);

  //Update
  sessionStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  displayCart();
}
//"Clear cart" function
function clearCart() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCart();
}

//Event listener for button
const clearCartButton = document.getElementById("clear-cart-btn");
if (clearCartButton) {
  clearCartButton.addEventListener("click", clearCart);
}

/*Sources/Refrences:

DOM
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

JSON
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

Event Listener
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events

SessionStorage
https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

Youtube (Mostly the DOM parts):
https://www.youtube.com/watch?v=hdI2bqOjy3c


Note!
ChatGPT adjusted the "cartItemDiv.innerHTML"
*/
