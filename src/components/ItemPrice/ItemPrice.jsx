import { styled } from "styled-components";

const PriceContainer = styled.div`
    width: 17.3rem;
    // border: solid 1px red;
`

const SalePriceContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const CurrentPrice = styled.div`
    color: var(--dark-blue);
    display: inline-block;
    font-size: 2.8rem;
    font-weight: var(--font-bold);
    
`

const OriginalPrice = styled.div`
    color: var(--gray-blue);
    font-size: 1.6rem;
    font-weight: var(--font-bold);
    line-height: 2.6rem;
    margin-top:1rem;
    text-decoration-line: line-through;
`

const SaleAmount = styled.div`
    background-color: var(--pale-orange);
    border-radius:.6rem;
    color: var(--orange);
    display: inline-block;

    font-size: 1.6rem;
    font-weight: var(--font-bold);
    line-height: 1;
    padding: .7rem .8rem .4rem .8rem;
`
export default function ItemPrice({price, saleAmount}) {


    return (
        <PriceContainer>
            {saleAmount ? 
                <>
                <SalePriceContainer>
                    <CurrentPrice>${(price * saleAmount).toFixed(2)}</CurrentPrice>
                    <SaleAmount>{saleAmount * 100}%</SaleAmount>
                </SalePriceContainer>
          
                <OriginalPrice>${(price).toFixed(2)}</OriginalPrice>
                </>
                :
                <div>${price}</div>

                }

        </PriceContainer>
    )
}