/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

/*
*******Deliverables*******
- A user can view a selection of items in the store
- From the store, a user can add an item to their cart
- From the cart, a user can view and adjust the number of items in their cart
    - If an item's quantity equals zero it is removed from the cart
- A user can view the current total in their cart

*******Instructions*******
- Use data structures to store your data
- Create render functions to work with the data
- Create action functions to update your data (for the Cart section)

*******Tips*******
- Use action functions with your Event Listeners, these will have names like addItemToCart and removeItemFromCart
*/

// Anchor objects/elements:
// *1 for store items: ".store--item-list"
// *2 for cart items: ".cart--item-list"
// *3 for total price: ".total-number"

const storeItemListElem = document.querySelector(".store--item-list");

const cartItemListElem = document.querySelector(".cart--item-list");

const totalNumberElem = document.querySelector(".total-number");

// 1.0 storeItems[{}, {}...]:
//   - create an array of objects using given template above.
//   -object keys:
//     => id, name, price

const storeItems = [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.35,
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.15,
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.25,
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.5,
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.75,
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.3,
  },
  {
    id: "007-bell-pepper",
    name: "bell-pepper",
    price: 0.25,
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.15,
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.15,
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.6,
  },
];

const cartItems = [];
// 2.0 create render functions:

//   2.1 renderStoreItemsList(items):
//     - use renderStoreItem();
//      - use for loop to generate list item elements

//   - input: an array of store items
//   - output: -

// reusable function used in renderStoreItem() and renderCartItem()
function renderImageElement(item) {
  const imageElem = document.createElement("img");
  const imageSrc = `/assets/icons/${item.id}.svg`;
  imageElem.setAttribute("src", imageSrc);
  const imageAlt = item.name;
  imageElem.setAttribute("alt", imageAlt);

  return imageElem;
}

function renderStoreItemsList(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const listItemElem = renderStoreItem(item);
    storeItemListElem.append(listItemElem);
  }
}

renderStoreItemsList(storeItems);

//   2.2 create renderStoreItem(item):
//     - use template in templates/store-item.html
//       => li
//         -inside li:
//         => div.className = "store--item-icon"
//           - inside div:
//             => img:
//               - attributes: src, alt
//         => button.innerText = "Add to cart"

//   - input: item from storeItems array
//   - output: listItemElem

function renderStoreItem(item) {
  const listItemElem = document.createElement("li");
  storeItemListElem.append(listItemElem);

  const divElem = document.createElement("div");
  divElem.className = "store--item-icon";
  listItemElem.append(divElem);
  // imageElem got from renderImageElement()
  divElem.append(renderImageElement(item));

  const buttonAddToCartElem = document.createElement("button");
  buttonAddToCartElem.innerText = "Add to cart";
  // Event listener "click"
  buttonAddToCartElem.addEventListener("click", () => {
    addItemToCart(item, cartItems);

    updateCartElement();
  });
  listItemElem.append(buttonAddToCartElem);

  return listItemElem;
}

// belongs to buttonAddToCartElem event
function updateCartElement() {
  cartItemListElem.innerHTML = "";

  renderCart(cartItems);
  countTotalPrice(cartItems);
}

//   2.3 renderCart()
//     - use renderCartItem();
//     - use for loop to generate list item elements

//   - input: an array of store items
//   - output: -

function renderCart(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const listItemElem = renderCartItem(item);
    cartItemListElem.append(listItemElem);
  }
}

//   2.4 create renderCartItem(item):
//     - use template in templates/cart-item.html
//       => li
//         - inside li:
//         => img:
//           - attributes: className = "cart--item-icon", src(assets/icons/...), alt
//         => p:
//           - innerText = itemName
//         => button:
//           - className/List = "quantity-btn remove-btn center"
//           - innerText = "-"
//         => span:
//           - className/List = "quantity-text center"
//           - innerText = number
//         => button:
//           - className/List = "quantity-btn add-btn center"
//           - innerText = "+"

//   - input: an object from storeItems array
//   - output: listItemElem

function renderCartItem(item) {
  const listItemElem = document.createElement("li");
  cartItemListElem.append(listItemElem);
  // imageElem got from renderImageElement()
  const imageElem = renderImageElement(item.item);
  imageElem.className = "cart--item-icon";
  listItemElem.append(imageElem);

  const itemNameElem = document.createElement("p");
  itemNameElem.innerText = item.item.name;
  listItemElem.append(itemNameElem);

  const minusButtonElem = document.createElement("button");
  minusButtonElem.setAttribute("class", "quantity-btn remove-btn center");
  minusButtonElem.innerText = "-";
  listItemElem.append(minusButtonElem);

  const quantityElem = document.createElement("span");
  quantityElem.setAttribute("class", "quantity-text center");
  quantityElem.innerText = "1";
  listItemElem.append(quantityElem);

  const plusButtonElem = document.createElement("button");
  plusButtonElem.setAttribute("class", "quantity-btn add-btn center");
  plusButtonElem.innerText = "+";
  listItemElem.append(plusButtonElem);

  return listItemElem;
}

// 3.0 create action functions: (HARD)
// USER ACTIONS:
//  3.0.1 addItemToCart()
//    - addEventListener to buttonAddToCartElem in renderStoreItem()
//    - create an empty array that will store/hold item objects and its quantity

// inputs: storeItem object and cartItems[]
// output: -
function addItemToCart(storeItem, cartItems) {
  let foundItem = null;

  // check if item in the cart exists
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const cartItemId = cartItem.item.id;

    const storeItemId = storeItem.id;

    if (cartItemId === storeItemId) {
      foundItem = cartItem;
      break;
    }
  }

  //if item in the cart exists, increase quantity;
  // else add new item to the cart
  if (foundItem) {
    foundItem.quantity += 1;
  } else {
    const newItem = {
      item: storeItem,
      quantity: 1,
    };

    cartItems.push(newItem);
  }
}

//   3.0.2 incrementQuantity()
//     - addEventListener to ".add-btn"

//  3.0.3 decrementQuantity()
//     - addEventListener to ".remove-btn"

// PROGRAM SUBACTIONS:
//   3.0.4 removeFromCart()
//    - works with decrementQuantity() in 3.0.3
//    - if quantity = 0

//   3.0.5 countTotalPrice()
//    - will work with an array described in step 3.0.1
//
