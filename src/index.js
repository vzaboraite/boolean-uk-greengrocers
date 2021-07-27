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

  const imageElem = document.createElement("img");
  const imageSrc = `/assets/icons/${item.id}.svg`;
  imageElem.setAttribute("src", imageSrc);
  const imageAlt = item.name;
  imageElem.setAttribute("alt", imageAlt);
  divElem.append(imageElem);

  const buttonAddToCartElem = document.createElement("button");
  buttonAddToCartElem.innerText = "Add to cart";
  listItemElem.append(buttonAddToCartElem);

  return listItemElem;
}

  2.4 create renderCartItem(item):
    - use template in templates/cart-item.html
    - use for loop to create list item element:
      => li
        - inside li:
        => img:
          - attributes: className = "cart--item-icon", src(assets/icons/...), alt
        => p:
          - innerText = itemName
        => button:
          - className/List = "quantity-btn remove-btn center"
          - innerText = "-"
        => span:
          - className/List = "quantity-text center"
          - innerText = number
        => button:
          - className/List = "quantity-btn add-btn center"
          - innerText = "+"

  - input: an object from storeItems array
  - output: ??

3.0 create action functions: (HARD)

  3.1 listenToAddButton()
    - addEventListener to ".add-btn"

  3.2 addItemToCart()
    - works with listenToAddButton()
  
  3.3 listenToRemoveButton()
    - addEventListener to ".remove-btn"
  
  3.4 removeItemFromCart()
    - works with listenToRemoveButton()
  
*/
