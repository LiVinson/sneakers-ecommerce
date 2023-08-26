import { styled } from "styled-components";
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";
import { ReactComponent as CloseSVG } from "../../assets/images/icon-close.svg"



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

const StyledCloseSVG = styled(CloseSVG)`
  path {
    fill: var(--white);
  }
  position:absolute;
  width:2rem;
  height:2rem;
  top:-4.4rem;
  right:0;
  cursor:pointer;

  &:hover {
    path {
      fill: var(--orange);
    }
  }
`



export default function ProductImageSlider({ images, featuredImageIndex, handleDisplayModal, changeFeaturedImageIndex, setDisplayModal }) {
    
  return (
      <>
        <div>
          <StyledCloseSVG onClick={() => setDisplayModal(false)}/>
          <FeaturedImage image={images[featuredImageIndex]} modal={true} changeFeaturedImageIndex={changeFeaturedImageIndex} />
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
      </div>
   
    
 </>

  );
}
