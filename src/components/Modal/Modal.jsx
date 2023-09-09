import { styled } from "styled-components";
import { device } from "../../global-design/devices";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: RGBA(0, 0, 0, 0.75);
  z-index: 1000;

  @media ${device.tablet} {
    display: none;
  }
`;

const ModalWrapper = styled.div`
  z-index: 2000;
  position: absolute;
  top: 13.3rem;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.tablet} {
    display: none;
  }
`;

export default function Modal({ show, children }) {
  return (
    <>
      {show && (
        <Overlay>
          <ModalWrapper>{children}</ModalWrapper>
        </Overlay>
      )}
    </>
  );
}
