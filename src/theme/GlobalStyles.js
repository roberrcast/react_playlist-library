import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 16px;
    height: 100%;
}

body {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryFont};
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weights.global};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyle;
