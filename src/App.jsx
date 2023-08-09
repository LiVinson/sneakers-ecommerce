import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import GlobalStyle from './global-design/GlobalStyle';
import MainWrapper from './components/MainWrapper/MainWrapper'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {

  const [ shoppingCart, updateShoppingCart ] = useState([]);

  const [ displayCart, updateDisplayCart ] = useState(false);

  const totalQuantity = shoppingCart.reduce((total, cartItem) => total + cartItem.itemQuantity, 0);
  console.log(totalQuantity)

  const addToCart = (item, quantity) => {

    // console.log(item);
    // console.log(quantity);
    //check if cart contains item
    //If so, 
      //filter for item and update quantity
      //Swap in updated item
    //else add item to end of shopping cart
    console.log(shoppingCart)

    const existingItem = shoppingCart.find(cartItem => cartItem.itemId === item.id);

    if(existingItem) {
      console.log("update quantity");
    
      const updatedCart = shoppingCart.map((shoppingCartItem) => {
        if(shoppingCartItem.itemId === item.id) {
          const newQuantity = shoppingCartItem.itemQuantity + quantity;
          const newPrice = item.price * item.saleAmount;
          const updatedItem = {
            ...shoppingCartItem,
            itemQuantity: newQuantity,
            itemPrice: newPrice,
            testing: true
          }
          console.log(updatedItem)
          return updatedItem
        } else {
          return shoppingCartItem
        }
        
      })
  
      updateShoppingCart(updatedCart)

    } else {
      console.log("add new item ");

      const shoppingCartItem = {
        itemId: item.id,
        itemName: item.name,
        itemThumbnail: item.thumbnailImages[0],
        itemPrice: item.price * item.saleAmount,
        itemQuantity: quantity
      }
      // console.log(shoppingCartItem);
      const updatedCart = [...shoppingCart, shoppingCartItem]
  
        updateShoppingCart(updatedCart)
    }

  }

  const removeFromCart = () => {

  }
  return (
    <>
    <GlobalStyle />
    <Container>
      <Navbar displayCart={displayCart} updateDisplayCart={updateDisplayCart} totalQuantity={totalQuantity}/>
      <ShoppingCart
         displayCart={displayCart}  
         shoppingCart={shoppingCart} 
         removeFromCart={removeFromCart} />
      <MainWrapper>
        <ItemDetail addToCart={addToCart} />
      </MainWrapper>
    </Container>
    </>
  )
}

export default App
