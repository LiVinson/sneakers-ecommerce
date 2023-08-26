import { styled } from 'styled-components'
import { device } from "../../global-design/devices";

const Button = styled.button`
    padding: 1.9rem 0rem 1.8rem;
    border-radius: 1rem;
    background: var(--orange);
    border:none;
    color: var(--white);
    font-size:1.6rem;
    font-weight: var(--font-bold);
    line-height:1;
    width: ${props => props.$width || '27.2rem'};
    cursor: pointer;

    &:hover {
        background-color: var(--orange-hover);
        
    }

       @media ${device.mobileL} {
        width: 100%;
        box-shadow: 0px 20px 50px -20px var(--orange);
        padding: 1.9rem 0rem 1.8rem;
      }

`




export default function PrimaryButton({children, handleButtonClick, width}) {


    return (
        <Button onClick={handleButtonClick} $width={width}>
            {children}
        </Button>
    )
}