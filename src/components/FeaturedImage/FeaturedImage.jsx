import { styled } from "styled-components"
import { ReactComponent as BeforeSVG}  from "../../assets/images/icon-previous.svg";
import { ReactComponent as AfterSVG}  from "../../assets/images/icon-next.svg";

const Image = styled.img`
    border-radius:1.5rem;
    max-width:100%;
    width: ${(props) => props.modal ? "55rem" : "45rem"};
    height: auto;

`

const SliderToggleButton = styled.span`
    width: ${(props) => props.modal ? "55rem" : "45rem"};
    height: ${(props) => props.modal ? "55rem" : "45rem"};
    background-color:white;
    border-radius: 50%;
    text-align:center;
    display:inline-block;
    width:5.6rem; 
    height:5.6rem;
    position:absolute;
    top: 27.5rem;
    transform: translate(-50%, -50%);
    z-indez:1500;
    cursor: pointer;
    & > svg {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }

`

    

export default function FeaturedImage({image, modal, changeFeaturedImageIndex}) {
    return (
        <>
        {modal && <SliderToggleButton onClick={()=>{ changeFeaturedImageIndex("previous")}}>
            <BeforeSVG />
        </SliderToggleButton>}
        <picture>
            <source srcSet={`./assets/images/${image.featured}`}/>
            <Image src={`./assets/images/${image.featured}`} modal={modal} alt={image.alt} />
        </picture>
        {modal && <SliderToggleButton onClick={()=>{ changeFeaturedImageIndex("next")}}>
            <AfterSVG />
        </SliderToggleButton>}
        </>
    )
}