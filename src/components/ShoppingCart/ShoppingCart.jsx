import {styled} from "styled-components";

const Cart = styled.div`
    width: 36rem;
    min-height: 25.6rem;
    position:fixed;
    right:8.9rem;
    top:9.4rem;
    z-index:1000;
    border-radius: 1rem;
    background: var(--white);
    box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.50);
`

const CartHeader = styled.p`
    color: var(--dark-blue);
    font-size: 1.6rem;
    font-weight: var(--font-bold);
    line-height: normal;
    border-bottom: solid 1px #E4E9F2;
    padding: 2.4rem 0 2.7rem 2.4rem; 
`

const EmptyCartText = styled.p`
    color: var(--dark-gray-blue);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.6rem; /* 162.5% */
    margin-top: 7.7rem;
`

export default function ShoppingCart() {
    
    return (
        <Cart>
            <CartHeader>Cart</CartHeader> 
            <EmptyCartText>Your cart is empty.</EmptyCartText>
        </Cart>
    )
}