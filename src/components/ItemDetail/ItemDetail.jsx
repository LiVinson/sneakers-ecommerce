import styled from 'styled-components'
// import featuredImgSrc from '../../assets/images/image-product-1.jpg'
import FeaturedImage from "../FeaturedImage/FeaturedImage"
import products from '../../data/products/products';


const thumbnailImgs = [];
const ItemDetailWrapper = styled.div``


export default function ItemDetail({id=0, category='shoes'}) {

    const item = (products[category]).find(product => product.id == id)

    console.log(item.featuredImages);
    return (
        <ItemDetailWrapper>
            <FeaturedImage image={(item.featuredImages)[0]}/>        
            {/* <ImageThumbnails images={''}/> */}
        </ItemDetailWrapper>
    )
}