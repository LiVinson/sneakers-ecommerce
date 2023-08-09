
import {styled} from "styled-components";
import {ReactComponent as MinusSVG } from "../../assets/images/icon-minus.svg";
import {ReactComponent as PlusSVG } from "../../assets/images/icon-plus.svg";

const Wrapper = styled.div`
    display:inline-block;
    background-color: var(--light-gray-blue);
    border-radius: 1rem;
`

const Quantity = styled.span`
    display:inline-block;
    color: var(--dark-blue);
    line-height:2rem;
    font-size:1.6rem;
    font-weight: var(--font-bold);
    text-align: center;
    width:6.5rem;
    vertical-align:middle;


`

const QuantityButton = styled.button`
    background-color: var(--light-gray-blue);
    border: none;
    cursor: pointer;
    height: 5.6rem;
    padding-left: 1.7rem;
    padding-right:1.7rem;

    & > * {
        vertical-align:middle;
    }
`



export default function ItemQuantityToggle({ className, quantity, setQuantity }) {



    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const incrementQuantity = () => {

        if(quantity < 9) {
            setQuantity(quantity + 1);
        }
    }


    return (
        <Wrapper className={className ? className: '' }>
            <QuantityButton onClick={decrementQuantity}><MinusSVG /></QuantityButton>
            <Quantity>{quantity}</Quantity>
            <QuantityButton onClick={incrementQuantity}><PlusSVG /></QuantityButton>
        </Wrapper>
    )
}