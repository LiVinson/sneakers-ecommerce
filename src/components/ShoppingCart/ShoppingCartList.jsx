import { styled } from "styled-components";
import SVG from "react-inlinesvg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import trashSVG from "../../assets/images/icon-delete.svg";

const Image = styled.img`
  margin-right: 1.6rem;
  border-radius: 0.4rem;
`;
const CartListWrapper = styled.ul`
  padding: 2.4rem 2.4rem 3.2rem;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-gray-blue);
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 2.4rem;
  }
`;

const Total = styled.span`
  font-weight: var(--font-bold);
  color: var(--dark-blue);
`;

const DeleteBtn = styled(SVG)`
  margin-left: 1.5rem;
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

function CartItem({ id, name, price, thumbNail, quantity, removeFromCart }) {
  return (
    <CartItemsWrapper>
      <picture>
        <source srcSet={`./assets/images/${thumbNail}`} />
        <Image
          src={`./assets/images/${thumbNail}`}
          width={50}
          height={50}
          alt={thumbNail.alt}
        />
      </picture>
      <div>
        <p>{name}</p>
        <p>
          ${price.toFixed(2)} x {quantity}{" "}
          <Total>${(price * quantity).toFixed(2)}</Total>
        </p>
      </div>
      <DeleteBtn
        tabIndex={0}
        src={trashSVG}
        onClick={() => removeFromCart(id)}
      />
    </CartItemsWrapper>
  );
}

export default function ShoppingCartList({ shoppingList, removeFromCart }) {
  return (
    <CartListWrapper>
      {shoppingList.map((item) => (
        <CartItem
          id={item.itemId}
          key={item.itemId}
          name={item.itemName}
          price={item.itemPrice}
          thumbNail={item.itemThumbnail}
          quantity={item.itemQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <PrimaryButton
        width="100%"
        onClick={removeFromCart}
        onKeyDown={(e) => e.key == "Enter" && removeFromCart()}
      >
        Checkout
      </PrimaryButton>
    </CartListWrapper>
  );
}
