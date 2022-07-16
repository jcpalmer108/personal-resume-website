import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Gilroy-Regular;
    src: url('@/fonts/Gilroy-Regular.ttf'),
  }

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Gilroy-Regular';
  }
  `
 
export default GlobalStyle;
