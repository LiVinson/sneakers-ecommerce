import { styled, css } from "styled-components";
import { device } from "../../global-design/devices";
import prevArrow from "../../assets/images/icon-previous.svg";
import nextArrow from "../../assets/images/icon-next.svg";
import SVG from "react-inlinesvg";

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  border-radius: 1.5rem;
  max-width: ${(props) => (props.$modal ? "55rem" : "44.5rem")};
  height: auto;

  @media ${device.laptop} {
    max-width: ${(props) => (props.$modal ? "55rem" : "38rem")};
  }

  @media ${device.tablet} {
    max-width: ${(props) => (props.$modal ? "55rem" : "100%")};
    width: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media ${device.mobileL} {
    display: block;
    border-radius: 0;
    height: 30rem;
  }
`;

const SliderBtn = styled.span`
  background-color: white;
  border-radius: 50%;
  text-align: center;
  display: ${(props) => (props.$modal ? "inline-block" : "none")};
  width: 5.6rem;
  height: 5.6rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 500;
  cursor: pointer;
  ${(props) =>
    props.$left &&
    css`
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    !props.$left &&
    css`
      right: 0rem;
      transform: translate(50%, -50%);
    `}        

     &:hover, &:focus {
    svg {
      path {
        stroke: var(--orange);
      }
    }
  }

  @media ${device.tablet} {
    // display: inline-block;
    height: 4rem;
    width: 4rem;
    ${(props) =>
      props.$left &&
      css`
        left: 2.6rem;
      `}
    ${(props) =>
      !props.$left &&
      css`
        right: 2.6rem;
      `}
  }

  @media ${device.mobileL} {
    display: inline-block;
    height: 4rem;
    width: 4rem;
    transform: translate(0%, -50%);

    ${(props) =>
      props.$left &&
      css`
        left: 1.6rem;
      `}
    ${(props) =>
      !props.$left &&
      css`
        right: 1.6rem;
      `}
  }
`;

const SliderBtnSVG = styled(SVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.mobileL} {
    path {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export default function FeaturedImage({
  image,
  modal,
  changeFeaturedImageIndex,
}) {
  return (
    <ImageWrapper>
      <SliderBtn
        $left={true}
        $modal={modal}
        tabIndex={0}
        onClick={() => {
          changeFeaturedImageIndex("previous");
        }}
        onKeyDown={(e) =>
          e.key == "Enter" && changeFeaturedImageIndex("previous")
        }
      >
        <SliderBtnSVG
          src={prevArrow}
          height="16"
          width="10"
          viewBox="0 0 12 18"
        />
      </SliderBtn>
      <picture>
        <source srcSet={`./assets/images/${image.featured}`} />
        <Image
          src={`./assets/images/${image.featured}`}
          $modal={modal}
          alt={image.alt}
        />
      </picture>
      <SliderBtn
        $modal={modal}
        tabIndex={0}
        onClick={() => {
          changeFeaturedImageIndex("next");
        }}
        onKeyDown={(e) => e.key == "Enter" && changeFeaturedImageIndex("next")}
      >
        <SliderBtnSVG
          src={nextArrow}
          height="16"
          width="10"
          viewBox="0 0 12 18"
        />
      </SliderBtn>
    </ImageWrapper>
  );
}
