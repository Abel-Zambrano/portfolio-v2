import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&family=Roboto:wght@400;700&display=swap');

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
}

body{
    font-family: 'Roboto', sans-serif;
}

h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

h2{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}
`
export default GlobalStyles
