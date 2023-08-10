import { styled } from "styled-components";

// const Overlay = styled.div`
// position: fixed;
// width: 100%;
// top: 0;
// left: 0;
// height: 100%;
// border: solid 1px red;
// background-color: gray;
// opacity: .4;
// z-index: 10000;
// `



export default function ModalOverlay(modalOpen=true) {
    return (
        <>
        
        {modalOpen && <Overlay />}
        </>
    )
}