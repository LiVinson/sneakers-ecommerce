import { styled } from "styled-components";
import SVG from 'react-inlinesvg'
import FeaturedImage from "../FeaturedImage/FeaturedImage";
import ImageThumbnail from "../ImageThumbnail/ImageThumbnail";
import closeSVG from "../../assets/images/icon-close.svg";

const ThumbnailsWrapper = styled.div`
  width: 44.5rem;
  display: flex;
  justify-content: space-between;
  margin: 3.2rem auto 0 auto;
`;

const StyledCloseSVG = styled(SVG)`
  path {
    fill: var(--white);
  }
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: -4.4rem;
  right: 0;
  cursor: pointer;

  &:hover,
  &:focus,
  :focus-within {
    outline: none;
    path {
      fill: var(--orange);
    }
  }
`;

export default function ProductImageSlider({
  images,
  featuredImageIndex,
  handleDisplayModal,
  changeFeaturedImageIndex,
  setDisplayModal,
}) {
  return (
    <>
      <div>
        <StyledCloseSVG
          src={closeSVG}
          onClick={() => setDisplayModal(false)}
          onKeyDown={(e) => e.key == "Enter" && setDisplayModal(false)}
          tabIndex={0}
        />
        <FeaturedImage
          image={images[featuredImageIndex]}
          modal={true}
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
              tabIndex={0}
            />
          ))}
        </ThumbnailsWrapper>
      </div>
    </>
  );
}
