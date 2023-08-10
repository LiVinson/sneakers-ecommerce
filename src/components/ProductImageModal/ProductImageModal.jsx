import { styled } from "styled-components";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";




const ModalWrapper = styled.div`
  z-index:1000;
  position:absolute
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
`;

const Overlay = styled.div`
position: fixed;
width: 100%;
top: 0;
left: 0;
height: 100%;
border: solid 1px red;
background-color: RGBA(0, 0, 0, .75);

z-index: 10000;
`


export default function ProductImageModal({ images, featuredImageIndex, displayModal=false, handleDisplayModal }) {
    return (
      <>
        {displayModal && 
        <Overlay>
        <ModalWrapper>
          <FeaturedImage image={images[featuredImageIndex]} />
          <ThumbnailsWrapper>
            {images.map((image, index) => (
              <ImageThumbnail
                imageIndex={index}
                handleDisplayModal={handleDisplayModal} 
                key={index} 
                image={image} 
                active={index == featuredImageIndex}  

              //   active={index == featuredIndex}
              />
            ))}
          </ThumbnailsWrapper>
      </ModalWrapper>
    </Overlay>
    }
 </>

  );
}
