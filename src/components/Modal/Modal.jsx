import { styled } from "styled-components";

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    // border: solid 1px red;
    background-color: RGBA(0, 0, 0, .75);
    z-index: 1000;
`

const ModalWrapper = styled.div`
  z-index:2000;
  position:absolute;
  top: 8.9rem;
  left: calc(50% - 22.5rem);
//   border: solid 1px green;
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