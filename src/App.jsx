import { useState, useReducer } from "react";
import Navbar from "./components/Navbar/Navbar";
import MobileNav from "./components/MobileNav/MobileNav";
import Container from "./components/Container/Container";
import GlobalStyle from "./global-design/GlobalStyle";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import shoppingCartReducer from "./reducers/shoppingCart"


function App() {
  const [displayMobile, updateDisplayMobile] = useState(false);
  const [displayCart, updateDisplayCart] = useState(false);
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, []);

  const totalQuantity = shoppingCart.length
    ? shoppingCart.reduce((total, cartItem) => total + cartItem.itemQuantity, 0)
    : 0;

  const toggleMobileMenu = () => {
    updateDisplayMobile(!displayMobile);
  };

  const handleAddToCart = (item, quantity) => {
    console.log(item);
    const existingItem = shoppingCart.find(
      (cartItem) => cartItem.itemId === item.id
    );
    if (existingItem) {  //If item already exists in cart, update quantity
      dispatch({type:'updateCart', itemId: item.id, quantity})
    } else {
      dispatch({type:'addToCart', item, quantity}) 
    }
  }

  const handleRemoveFromCart = (itemId) => {
    dispatch({
      type: "removeFromCart",
      itemId: itemId
    })
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MobileNav
          displayMobile={displayMobile}
          toggleMobileMenu={toggleMobileMenu}
        />
        <Navbar
          displayCart={displayCart}
          updateDisplayCart={updateDisplayCart}
          totalQuantity={totalQuantity}
          toggleMobileMenu={toggleMobileMenu}
        />
        <ShoppingCart
          displayCart={displayCart}
          shoppingCart={shoppingCart}
          removeFromCart={handleRemoveFromCart}
        />
        <MainWrapper>
          <ItemDetail addToCart={handleAddToCart} />
        </MainWrapper>
      </Container>
    </>
  );
}

export default App;
