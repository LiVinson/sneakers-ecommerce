import { styled } from 'styled-components'

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

`




export default function PrimaryButton({children, handleButtonClick, width}) {


    return (
        <Button onClick={handleButtonClick} $width={width}>
            {children}
        </Button>
    )
}