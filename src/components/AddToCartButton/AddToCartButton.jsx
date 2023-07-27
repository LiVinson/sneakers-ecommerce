import { styled } from 'styled-components'
import { ReactComponent as WhiteCartSVG } from '../../assets/images/icon-cart-white.svg'

const Button = styled.button`
    padding:1.9rem 7.6rem 1.8rem 7.7rem;
    border-radius: 1rem;
    background: var(--orange);
    // box-shadow: 0px 20px 50px -20px #FF7E1B;
    border:none;
    color: var(--white);
    font-size:1.6rem;
    font-weight: var(--font-bold);
    line-height:1;

`

const CartIcon = styled(WhiteCartSVG)`
    margin-right: 1.55rem;
`


export default function AddToCartButton() {

    return (
        <Button>
            <CartIcon/> 
            Add to cart
        </Button>
    )
}