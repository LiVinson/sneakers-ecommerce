import {styled} from "styled-components";
import {ReactComponent as MinusSVG } from "../../assets/images/icon-minus.svg";
import {ReactComponent as PlusSVG } from "../../assets/images/icon-plus.svg";

const Wrapper = styled.div`
    // width: fit-content;
    // height: 5.6rem;
    display:inline-block;
    padding: 2.1rem 1.6rem 1.7rem 1.6rem;
    background-color: var(--light-gray-blue);
    border-radius: 1rem;
    
`

const Quantity = styled.span`
    color: var(--dark-blue);
    line-height:2rem;
    font-size:1.6rem;
    font-weight: var(--font-bold);
    margin-left: 4.55rem;
    margin-right: 4.55rem;
    vertical-align:middle;


`

const MinusIcon = styled(MinusSVG)`
    vertical-align:middle;
`

const PlusIcon = styled(PlusSVG)`
vertical-align:middle;

`



export default function ItemQuantityToggle({className}) {
    return (
        <Wrapper className={className ? className: '' }>
            <MinusIcon />
            <Quantity>0</Quantity>
            <PlusIcon />
        </Wrapper>
    )
}