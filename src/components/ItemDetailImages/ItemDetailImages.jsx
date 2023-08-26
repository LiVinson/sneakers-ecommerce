import { useState } from "react";
import { styled } from "styled-components"
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";
import { device } from '../../global-design/devices'

const DetailImagesWrapper = styled.div`
  max-width: 44.5rem;

  @media ${device.tablet} {
    max-width: initial;
  }

  @media ${device.mobileL} {
    // padding-left: 2.4rem;
    // padding-right: 2.4rem;
    width: 100%;
  }
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;

  @media ${device.mobileL} {
    display:none;
  }

`;


export default function ItemDetailImages({images, featuredImageIndex, changeFeaturedImageIndex, handleDisplayModal}) {
    return (
        <DetailImagesWrapper>
            <FeaturedImage 
              image={images[featuredImageIndex]} 
              changeFeaturedImageIndex={changeFeaturedImageIndex}

              />
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