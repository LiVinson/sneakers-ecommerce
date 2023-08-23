import { styled } from 'styled-components'
import { device } from "../../global-design/devices";

const Button = styled.button`
    padding: 1.9rem 7.6rem 1.8rem 7.7rem;
    border-radius: 1rem;
    background: var(--orange);
    border:none;
    color: var(--white);
    font-size:1.6rem;
    font-weight: var(--font-bold);
    line-height:1;
    width: ${props => props.$width || 'auto'};
    cursor: pointer;

       width:6.5rem;

       @media ${device.mobileM} {
        width: 100%;
        box-shadow: 0px 20px 50px -20px var(--orange);

     
      }

`




export default function PrimaryButton({children, handleButtonClick, width}) {


    return (
        <Button onClick={handleButtonClick} $width={width}>
            {children}
        </Button>
    )
}