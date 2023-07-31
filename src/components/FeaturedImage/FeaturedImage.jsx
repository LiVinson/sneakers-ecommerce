import { styled } from "styled-components"

const Image = styled.img`
    border-radius:1.5rem;
`
export default function FeaturedImage({image}) {
    return (
        <picture>
            <source srcSet={`./assets/images/${image.fileName}`}/>
            <Image src={`./assets/images/${image.fileName}`} width={445} height={445} alt={image.alt} />
        </picture>
    )
}