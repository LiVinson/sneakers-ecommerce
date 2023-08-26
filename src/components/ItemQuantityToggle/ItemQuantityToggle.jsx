
import {styled} from "styled-components";
import { device } from "../../global-design/devices";
import SVG from 'react-inlinesvg';
import prevSVG from "../../assets/images/icon-minus.svg";
import nextSVG from "../../assets/images/icon-plus.svg";

const Wrapper = styled.div`
    display:inline-block;
    background-color: var(--light-gray-blue);
    border-radius: 1rem;

    @media ${device.tablet} {
        margin-bottom:2rem;
      }
    @media ${device.mobileL} {
        width: 100%;
        margin-bottom:2.4rem;

      }
`

const Previous = styled(SVG)`
`

const Next = styled(SVG)`

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

    @media ${device.mobileL} {
        width: calc(100% - 12rem);
    }
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

    &:hover {
        & > svg {
            path {
                fill: var(--orange-hover);
            }
        }
    }
     &:focus-within {
        outline: solid 2px var(--orange-hover);
        & > svg {
            path {
                fill: var(--orange-hover);
            }
        }
    }


    @media ${device.mobileL} {
        padding-left: 2.4rem;
        padding-right:2.4rem;

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
            <QuantityButton onClick={decrementQuantity}><Previous src={prevSVG}/></QuantityButton>
            <Quantity>{quantity}</Quantity>
            <QuantityButton onClick={incrementQuantity}><Next src={nextSVG}/></QuantityButton>
        </Wrapper>
    )
}