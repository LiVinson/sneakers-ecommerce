import { useState } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatarImgSrc from "../../assets/images/image-avatar.png";
import { device } from "../../global-design/devices";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e4e9f2;

  @media ${device.tablet} {
    padding-top: 1.9rem;
    padding-bottom: 2.5rem;
  }

  @media ${device.mobileL} {
    padding: 1.9rem 2.4rem 2.5rem;
    border-bottom: none;
  }
`;
const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const MobileMenuIcon = styled.span`
  display: none;
  width: 1.6rem;
  height: 0.3rem;
  background-color: var(--dark-gray-blue);
  margin-right: 1.6rem;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 1.6rem;
    height: 0.3rem;
    background-color: var(--dark-gray-blue);
    display: inline-block;
    position: absolute;
  }

  &::before {
    top: -0.6rem;
  }

  &::after {
    top: 0.6rem;
  }

  @media ${device.tablet} {
    display: inline-block;
  }
`;

const MenuList = styled.ul`
  display: flex;
  margin-left: 5.6rem;
  list-style: none;
  font-size: 1.5rem;
  color: var(--dark-gray-blue);

  @media ${device.tablet} {
    display: none;
  }
`;

const MenuListItem = styled.li`
  position: relative;
  padding-top: 4.1rem;
  padding-bottom: 4.5rem;
  &:not(:last-of-type) {
    margin-right: 3.2rem;
  }
`;

const MenuListLink = styled.a`
  color: var(--dark-gray-blue);
  text-decoration: none;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    color: var(--dark-blue);
    outline: none;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.4rem;
      background-color: var(--orange);
    }
  }
`;
const CartSVGWrapper = styled.div`
  position: relative;
  margin-right: 4.6rem;

  @media ${device.tablet} {
    margin-right: 2.3rem;
  }
`;

const CartSVG = styled(SVG)`
  cursor: pointer;
  &:hover,
  &:focus,
  &:focus-within {
    outline: none;
    path {
      fill: black;
    }
  }
`;

const CartQuantityBubble = styled.span`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateY(50%);
  color: var(--white);
  background-color: var(--orange);
  font-size: 1rem;
  font-weight: var(--font-bold);
  height: 1.3rem;
  width: 1.9rem;
  text-align: center;
  border-radius: 0.65rem;
  display: inline-block;
`;

const Avatar = styled.img`
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  border-radius: 50%;
  &:hover,
  &:focus,
  &:focus-within {
    outline: none;
    border: solid 0.2rem var(--orange);
  }

  @media ${device.tablet} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export default function Navbar({
  displayCart,
  updateDisplayCart,
  totalQuantity,
  toggleMobileMenu,
}) {

  const handleClick = () => {
    updateDisplayCart(!displayCart);
  };

  return (
    <Nav>
      <WrapperLeft>
        <MobileMenuIcon onClick={toggleMobileMenu} />
        <SVG src={logo} />
        <MenuList>
          <MenuListItem>
            <MenuListLink href="#">Collections</MenuListLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListLink href="#">Men</MenuListLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListLink href="#">Women</MenuListLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListLink href="#">About</MenuListLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListLink href="#">Contact</MenuListLink>
          </MenuListItem>
        </MenuList>
      </WrapperLeft>
      <WrapperRight>
        <CartSVGWrapper>
          <CartSVG
            src={cart}
            onClick={handleClick}
            tabIndex={0}
            onKeyDown={(e) => e.key == "Enter" && handleClick()}
          />
          {totalQuantity > 0 && (
            <CartQuantityBubble>{totalQuantity}</CartQuantityBubble>
          )}
        </CartSVGWrapper>
        <Avatar src={avatarImgSrc} tabIndex={0} alt="user avatar"/>
      </WrapperRight>
    </Nav>
  );
}
