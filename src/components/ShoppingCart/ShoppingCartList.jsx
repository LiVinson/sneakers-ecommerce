import { styled } from 'styled-components'
import SVG  from 'react-inlinesvg'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import trashSVG from '../../assets/images/icon-delete.svg'

const Image = styled.img`
    margin-right: 1.6rem;
    border-radius: .4rem;   
`
const CartListWrapper = styled.ul`
    padding: 2.4rem 2.4rem 3.2rem;
`

const CartItemsWrapper = styled.div`
    display: flex;
    align-items:center;
    color: var(--dark-gray-blue);
    &:last-of-type {
        margin-bottom: 2.4rem;
    }
`

const Total = styled.span`
    font-weight: var(--font-bold);
    color: var(--dark-blue);
`

const DeleteBtn = styled(SVG)`
    margin-left: 1.5rem;
`

function CartItem ({name, price, thumbNail, quantity}) {
    return (
        <CartItemsWrapper>
            <picture>
                <source srcSet={`./assets/images/${thumbNail.fileName}`}/>
                <Image src={`./assets/images/${thumbNail.fileName}`} width={50} height={50} alt={thumbNail.alt}/>
            </picture>
            <div>
                <p>{name}</p>
                <p>${(price).toFixed(2)} x {quantity} <Total>${(price * quantity).toFixed(2)}</Total></p>
            </div>
            <DeleteBtn src={trashSVG}/>
        </CartItemsWrapper>
     
    )
}

export default function ShoppingCartList ({shoppingList}) {

return (
    <CartListWrapper>
          {shoppingList.map(item => <CartItem key={item.itemId} name={item.itemName} price={item.itemPrice} thumbNail={item.itemThumbnail} quantity={item.itemQuantity}/>
        )}
        
        <PrimaryButton width='100%'>
            Checkout
        </PrimaryButton>
    </CartListWrapper>
  
)
}