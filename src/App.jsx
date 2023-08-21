import { useState } from "react";
import { styled } from "styled-components";
import Navbar from './components/Navbar/Navbar';
import MobileNav from './components/MobileNav/MobileNav'
import Container from './components/Container/Container';
import GlobalStyle from './global-design/GlobalStyle';
import MainWrapper from './components/MainWrapper/MainWrapper'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';



function App() {

  const [displayMobile, updateDisplayMobile ] = useState(false);

  const [ shoppingCart, updateShoppingCart ] = useState([]);

  const [ displayCart, updateDisplayCart ] = useState(false);

  const totalQuantity = shoppingCart.length ? shoppingCart.reduce((total, cartItem) => total + cartItem.itemQuantity, 0) : 0;

  const toggleMobileMenu = ()=> {
    console.log("toggle")
    updateDisplayMobile(!displayMobile);
}

  const addToCart = (item, quantity) => {

    const existingItem = shoppingCart.find(cartItem => cartItem.itemId === item.id);

    if(existingItem) {
    
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
      <MobileNav displayMobile={displayMobile} toggleMobileMenu={toggleMobileMenu}/>
      <Navbar displayCart={displayCart} updateDisplayCart={updateDisplayCart} totalQuantity={totalQuantity} toggleMobileMenu={toggleMobileMenu}/>
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
