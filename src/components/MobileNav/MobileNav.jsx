import { styled } from 'styled-components';
import SVG from 'react-inlinesvg';
import { device } from '../../global-design/devices'
import closeMenu from '../../assets/images/icon-close.svg'


const NavWrapper = styled.div`

    position:fixed;
    left:0;
    height:100%;
    width:25rem;
    z-index:2000;
    background-color:var(--white);
`

const CloseNavIcon = styled(SVG)`
    
fill: var(--dark-gray-blue);
position:absolute;
    width:13.44px;
    height:13.44px;
    top:2.48rem;
    left:2.53rem;
    cursor:pointer;
`

const MenuList = styled.ul`
    display: flex;
    flex-direction:column;
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
export default function MobileNav({ displayMobile, toggleMobileMenu }) {
    console.log('displayMobile: ', displayMobile)
    return (
        displayMobile ? (
            <NavWrapper>
                <CloseNavIcon src={closeMenu} onClick={toggleMobileMenu} />
            <MenuList>
                <MenuListItem><MenuListLink href="#">Collections</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">Men</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">Women</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">About</MenuListLink></MenuListItem>
                <MenuListItem><MenuListLink href="#">Contact</MenuListLink></MenuListItem>
            </MenuList>
        </NavWrapper>) : null

    )
}