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


export default function ItemDetailImages({images, featuredImageIndex, handleDisplayModal}) {
  console.log("featured image index: ", featuredImageIndex);
    return (
        <DetailImagesWrapper>
            <FeaturedImage image={images[featuredImageIndex]} />
            <ThumbnailsWrapper>
              {images.map((image, index) => (
                  <ImageThumbnail 
                    imageIndex={index}
                    handleDisplayModal={handleDisplayModal} 
                    key={index} 
                    image={image} 
                    active={index == featuredImageIndex}
                  />
              ))}
            </ThumbnailsWrapper>
      </DetailImagesWrapper>
    )
}