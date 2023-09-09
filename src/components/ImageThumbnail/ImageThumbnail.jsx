import { styled } from "styled-components"


const ImageWrapper = styled.div`
    position:relative;
    cursor: pointer;
    &:not(:last-child){
        margin-right:.5rem;
    }

    &:hover,
    &:focus,
    &:focus-within {
        outline:none;
        div::after { 
            visibility:visible;
        }
    }


    &.active:focus-within div::after {
        border: solid 3px var(--orange);
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
export default function ImageThumbnail({ image, imageIndex, alt, active, handleDisplayModal }) {

    console.log(image);
    return(
        <ImageWrapper 
            tabIndex={0}
            onClick={()=> { handleDisplayModal(imageIndex) }} 
            onKeyDown={(e)=> e.key=='Enter' && handleDisplayModal(imageIndex)}
            className={active ? "active" : ""} 
            >
            <picture>
                <source srcSet={`./assets/images/${image.thumbnail}`}/>
                <Image src={`./assets/images/${image.thumbnail}`} width={88} height={88} alt={image.alt} />
            </picture>
            {active ? <ActiveOverlay /> : <Overlay/>}
        </ImageWrapper>
    )
}