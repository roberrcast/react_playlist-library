import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
*, *::before, *::after {
box-sizing: border-box;
margin: 0;
padding: 0;
}

html {
font-size: 16px;
}

body {
background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.mainFont};
font-family: ${({ theme }) => theme.fonts.primary};
font-weight: ${({ theme }) => theme.fonts.weights.global};
-webkit-font-smoothing: antialised;
-moz-osx-font-smoothing: grayscaled;
}
}
`;

export default GlobalStyle;
