import styled from "styled-components";
import { desktopBreakpoint, tabletBreakpoint } from "../variables";
import { WrapperProps } from "../../types/Details";

export const Wrapper = styled.div<WrapperProps>`
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: ${tabletBreakpoint}px) {
    padding-top: 55px;
    width: 100%;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-top: 35px;
    width: 100%;

    &:last-child {
      padding-bottom: ${(props) => (props.noBottom ? "0px" : "35px")};
    }
  }
`;

export const Label = styled.div`
  font-family: Gilroy-Bold;
  font-size: 15px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 22px;
  }
`;

export const Info = styled.p`
  font-family: Gilroy-Regular;
  font-size: 12px;
  margin: 0px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 16px;
  }
`;
