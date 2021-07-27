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

/*
*******PSEUDO-CODE*******

Anchor objects/elements:
*1 for store items: ".store--item-list"
*2 for cart items: ".cart--item-list"

1.0 storeItems[{}, {}...]:
  - create an array of objects using given template above. 
  -object keys:
    => id, name, price

2.0 create render functions:

  2.1 renderStoreItemList(items):
    - use renderStoreItem();

  - input: an array of store items
  - output: ??

  2.2 create renderStoreItem(item):
    - use template in templates/store-item.html
    - use for loop to create list item element:
      => li 
        -inside li:
        => div.className = "store--item-icon" 
          - inside div:
            => img:
              - attributes: src, alt
        => button.innerText = "Add to cart" 

  - input: item from storeItems array
  - output: ??
    
  2.3 renderCart()
    - use renderCartItem();
  - input: ??
  - output: ??

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
