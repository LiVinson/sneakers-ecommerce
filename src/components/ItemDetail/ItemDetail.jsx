import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import products from "../../data/products/products";
import ItemPrice from "../ItemPrice/ItemPrice";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import ItemQuantityToggle from "../ItemQuantityToggle/ItemQuantityToggle";
import ItemDetailImages from "../ItemDetailImages/ItemDetailImages";
import ProductImageSlider from "../ProductImageSlider/ProductImageSlider";
import Modal from "../Modal/Modal";
import { device } from "../../global-design/devices";

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 101.5rem;

  @media ${device.tablet} {
    flex-direction: column;
    flex-wrap: initial;
    align-items: center;
    justify-content: initial;
    max-width: 45rem;
    margin: 0 auto;
  }
`;

const DetailContentWrapper = styled.div`
  padding-top: 6.2rem;
  margin-left: 12.5rem;
  max-width:44.5rem;

  @media ${device.laptop} {
    margin-left: 8rem;
  }

  @media ${device.tablet} {
    padding: 2.4rem 1.5rem 8.8rem;
    max-width: initial;
    margin-left: 0rem;
  }

  @media ${device.mobileL} {
    padding: 4rem 3rem 8.8rem;
  }

  @media ${device.mobileM} {
    padding: 2.4rem 2.4rem 8.8rem;
  }
`;

const Brand = styled.p`
  color: var(--orange);
  font-size: 1.3rem;
  font-weight: var(--font-bold);
  line-height: 1;
  margin-bottom: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  @media ${device.mobileM} {
    font-size: 1.2rem;
    letter-spacing: 0.185rem;
    margin-bottom: 1.9rem;
  }
`;

const ItemName = styled.h1`
  color: var(--dark-blue);
  font-size: 4.4rem;
  font-weight: var(--font-bold);
  line-height: 4.8rem;
  margin-bottom: 3.2rem;

  @media ${device.mobileM} {
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
  }
`;

const ItemDescription = styled.p`
  color: var(--dark-gray-blue);
  margin-bottom: 2.4rem;

  @media ${device.mobileM} {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

const ItemQuantity = styled(ItemQuantityToggle)`
  margin-right: 1.6rem;

  @media ${device.tablet} {
    margin-right: 0rem;
  }
`;

const QuantityCartWrapper = styled.div`
  margin-top: 3.2rem;
`;

const fetchItemById = (id) => {
  const item = products.shoes.find((product) => product.id == id);
  return item;
};

export default function ItemDetail({ addToCart, id = 0 }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [displayModal, setDisplayModal] = useState(false);
  const [featuredImageIndex, setFeaturedImageIndex] = useState(0);

  const imageContainerRef = useRef(null);

  useEffect(() => {
    const item = fetchItemById(id);
    setItem(item);
    setLoading(false);
  }, [id]);


  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  const handleDisplayModal = (imageIndex) => {
    if (!displayModal) {
      //If modal is closed and screen tablet or larger, open modal
      if (imageContainerRef.current.offsetWidth > 450) {
        setDisplayModal(true);
      }
    } 
      setFeaturedImageIndex(imageIndex);
  };

  //increments/decrements featured image index based on thumbnail click
  const changeFeaturedImageIndex = (changeType) => {
    let newIndex;
    if (changeType === "next") {
      newIndex =
        featuredImageIndex === item.images.length - 1
          ? 0
          : featuredImageIndex + 1;
    } else if (changeType === "previous") {
      newIndex =
        featuredImageIndex === 0
          ? item.images.length - 1
          : featuredImageIndex - 1;
    }
    setFeaturedImageIndex(newIndex);
  };

  return (
    <>
      {loading ? (
        <p>"Loading!"</p>
      ) : (
        <>
          <ItemDetailContainer ref={imageContainerRef}>
            <ItemDetailImages
              handleDisplayModal={handleDisplayModal}
              images={item.images}
              featuredImageIndex={featuredImageIndex}
              changeFeaturedImageIndex={changeFeaturedImageIndex}
            />
            <DetailContentWrapper>
              <Brand>{item.brand}</Brand>
              <ItemName>{item.name}</ItemName>
              <ItemDescription>{item.description}</ItemDescription>
              <ItemPrice price={item.price} saleAmount={item.saleAmount} />

              <QuantityCartWrapper>
                <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
                <AddToCartButton handleAddToCart={handleAddToCart} />
              </QuantityCartWrapper>
            </DetailContentWrapper>
          </ItemDetailContainer>
          <Modal show={displayModal}>
            <ProductImageSlider
              featuredImageIndex={featuredImageIndex}
              images={item.images}
              displayModal={displayModal}
              handleDisplayModal={handleDisplayModal}
              setDisplayModal={setDisplayModal}
              changeFeaturedImageIndex={changeFeaturedImageIndex}
            />
          </Modal>
        </>
      )}
    </>
  );
}
