import { styled } from "styled-components";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";




// const ModalWrapper = styled.div`
//   z-index:1000;
//   position:absolute;
//   width: 55rem;
//   left: calc(50% - 22.5rem)
// `;

const ThumbnailsWrapper = styled.div`
  width:44.5rem;
  display: flex;
  justify-content: space-between;
  margin: 3.2rem auto 0 auto
  // margin-top: 3.2rem;
`;



export default function ProductImageSlider({ images, featuredImageIndex }) {
    
  
  return (
      <>
        <div>
          <FeaturedImage image={images[featuredImageIndex]} modal={true} />
          <ThumbnailsWrapper>
            {images.map((image, index) => (
              <ImageThumbnail
                imageIndex={index}
                // handleDisplayModal={handleDisplayModal} 
                key={index} 
                image={image} 
                active={index == featuredImageIndex}  

              //   active={index == featuredIndex}
              />
            ))}
          </ThumbnailsWrapper>
      </div>
   
    
 </>

  );
}
