import styled from 'styled-components'
import { device } from "../../global-design/devices";

const Wrapper = styled.div`
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
    padding-bottom:13.2rem;
    // position: relative;
    
    @media ${device.mobileM} {
        padding-bottom: 0rem;
      }
    
`
export default function Container({children}) {

    return <Wrapper>
        {children}
    </Wrapper>
}