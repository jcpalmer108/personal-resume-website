import styled from "styled-components";
import { desktopBreakpoint, contentWidth } from "../variables";


export const Wrapper = styled.div`
  max-width: ${contentWidth}px;
  background: pink;
  margin: auto;
`

export const Header = styled.div`
  width: fit-content;
  padding-bottom: 10px;
  padding-top: 30px;

  @media (min-width: ${desktopBreakpoint}) {
    padding-top: 50px;
  }
`

export const Label = styled.div`
  height: 12px;
  width: fit-content;
  column-gap: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  transition: all ease 1s;
  padding-left: 20px;
  padding-bottom: 0px;
  padding-top: 30px;

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 16px;
    height: 16px;
    transform: rotate(-90deg) translate(0px, 100%);
    transform-origin: bottom left;
    transition: all ease-in-out 1s;
    padding-bottom: calc(100% - 16px);
    padding-left: 0px;
  }
`;

export const Line = styled.img`
  width: 25px;
`
export const Title = styled.span`
  font-height: 12px;
`
