import styled from "styled-components";
import { desktopBreakpoint, silver_polish } from "../variables";
import { SeparatingLineProps as LineProps } from "../../types/SeparatingLine";

export const Line = styled.hr<LineProps>`
  width: calc(100% - 2px);
  border-color: ${(props) => {
    if (props.always && props.light) {
      return "white";
    } else if (props.always) {
      return silver_polish;
    } else {
      return "transparent";
    }
  }};
  border-width: ${(props) => (props.thin ? 0.5 : 1)}px;
  border-block-start: none;
  margin: 0px;

  @media (min-width: ${desktopBreakpoint}px) {
    border-color: ${(props) => (props.light ? "white" : silver_polish)};
    border-width: ${(props) => (props.thin ? 0.5 : 1)}px;
    position: absolute;
    left: 0px;
    margin: 0px;
  }
`;
