import { createGlobalStyle } from "styled-components";
import GilroyBold from "./fonts/Gilroy-Bold.ttf";
import GilroyMedium from "./fonts/Gilroy-Medium.ttf";
import GilroyRegular from "./fonts/Gilroy-Regular.ttf";
import GilroyRegularItalic from "./fonts/Gilroy-RegularItalic.ttf";
import Butler from "./fonts/Butler.woff2";
import ButlerMedium from "./fonts/Butler-Medium.woff";
import { desktopBreakpoint, tabletBreakpoint } from "./variables";

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

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;  
  }

  p {
    font-size: 12px;
    font-family: Gilroy-Regular;
    line-height: 27px;
  }

  h1 {
    font-size: 30px;
    font-family: Butler-Regular;
    font-weight: normal;
    margin: 0px;

  }

  h2 {
    font-size: 30px;
    font-family: Butler-Regular;
    font-weight: normal;
    margin: 0px;
  }

  h3 {
    font-size: 20px;
    font-family: Butler-Regular;
    font-weight: normal;
    margin: 0px;
  }

  h4 {
    font-size: 16px;
    font-family: Gilroy-Bold;
    font-weight: normal;
    margin: 0px;
    letter-spacing: 0.5px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    p {
      font-size: 14px;
    }

    h1 {
      font-size: 45px;
    }

    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 25px;
    }

    h4 {
      font-size: 20px;
    }
  }


  @media (min-width: ${desktopBreakpoint}px) {
    p {
      font-size: 16px;
    }

    h1 {
      font-size: 60px;
    }

    h2 {
      font-size: 55px;
    }

    h4 {
      font-size: 22px;
    }
  }


  `;

export default GlobalStyle;
