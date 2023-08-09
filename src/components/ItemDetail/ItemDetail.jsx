import { useState, useEffect } from "react";
import styled from "styled-components";
import ItemPrice from "../ItemPrice/ItemPrice"
import products from "../../data/products/products";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import ItemQuantityToggle from "../ItemQuantityToggle/ItemQuantityToggle"
import ItemDetailImages from "../ItemDetailImages/ItemDetailImages";



const ItemDetailContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 101.5rem;
`;


const DetailContentWrapper = styled.div`
    width: 44.5rem;
    padding-top:6.2rem;
`

const Brand = styled.p`
    color: var(--orange);
    font-size:1.3rem;
    font-weight: var(--font-bold);
    line-height:1;
    margin-bottom: 2.4rem;
    text-transform: uppercase;
`

const ItemName = styled.h1`
    color: var(--dark-blue);
    font-size: 4.4rem;
    font-weight: var(--font-bold);
    line-height: 4.8rem;
    margin-bottom: 3.2rem; 
`
const ItemDescription = styled.p`
    color: var(--dark-gray-blue);
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-bottom: 2.4rem;
`
 const ItemQuantity = styled(ItemQuantityToggle)`
    margin-right: 1.6rem;
   
 `

 const QuantityCartWrapper = styled.div`

   margin-top:3.2rem
 `

const fetchItemById = (id) => {
  const item = products.shoes.find((product) => product.id == id);
  return item
}

export default function ItemDetail({ addToCart, id = 0 }) {

  const [ item, setItem ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ quantity, setQuantity ] = useState(1)

  useEffect(()=> {
    const item = fetchItemById(id);
    console.log(item)
    setItem(item);
    setLoading(false);
  }, [id])

  const handleAddToCart = () => {
    addToCart(item, quantity)
  }
  return (
    <ItemDetailContainer>
      {loading ? "Loading!" : <>
      
      <ItemDetailImages featuredImage={item.featuredImages[0]} thumbnailImages={item.thumbnailImages}/>
      <DetailContentWrapper>
        <Brand>{item.brand}</Brand>
        <ItemName>{item.name}</ItemName>
        <ItemDescription>{item.description}</ItemDescription>
        <ItemPrice price={item.price} saleAmount={item.saleAmount}/> 
          
        <QuantityCartWrapper>
          <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
          <AddToCartButton handleAddToCart={handleAddToCart}/>
        </QuantityCartWrapper>
       
        </DetailContentWrapper>
      </>}



    </ItemDetailContainer>
  );
}
