import styled from "styled-components";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";
import ItemPrice from "../ItemPrice/ItemPrice"
import products from "../../data/products/products";

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

    border:solid 1px red;
    width: 44.5rem;
`

const Brand = styled.p`
    text-transform: uppercase;
    color: var(--orange);
    font-size:1.3rem;
    font-weight: var(--font-bold);
    line-height:1;
`

const ItemName = styled.h1`
    font-size: 4.4rem;
    font-weight: var(--font-bold);
    line-height:4.8rem;
`
const ItemDescription = styled.p`
    font-size: 1.6rem;
    line-height: 2.6rem;
`
 


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
      </DetailContentWrapper>

    </ItemDetailContainer>
  );
}
