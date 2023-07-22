import styled from 'styled-components'


const Wrapper = styled.main`
    padding: 9rem  4.75rem 0rem 4.75rem;
`

export default function MainWrapper({children}) {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}