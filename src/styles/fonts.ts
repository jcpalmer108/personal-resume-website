import { createGlobalStyle } from "styled-components";
import GilroyBold from "./fonts/Gilroy-Bold.ttf";
import GilroyMedium from "./fonts/Gilroy-Medium.ttf";
import GilroyRegular from "./fonts/Gilroy-Regular.ttf";
import GilroyRegularItalic from "./fonts/Gilroy-RegularItalic.ttf";
import Butler from "./fonts/Butler.woff2";
import ButlerMedium from "./fonts/Butler-Medium.woff";


const FontStyles = createGlobalStyle`
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

`;

export default FontStyles;
