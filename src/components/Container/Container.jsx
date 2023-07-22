// import React from "react"
// import "./Container.css"
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
`
export default function Container({children}) {

    return <Wrapper>
        {children}
    </Wrapper>
}