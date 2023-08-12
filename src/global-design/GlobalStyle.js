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
        --orange: #FF7E1B; //hsl(26, 100%, 55%);
        --pale-orange: #FFEEE2; //hsl(25, 100%, 94%);

        --dark-blue: #1D2026; //hsl(220, 13%, 13%);
        --dark-gray-blue: #69707D; //hsl(219, 9%, 45%)

        --gray-blue: #B6BCC8; //hsl(220, 14%, 75%);
        --light-gray-blue: #F6F8FD; //hsl(223, 64%, 98%)
        
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);
        --font-regular: 400;
        --font-bold: 700;


    }

    body {
        box-sizing:border-box;
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        font-weight: var(--font-regular);   
        background-color:var(--white);  
        position:relative;
    }

    p, li {
        line-height: 2.6rem;  
    }

    picture {
        display:inline-block;
        line-height:0;
    }
`

export default GlobalStyle;