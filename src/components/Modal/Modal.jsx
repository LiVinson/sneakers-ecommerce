import { styled } from "styled-components";

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-color: RGBA(0, 0, 0, .75);
    z-index: 1000;
`

const ModalWrapper = styled.div`
  z-index:2000;
  position:absolute;
  top: 13.3rem;
  left: 50%;
  transform: translateX(-50%);
`;

export default function Modal({ show, children }) {
    return (
        <>
        {show && <Overlay>
            <ModalWrapper>
                {children}
            </ModalWrapper>
        </Overlay>}
        </>
   
    )
}