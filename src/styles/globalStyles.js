// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 16px;
        overflow-x: hidden;
        font-family: 'Ubuntu', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;