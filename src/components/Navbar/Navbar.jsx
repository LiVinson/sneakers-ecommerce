import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg'
import avatarImgSrc from '../../assets/images/image-avatar.png'
import SVG from 'react-inlinesvg';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #E4E9F2;
`
const WrapperLeft = styled.div`
    display:flex;
    align-items:center;
`
const WrapperRight=styled.div`
    display:flex;
    align-items:center;
    position:relative;
`

const MenuList = styled.ul`
    display: flex;
    margin-left:5.6rem;
    list-style: none;
    font-size:1.5rem;
    color: var(--dark-gray-blue);
`

const MenuListItem = styled.li`
    position:relative;
    padding-top: 4.1rem;
    padding-bottom: 4.5rem;
    &:not(:last-of-type) {
        margin-right:3.2rem;
    }

 
    
`

const MenuListLink = styled.a`
    color: var(--dark-gray-blue);
    text-decoration:none;

    &:hover {
        color: var(--dark-blue);

        &::after {
            content:"";
            position:absolute;
            bottom: 0;
            left:0;
            width: 100%;
            height: .4rem;
            background-color: var(--orange);
        }
    
    }

`

const CartSVG = styled(SVG)`
    margin-right: 4.6rem;
    cursor:pointer;
    &:hover {
        path {
            fill: black;
        }
    }
`


const CartQuantityBubble = styled.span`
    position:absolute;
    top: 1rem;
    left: 1rem;
    color: var(--white);
    background-color: var(--orange);
    font-size: 1rem;
    font-weight: var(--font-bold);
    height: 1.3rem;
    width: 1.9rem;
    text-align:center;
    border-radius:.65rem;
    `
const Avatar = styled.img`
    height: 5rem;
    width: 5rem;
    cursor:pointer;
    border-radius: 50%;
    &:hover {
        border: solid .2rem var(--orange);
    }

`


export default function Navbar({displayCart, updateDisplayCart, totalQuantity}) {

    const handleClick = () => {
        updateDisplayCart(!displayCart);
    }
    return (
        <Nav>
            <WrapperLeft>
            <SVG src={logo}/>
            <MenuList>
                <MenuListItem><MenuListLink href="#">Collections</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">Men</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">Women</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">About</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">Contact</MenuListLink></MenuListItem>
            </MenuList>
            </WrapperLeft>
            <WrapperRight>
                <CartSVG src={cart}  onClick={handleClick}/>
                {totalQuantity > 0 && <CartQuantityBubble>{totalQuantity}</CartQuantityBubble>}
                <Avatar src={avatarImgSrc}/>
            </WrapperRight>
        </Nav>

    )

}