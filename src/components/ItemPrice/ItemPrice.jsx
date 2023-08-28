import { styled } from "styled-components";
import { device } from "../../global-design/devices";

const PriceContainer = styled.div`
  width: 17.3rem;

  @media ${device.mobileL} {
    width: initial;
    display: flex;
    justify-content: space-between;
  }
`;

const SalePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurrentPrice = styled.div`
  color: var(--dark-blue);
  display: inline-block;
  font-size: 2.8rem;
  font-weight: var(--font-bold);

  @media ${device.mobileL} {
    margin-right: 1.6rem;
  }
`;

const OriginalPrice = styled.div`
  color: var(--gray-blue);
  font-size: 1.6rem;
  font-weight: var(--font-bold);
  line-height: 2.6rem;
  margin-top: 1rem;
  text-decoration-line: line-through;
`;

const SaleAmount = styled.div`
  background-color: var(--pale-orange);
  border-radius: 0.6rem;
  color: var(--orange);
  display: inline-block;
  font-size: 1.6rem;
  font-weight: var(--font-bold);
  line-height: 1;
  padding: 0.7rem 0.8rem 0.4rem 0.8rem;


  @media ${device.mobileL} {
    margin-right: 1.6rem;
  }

`;
export default function ItemPrice({ price, saleAmount }) {
  return (
    <PriceContainer>
      {saleAmount ? (
        <>
          <SalePriceContainer>
            <CurrentPrice>${(price * saleAmount).toFixed(2)}</CurrentPrice>
            <SaleAmount>{saleAmount * 100}%</SaleAmount>
          </SalePriceContainer>

          <OriginalPrice>${price.toFixed(2)}</OriginalPrice>
        </>
      ) : (
        <div>${price}</div>
      )}
    </PriceContainer>
  );
}
