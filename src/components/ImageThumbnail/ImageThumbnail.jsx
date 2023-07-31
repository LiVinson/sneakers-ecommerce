import { styled } from "styled-components"


const ImageWrapper = styled.div`
    position:relative;
    cursor: pointer;

    &:hover div::after { 
        visibility:visible;
    }
`
const Image = styled.img`
    border-radius: 1rem;   
`

const ActiveOverlay = styled.div`
    &::after {
        content: "";
        position: absolute;
        top: 0;
        width:88px;
        height:88px;
        display: block;
        background-color: rgba(255, 255, 255, 0.75);
        border: solid 2px rgba(255, 126, 27, 1);
        border-radius: 1rem;

    }
`

const Overlay = styled.div`
    &::after {
        content: "";
        position: absolute;
        top: 0;
        width:88px;
        height:88px;
        display: block;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 1rem;
        visibility:hidden

       
    }
`
export default function ImageThumbnail({image, active}) {

    const handleClick = () => {
        console.log("thumb clicked");
    }
    return(
        <ImageWrapper onClick={handleClick}>
            <picture>
                <source srcSet={`./assets/images/${image.fileName}`}/>
                <Image src={`./assets/images/${image.fileName}`} width={88} height={88} alt={image.alt} />
            </picture>
            {active ? <ActiveOverlay /> : <Overlay/>}
        </ImageWrapper>
    )
}