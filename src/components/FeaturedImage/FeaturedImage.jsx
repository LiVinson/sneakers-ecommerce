import { styled, css } from "styled-components"
import { device } from '../../global-design/devices';
import prevArrow  from "../../assets/images/icon-previous.svg";
import nextArrow  from "../../assets/images/icon-next.svg";
import SVG from 'react-inlinesvg'


const ImageWrapper = styled.div`
    position: relative;
`

const Image = styled.img`
    border-radius:1.5rem;
    max-width:100%;
    width: ${(props) => props.modal ? "55rem" : "45rem"};
    height: auto;

    @media ${device.tablet} {
        width: 100%;
        object-fit: cover;
        object-position: top;
    }

    @media ${device.mobileL} {
        display:block;
        border-radius:0;
        height: 30rem;
        // width: 100%;
        // object-fit: cover;
        // object-position: top;
    }

    @media ${device.mobileM} {
        // display:block;
        // border-radius:0;
        // height: 30rem;
        // object-fit: cover;
        // object-position: top;
    }


`
const SliderBtnSVG = styled(SVG)`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    @media ${device.mobileL} {
        path {
            width: 4rem;
            height:4rem;
          }
    }
`

const SliderBtn = styled.span`
    background-color:white;
    border-radius: 50%;
    text-align:center;
    display: ${props => props.$modal ? 'inline-block' : 'none' };
    width:5.6rem; 
    height:5.6rem;
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index:500;
    cursor: pointer;

    @media ${device.mobileL} {
        display: inline-block;
        height:4rem;
        width:4rem;
        ${props => props.$left && css`
            left:1.6rem;
        `}
        ${props => !props.$left && css`
            right:1.6rem;
        `}
    }
`

    

export default function FeaturedImage({image, modal, changeFeaturedImageIndex}) {
    return (
        <ImageWrapper>
            <SliderBtn $modal={modal} $left={true} onClick={()=>{ changeFeaturedImageIndex("previous")}}>
                <SliderBtnSVG src={prevArrow} height="16" width="10" viewBox="0 0 12 18"/>
            </SliderBtn>
            <picture>
                <source srcSet={`./assets/images/${image.featured}`}/>
                <Image src={`./assets/images/${image.featured}`} modal={modal} alt={image.alt} />
            </picture>
            <SliderBtn $modal={modal} onClick={()=>{ changeFeaturedImageIndex("next")}}>
                <SliderBtnSVG src={nextArrow} height="16" width="10" viewBox="0 0 12 18"/>
            </SliderBtn>
        </ImageWrapper>
    )
}