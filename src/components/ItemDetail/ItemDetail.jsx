import styled from "styled-components";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";
import ItemPrice from "../ItemPrice/ItemPrice"
import products from "../../data/products/products";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import ItemQuantityToggle from "../ItemQuantityToggle/ItemQuantityToggle"

const ItemDetailContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 101.5rem;
`;

const DetailImagesWrapper = styled.div`
  max-width: 44.5rem;
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
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
 
 margin-top:3.2rem`


export default function ItemDetail({ id = 0, category = "shoes" }) {
  const item = products[category].find((product) => product.id == id);
  // console.log(item);
  // console.log(item.thumbnailImages)
  return (
    <ItemDetailContainer>
      <DetailImagesWrapper>
        <FeaturedImage image={item.featuredImages[0]} />
        <ThumbnailsWrapper>
          {item.thumbnailImages.map((image, index) => (
            <ImageThumbnail key={index} image={image} />
          ))}
        </ThumbnailsWrapper>
      </DetailImagesWrapper>
      <DetailContentWrapper>
        <Brand>{item.brand}</Brand>
        <ItemName>{item.name}</ItemName>
        <ItemDescription>{item.description}</ItemDescription>
        <ItemPrice price={item.price} saleAmount={item.saleAmount}/> 
          
        <QuantityCartWrapper>
          <ItemQuantity />
          <AddToCartButton />
        </QuantityCartWrapper>
       
      </DetailContentWrapper>

    </ItemDetailContainer>
  );
}
