
export default function shoppingCartReducer(cart, action) {
    if (action.type === "addToCart") {
      const item = {
              itemId: action.item.id,
              itemName: action.item.name,
              itemThumbnail: action.item.thumbnailImages[0],
              itemPrice: action.item.price * action.item.saleAmount,
              itemQuantity: action.quantity,
            };
      const updatedCart = [...cart, item];
      return updatedCart;
  
    } else if (action.type === "updateCart") {
      const updatedCart = cart.map((item) => {
        if (item.itemId === action.itemId) {
          const updatedItem = {
            ...item,
            itemQuantity: item.itemQuantity + action.quantity,
          };
          return updatedItem;
        } else {
          return item;
        }
      });
      return updatedCart;
  
    } else if (action.type === "removeFromCart") {
      const updatedCart = cart.filter(
        (item) => item.itemId !== action.itemId
      );
      return updatedCart
    } else {
      return cart;
    }
  }