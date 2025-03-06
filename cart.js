//0 saved data goes into an empty array. When there is data, it loads from localstorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Updating amount of items in cart
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  const cartLength = cart.length;
  cartCountElement.querySelector('a').textContent = `Cart (${cartLength})`;
}

//Add items to the cart
function addToCart(event) {
  const button = event.target;
  const item = {
    id: button.getAttribute('data-id'),
    name: button.getAttribute('data-name'),
    price: button.getAttribute('data-price')
  };

  cart.push(item);

  //Saving cart update
  localStorage.setItem("cart", JSON.stringify(cart));

  //Cart count showing
  updateCartCount();
}

//Event listener to all the add cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});


//Calls the function
updateCartCount();