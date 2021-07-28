/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

// Anchor elements:
const storeItemListElem = document.querySelector(".store--item-list");

const cartItemListElem = document.querySelector(".cart--item-list");

const totalNumberElem = document.querySelector(".total-number");

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

function updateCartElement() {
  cartItemListElem.innerHTML = "";

  renderCart(cartItems);
  countTotalPrice(cartItems);
}

function renderCart(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const listItemElem = renderCartItem(item);
    cartItemListElem.append(listItemElem);
  }
}

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
  // Decrement quantity by 1
  minusButtonElem.addEventListener("click", () => {
    item.quantity -= 1;
    // if item quantity is less than 1, find that item in the cartItems[] and remove it.
    if (item.quantity < 1) {
      cartItems.splice(cartItems.indexOf(item), 1);
    }
    updateCartElement();
  });
  listItemElem.append(minusButtonElem);

  const quantityElem = document.createElement("span");
  quantityElem.setAttribute("class", "quantity-text center");
  quantityElem.innerText = item.quantity;
  listItemElem.append(quantityElem);

  const plusButtonElem = document.createElement("button");
  plusButtonElem.setAttribute("class", "quantity-btn add-btn center");
  plusButtonElem.innerText = "+";
  // Increment quantity by 1
  plusButtonElem.addEventListener("click", () => {
    item.quantity += 1;
    updateCartElement();
  });
  listItemElem.append(plusButtonElem);

  return listItemElem;
}

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

function countTotalPrice(items) {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    const product = items[i];
    const price = product.item.price;
    const quantity = product.quantity;

    totalPrice += price * quantity;

    totalNumberElem.innerText = totalPrice.toFixed(2);
  }
  return totalNumberElem;
}
