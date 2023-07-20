import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/images/icon-cart.svg'
import avatarImgSrc from '../../assets/images/image-avatar.png'

import './Navbar.css';

export default function Navbar() {

    return (
        <nav class='navbar'>
            <div class='left-container'>
            <Logo />
            <ul class='menu'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
            <div class='menu-icons'>
                <CartIcon/>
                <img src={avatarImgSrc}/>
            </div>
        </nav>

    )

}