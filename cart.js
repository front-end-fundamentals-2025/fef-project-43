//0 saved data goes into an empty array. When there is data, it loads from sessionstorage
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

//Updating amount of items in cart
function updateCartCount() {
  const cartLength = cart.length;
  const cartIconCountElement = document.getElementById('cart-icon-count');
   //Displays amount of items
  if (cartLength > 0) {
  cartIconCountElement.textContent = cartLength > 0 ? cartLength : ''; 

  //Trigger animation when smth is added to the cart
  if (cartLength > 0) {
    cartIconCountElement.classList.add('animate-cart');
    setTimeout(() => {
      cartIconCountElement.classList.remove('animate-cart');
    }, 300);
  }
}
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
  sessionStorage.setItem("cart", JSON.stringify(cart));

  //Cart count showing
  updateCartCount();
}

//Event listener to all the add cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

//Runs the function on any page w the link
window.onload = function() {
  updateCartCount();
};
