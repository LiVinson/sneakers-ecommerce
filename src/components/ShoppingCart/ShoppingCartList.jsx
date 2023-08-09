import { styled } from "styled-components"

const Image = styled.img`
    border-radius: 1rem;   
`

function CartItem ({name, price, thumbNail, quantity}) {
    console.log(name);
    return (
        <div>
            <picture>
                <source srcSet={`./assets/images/${thumbNail.fileName}`}/>
                <Image src={`./assets/images/${thumbNail.fileName}`} width={50} height={50} alt={thumbNail.alt}/>
            </picture>
            <div>
                <p>{name}</p>
                <p>${(price).toFixed(2)} x {quantity} ${(price * quantity).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default function ShoppingCartList ({shoppingList}) {

return (
    <ul>
          {shoppingList.map(item => <CartItem key={item.itemId} name={item.itemName} price={item.itemPrice} thumbNail={item.itemThumbnail} quantity={item.itemQuantity}/>
        )}
    </ul>
  
)
}