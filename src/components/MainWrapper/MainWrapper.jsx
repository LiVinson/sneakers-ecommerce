import styled from 'styled-components'
import { device } from '../../global-design/devices'

const Wrapper = styled.main`
    padding: 9rem  4.75rem 0rem 4.75rem;

    @media ${device.mobileL} {
        padding:0;
    }

`

export default function MainWrapper({children}) {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}