import { createGlobalStyle } from 'styled-components';
import GilroyBold from "./fonts/Gilroy-Bold.ttf";
import GilroyMedium from "./fonts/Gilroy-Medium.ttf";
import GilroyRegular from "./fonts/Gilroy-Regular.ttf";
import GilroyRegularItalic from "./fonts/Gilroy-RegularItalic.ttf";
import Butler from "./fonts/Butler.woff2";
import ButlerMedium from "./fonts/Butler-Medium.woff";
import { desktopBreakpoint } from './variables';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy-Bold';
    src: url(${GilroyBold}) format('truetype');
  }

  @font-face {
    font-family: 'Gilroy-Medium';
    src: url(${GilroyMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Gilroy-Regular';
    src: url(${GilroyRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Gilroy-RegularItalic';
    src: url(${GilroyRegularItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Butler-Regular';
    src: url(${Butler}) format('woff2');
  }

  @font-face {
    font-family: 'Butler-Medium';
    src: url(${ButlerMedium}) format('woff');
  }

  body {
    margin: 0;
    padding: 0;  
  }

  p {
    font-size: 12px;
    font-family: Gilroy-Regular;
    transition: all 1s ease;
  }

  h1 {
    font-size: 35px;
    font-family: Butler-Regular;
    font-weight: normal;
    margin: 0px;
    transition: all 1s ease;
  }

  h2 {
    font-size: 30px;
    font-family: Butler-Regular;
    font-weight: normal;
    margin: 0px;
    transition: all 1s ease;
  }

  h3 {
    font-size: 20px;
    font-family: Butler-Regular;
    font-weight: normal;
    margin: 0px;
    transition: all 1s ease;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    p {
      font-size: 16px;
      transition: all 1s ease;
    }

    h1 {
      font-size: 70px;
      transition: all 1s ease;
    }

    h2 {
      font-size: 55px;
      transition: all 1s ease;
    }

    h3 {
      font-size: 25px;
      transition: all 1s ease;
    }
  }


  `
 
export default GlobalStyle;
