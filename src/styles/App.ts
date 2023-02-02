import styled from "styled-components";
import { mobileBreakpoint, off_black } from "./variables";

export const Wrapper = styled.section`
  width: calc(100% - 1px);
  font-family: Gilroy-Regular;
  min-width: ${mobileBreakpoint}px;
`;

export const LandingWrapper = styled.div`
  background: rgb(255, 209, 184);
  background: -moz-linear-gradient(
    0deg,
    rgba(255, 209, 184, 1) 0%,
    rgba(255, 237, 227, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(255, 209, 184, 1) 0%,
    rgba(255, 237, 227, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(255, 209, 184, 1) 0%,
    rgba(255, 237, 227, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffd1b8",endColorstr="#ffede3",GradientType=1);
`;

export const FooterWrapper = styled.div`
  background: ${off_black};
`;
