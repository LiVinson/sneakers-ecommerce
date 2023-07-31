import { useState } from "react";
import { styled } from "styled-components"
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";


const DetailImagesWrapper = styled.div`
  max-width: 44.5rem;
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
`;


export default function ItemDetailImages({featuredImage, thumbnailImages}) {

  let [featuredIndex, setFeaturedIndex] = useState(0);
    return (
        <DetailImagesWrapper>
            <FeaturedImage image={featuredImage} />
            <ThumbnailsWrapper>
            {thumbnailImages.map((image, index) => (
                <ImageThumbnail key={index} image={image} active={index == featuredIndex}/>
            ))}
            </ThumbnailsWrapper>
      </DetailImagesWrapper>
    )
}