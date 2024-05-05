// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        background: transparent;  
        font-family: 'Poppins';  
    }
    body{
        background: rgb(30, 30, 30);
        color: white;
        overflow: hidden;
        overflow-y: scroll;
    }

  /* Ajoutez d'autres styles globaux ici */
`;

export default GlobalStyle;
