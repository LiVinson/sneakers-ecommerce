import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import GlobalStyle from './global-design/GlobalStyle';
import MainWrapper from './components/MainWrapper/MainWrapper'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {

  const [ shoppingCart, updateShoppingCart ] = useState([]);

  const addToCart = (item, quantity) => {

    console.log(item);
    // console.log(quantity);
    //check if cart contains item
    //If so, 
      //filter for item and update quantity
      //Swap in updated item
    //else add item to end of shopping cart

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

  const removeFromCart = () => {

  }
  return (
    <>
    <GlobalStyle />
    <Container>
      <Navbar />
      <ShoppingCart shoppingCart={shoppingCart} removeFromCart={removeFromCart} />
      <MainWrapper>
        <ItemDetail addToCart={addToCart} />
      </MainWrapper>
    </Container>
    </>
  )
}

export default App
