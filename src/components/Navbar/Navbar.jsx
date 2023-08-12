import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as CartSVG } from '../../assets/images/icon-cart.svg'
import avatarImgSrc from '../../assets/images/image-avatar.png'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 2.8rem;
    padding-bottom: 3.4rem;
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
    &:not(:last-of-type) {
        margin-right:3.2rem;
    }
`

const Avatar = styled.img`
    height: 5rem;
    width: 5rem;
`
const CartIcon = styled(CartSVG)`
    margin-right: 4.6rem;
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

export default function Navbar({displayCart, updateDisplayCart, totalQuantity}) {

    const handleClick = () => {
        updateDisplayCart(!displayCart);
    }
    return (
        <Nav>
            <WrapperLeft>
            <Logo />
            <MenuList>
                <MenuListItem>Collections</MenuListItem>
                <MenuListItem>Men</MenuListItem>
                <MenuListItem>Women</MenuListItem>
                <MenuListItem>About</MenuListItem>
                <MenuListItem>Contact</MenuListItem>
            </MenuList>
            </WrapperLeft>
            <WrapperRight>
                <CartIcon  onClick={handleClick}/>
                {totalQuantity > 0 && <CartQuantityBubble>{totalQuantity}</CartQuantityBubble>}
                <Avatar src={avatarImgSrc}/>
            </WrapperRight>
        </Nav>

    )

}