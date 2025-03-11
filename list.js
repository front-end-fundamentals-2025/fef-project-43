//Array
const categories = [
  { name: "Fruits & Berries", link: "fruitsAndBerries.html" },
  { name: "Vegetables", link: "#" },
  { name: "Bakery", link: "#" },
  { name: "Dairy & Eggs", link: "#" },
  { name: "Cheese", link: "#" },
  { name: "Plant Based", link: "#" },
  { name: "Meat & Poultry", link: "#" },
  { name: "Charcuterie & Toppings", link: "#" },
  { name: "Fish & Seafood", link: "#" },
  { name: "Convenience Food", link: "#" },
  { name: "Drinks", link: "#" },
  { name: "Warm Drinks", link: "#" },
  { name: "Gluten free", link: "#" },
  { name: "Candies & Chocolate", link: "#" },
  { name: "Chips & Snacks", link: "#" },
  { name: "Frozen", link: "#" },
  { name: "Spices & Sauces", link: "#" },
  { name: "Baking", link: "#" },
  { name: "Health & Training", link: "#" },
  { name: "Kids", link: "#" },
  { name: "Cleaning & Household", link: "#" },
  { name: "Hygiene", link: "#" },
];

//Container
const categoryList = document.getElementById("category-list");

//Loop
categories.forEach((category) => {
  //Creating list items
  const li = document.createElement("li");

  //Creating anchor tags
  const a = document.createElement("a");
  a.href = category.link;
  a.textContent = category.name;

  //Link to list
  li.appendChild(a);

  //List to ul
  categoryList.appendChild(li);
});

/*Sources/Refrences:

DOM:
1. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

2. Creating element:
   https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

  forEach: 
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

   Youtube (Mostly the DOM parts):
   https://www.youtube.com/watch?v=hdI2bqOjy3c
*/
