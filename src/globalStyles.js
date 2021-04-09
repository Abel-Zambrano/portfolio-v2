import { createGlobalStyle } from "styled-components"

// media queries sizes: 1000px, 490px

const GlobalStyles = createGlobalStyle`

:root {
    --color-primary: #00cccc;
    --color-primary-light:  #00ffff;
    --color-primary-dark:  #009999;
    --color-jetblack:  #000000;
    --color-gray-dark:    #4d4d4d;
    --color-gray-light: #f2f2f2;
    --color-white:  #ffffff;
    --color-pink:   #f565f6;
    --color-linkedin: #0072b1;
    --color-green: #4caf50;

    --shadow-primary: rgba(0, 153, 153, 0.6);

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
    letter-spacing: 0.1rem;
    scroll-behavior: smooth;
}

body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
`
export default GlobalStyles
