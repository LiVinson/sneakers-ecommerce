import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }

    html {
        //Defines 1 rem = 10px (10px/16px)
        font-size: 62.5% ;
        --orange: hsl(26, 100%, 55%);
        --pale-orange: hsl(25, 100%, 94%);
        --dark-blue: hsl(220, 13%, 13%);
        --dark-gray-blue:#69707D; //hsl(219, 9%, 45%)
        --gray-blue: hsl(220, 14%, 75%);
        --light-gray-blue: #F2F2F2 //hsl(223, 64%, 98%)
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);


    }

    body {
        box-sizing:border-box;
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height:2.6rem;     
        background-color:var(--light-gray-blue);  
    }
`

export default GlobalStyle;