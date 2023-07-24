import styled from "styled-components";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";
import products from "../../data/products/products";

const ItemDetailContainer = styled.div``;

const DetailedImagesWrapper = styled.div`
  max-width: 44.5rem;
`;
const ThumbnailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
`;

export default function ItemDetail({ id = 0, category = "shoes" }) {
  const item = products[category].find((product) => product.id == id);
  // console.log(item);
  // console.log(item.thumbnailImages)
  return (
    <ItemDetailContainer>
      <DetailedImagesWrapper>
        <FeaturedImage image={item.featuredImages[0]} />
        <ThumbnailsWrapper>
          {item.thumbnailImages.map((image, index) => (
            <ImageThumbnail key={index} image={image} />
          ))}
        </ThumbnailsWrapper>
      </DetailedImagesWrapper>
    </ItemDetailContainer>
  );
}
