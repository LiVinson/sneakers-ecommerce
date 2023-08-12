import { styled } from "styled-components"
import { ReactComponent as BeforeSVG}  from "../../assets/images/icon-previous.svg";
import { ReactComponent as AfterSVG}  from "../../assets/images/icon-next.svg";

const Image = styled.img`
    border-radius:1.5rem;
    width: ${(props) => props.modal ? "55rem" : "45rem"};
    height: ${(props) => props.modal ? "55rem" : "45rem"};

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

    & > svg {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }

`

    

export default function FeaturedImage({image, modal}) {
    return (
        <>
        {modal && <SliderToggleButton>
            <BeforeSVG />
        </SliderToggleButton>}
        <picture>
            <source srcSet={`./assets/images/${image.featured}`}/>
            <Image src={`./assets/images/${image.featured}`} modal={modal} alt={image.alt} />
        </picture>
        {modal && <SliderToggleButton>
            <AfterSVG />
        </SliderToggleButton>}
        </>
    )
}