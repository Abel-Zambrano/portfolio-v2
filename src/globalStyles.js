import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700&display=swap');

:root {
    --color-primary: #00cccc;
    --color-primary-light:  #00ffff;
    --color-primary-dark:  #009999;
    --color-jetblack:  #000000;
    --color-gray-dark:  #262626;
    --color-gray-light:  #404040;
    --color-white:  #ffffff;
    --color-pink:   #f565f6;
}

*{
    margin: 0;
    padding: 0;
}

*::before,
*::after{
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
    letter-spacing: 0.1rem
}

body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

/* h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h2{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
} */

/* p{
    font-family: 'Roboto Mono', monospace;
} */
`
export default GlobalStyles
