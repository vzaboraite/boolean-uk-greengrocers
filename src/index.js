/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

/*
Challenge 2
- Add sorting to the store ie. sort by price or sort alphabetically; 
  when a user clicks sort they will see a sorted list of items

1.0 create sorting buttons in store section and append them to 
    "#store" between `filter buttons` and `ul`:
  - sort by price: lowest/highest price;
  - sort alphabetically ascending/descending

  - create structure for buttons:
   <div class="center">
    <span>Sort items by:</span>
    <span>Price:</span>
    <div>
      <button style="margin:5px>Low to high</button>
      <button style="margin:5px>High to low</button>
    </div>
    <span>Name:</span>
    <div>
      <button style="margin:5px>A to Z</button>
      <button style="margin:5px>Z to A</button>
    </div>
   </div>

  1.1 add event listeners to the buttons

2.0 create sorting functions
  - input: storeItems array and ??
  - output: sortedItems array

*/

// Anchor elements:
const storeElem = document.querySelector("#store");

const mainHeadingElem = document.querySelector("h1");

const storeItemListElem = document.querySelector(".store--item-list");

const cartItemListElem = document.querySelector(".cart--item-list");

const totalNumberElem = document.querySelector(".total-number");

const storeItems = [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.35,
    type: "vegetable",
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.15,
    type: "vegetable",
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.25,
    type: "fruit",
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.5,
    type: "fruit",
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.75,
    type: "fruit",
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.3,
    type: "fruit",
  },
  {
    id: "007-bell-pepper",
    name: "bell-pepper",
    price: 0.25,
    type: "vegetable",
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.15,
    type: "fruit",
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.15,
    type: "fruit",
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.6,
    type: "vegetable",
  },
];

const cartItems = [];

function renderFilterButtons() {
  const divSectionElem = document.createElement("div");
  divSectionElem.className = "center";
  storeElem.insertBefore(divSectionElem, mainHeadingElem.nextSibling);

  const spanElem = document.createElement("span");
  spanElem.innerText = "Filter by type:";
  divSectionElem.append(spanElem);

  const divBtnElem = document.createElement("div");
  divSectionElem.append(divBtnElem);

  const veggieBtnElem = document.createElement("button");
  veggieBtnElem.className = "filter-button";
  veggieBtnElem.innerText = "Vegetables";
  veggieBtnElem.style.margin = "5px";
  veggieBtnElem.addEventListener("click", () => {
    storeItemListElem.innerHTML = "";
    renderStoreItemsList(filterItemsByType(storeItems, "vegetable"));
  });
  divBtnElem.append(veggieBtnElem);

  const fruitBtnElem = document.createElement("button");
  fruitBtnElem.className = "filter-button";
  fruitBtnElem.innerText = "Fruits";
  fruitBtnElem.style.margin = "5px";
  fruitBtnElem.addEventListener("click", () => {
    storeItemListElem.innerHTML = "";
    renderStoreItemsList(filterItemsByType(storeItems, "fruit"));
  });
  divBtnElem.append(fruitBtnElem);

  const allItemsBtnElem = document.createElement("button");
  allItemsBtnElem.className = "filter-button";
  allItemsBtnElem.innerText = "Show all items";
  allItemsBtnElem.style.margin = "5px";
  allItemsBtnElem.addEventListener("click", () => {
    storeItemListElem.innerHTML = "";
    renderStoreItemsList(storeItems);
  });
  divBtnElem.append(allItemsBtnElem);
}
renderFilterButtons();

function renderSortButtons() {
  const sortSectionElem = document.createElement("div");
  sortSectionElem.className = "center";
  storeElem.insertBefore(sortSectionElem, mainHeadingElem.nextSibling);

  const sortSpanElem = document.createElement("span");
  sortSpanElem.innerText = "Sort items by:";
  sortSectionElem.append(sortSpanElem);

  const priceSpanElem = document.createElement("span");
  priceSpanElem.innerText = "Price:";
  sortSectionElem.append(priceSpanElem);

  const priceBtnElem = document.createElement("div");
  sortSectionElem.append(priceBtnElem);

  const lowBtnElem = document.createElement("button");
  lowBtnElem.className = "sort-button";
  lowBtnElem.innerText = "Low to high";
  lowBtnElem.style.margin = "5px";
  priceBtnElem.append(lowBtnElem);

  const highBtnElem = document.createElement("button");
  highBtnElem.className = "sort-button";
  highBtnElem.innerText = "High to low";
  highBtnElem.style.margin = "5px";
  priceBtnElem.append(highBtnElem);

  const nameSpanElem = document.createElement("span");
  nameSpanElem.innerText = "Name:";
  sortSectionElem.append(nameSpanElem);

  const nameBtnElem = document.createElement("div");
  sortSectionElem.append(nameBtnElem);

  const ascendingBtnElem = document.createElement("button");
  ascendingBtnElem.className = "sort-button";
  ascendingBtnElem.innerText = "Ascending";
  ascendingBtnElem.style.margin = "5px";
  nameBtnElem.append(ascendingBtnElem);

  const descendingBtnElem = document.createElement("button");
  descendingBtnElem.className = "sort-button";
  descendingBtnElem.innerText = "Descending";
  descendingBtnElem.style.margin = "5px";
  nameBtnElem.append(descendingBtnElem);
}
renderSortButtons();

function filterItemsByType(items, expectedType) {
  const filteredItems = [];

  // filtering items and adding them in filteredItems[]
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const type = item.type;

    if (type === expectedType) {
      filteredItems.push(item);
    }
  }
  return filteredItems;
}

// reusable function used in renderStoreItem() and renderCartItem()
function renderImageElement(item) {
  const imageElem = document.createElement("img");
  const imageSrc = `/assets/icons/${item.id}.svg`;
  imageElem.setAttribute("src", imageSrc);
  const imageAlt = item.name;
  imageElem.setAttribute("alt", imageAlt);

  return imageElem;
}

// TODO: fix bug => prevent duplications, render list just once
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
