import { styled } from "styled-components"

const Image = styled.img`
    border-radius:1.5rem;
`
export default function ImageThumbnail({image}) {

    return(
        <picture>
            <source srcSet={`./assets/images/${image.fileName}`}/>
            <Image src={`./assets/images/${image.fileName}`} width={88} height={88} alt={image.alt} />
        </picture>
    )
}