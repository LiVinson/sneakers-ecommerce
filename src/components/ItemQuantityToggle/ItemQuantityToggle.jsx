import {styled} from "styled-components";
import {ReactComponent as MinusSVG } from "../../assets/images/icon-minus.svg";
import {ReactComponent as PlusSVG } from "../../assets/images/icon-plus.svg";

const Wrapper = styled.div`
    display:inline-block;
    background-color: var(--light-gray-blue);
    border-radius: 1rem;
`

const Quantity = styled.span`
    color: var(--dark-blue);
    line-height:2rem;
    font-size:1.6rem;
    font-weight: var(--font-bold);
    // margin-left: 4.55rem;
    // margin-right: 4.55rem;
    padding-left: 2.7rem;
    padding-right:2.7rem;
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



export default function ItemQuantityToggle({className}) {

    const handleClick = () => {
        console.log("click");
    }
    return (
        <Wrapper className={className ? className: '' }>
            <QuantityButton onClick={handleClick}><MinusSVG /></QuantityButton>
            <Quantity>0</Quantity>
            <QuantityButton onClick={handleClick}><PlusSVG /></QuantityButton>
        </Wrapper>
    )
}