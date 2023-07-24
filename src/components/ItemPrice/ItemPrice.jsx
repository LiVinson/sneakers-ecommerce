import { styled } from "styled-components";

export default function ItemPrice({price, saleAmount}) {


    return (
        <div>
            {saleAmount ? 
            <div>
                <div>${price * saleAmount}</div>
                <div>{saleAmount * 100}%</div>
                <div>${price}</div>

            </div>
                :
                <div>${price}</div>

                }

        </div>
    )
}