

export default function FeaturedImage({image}) {
    console.log(image)
    return (
        <picture>
            <source srcset={`./assets/images/${image.fileName}`}/>
            <img src={`./assets/images/${image.fileName}`} width={445} height={445} alt={image.alt}/>
        </picture>
    )
}