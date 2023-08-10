import { styled } from "styled-components"

const Image = styled.img`
    border-radius:1.5rem;
`
export default function FeaturedImage({image}) {
    console.log(image);
    return (
        <picture>
            <source srcSet={`./assets/images/${image.featured}`}/>
            <Image src={`./assets/images/${image.featured}`} width={445} height={445} alt={image.alt} />
        </picture>
    )
}