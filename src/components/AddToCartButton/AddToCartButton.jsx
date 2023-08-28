import { styled } from "styled-components";
import SVG from "react-inlinesvg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import whiteCart from "../../assets/images/icon-cart-white.svg";

const ShoppingCartSVG = styled(SVG)`
  margin-right: 1.55rem;
`;

export default function AddToCartButton({ handleAddToCart }) {
  return (
    <PrimaryButton handleButtonClick={handleAddToCart}>
      <ShoppingCartSVG src={whiteCart} />
      Add to cart
    </PrimaryButton>
  );
}
