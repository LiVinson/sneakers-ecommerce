import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import MobileNav from './components/MobileNav/MobileNav'
import Container from './components/Container/Container';
import GlobalStyle from './global-design/GlobalStyle';
import MainWrapper from './components/MainWrapper/MainWrapper'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';



function App() {

  const [displayMobile, updateDisplayMobile ] = useState(false);
  const [ shoppingCartItems, updateShoppingCartItems ] = useState([]);
  const [ displayCart, updateDisplayCart ] = useState(false);

  const totalQuantity = shoppingCartItems.length ? shoppingCartItems.reduce((total, cartItem) => total + cartItem.itemQuantity, 0) : 0;

  const toggleMobileMenu = ()=> {
    updateDisplayMobile(!displayMobile);
}

  const addToCart = (item, quantity) => {

    const existingItem = shoppingCartItems.find(cartItem => cartItem.itemId === item.id);

    if(existingItem) {
    
      const updatedCart = shoppingCartItems.map((shoppingCartItem) => {
        if(shoppingCartItem.itemId === item.id) {
          const newQuantity = shoppingCartItem.itemQuantity + quantity;
          const newPrice = item.price * item.saleAmount;
          const updatedItem = {
            ...shoppingCartItem,
            itemQuantity: newQuantity,
            itemPrice: newPrice,
            testing: true
          }
          return updatedItem
        } else {
          return shoppingCartItem
        }
        
      })
  
      updateShoppingCartItems(updatedCart)

    } else {

      const shoppingCartItem = {
        itemId: item.id,
        itemName: item.name,
        itemThumbnail: item.thumbnailImages[0],
        itemPrice: item.price * item.saleAmount,
        itemQuantity: quantity
      }
      const updatedCart = [...shoppingCartItems, shoppingCartItem]
      updateShoppingCartItems(updatedCart)
    }

  }

  const removeFromCart = (itemId) => {
    const newShoppingCartItems = shoppingCartItems.filter(item => item.itemId !== itemId);
    updateShoppingCartItems(newShoppingCartItems);
  }

  return (
    <>
    <GlobalStyle />
    <Container>
      <MobileNav displayMobile={displayMobile} toggleMobileMenu={toggleMobileMenu}/>
      <Navbar displayCart={displayCart} updateDisplayCart={updateDisplayCart} totalQuantity={totalQuantity} toggleMobileMenu={toggleMobileMenu}/>
      <ShoppingCart
         displayCart={displayCart}  
         shoppingCart={shoppingCartItems} 
         removeFromCart={removeFromCart} />
      <MainWrapper>
        <ItemDetail addToCart={addToCart} />
      </MainWrapper>
      
    </Container>

    </>
  )
}

export default App
