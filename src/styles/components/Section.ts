import styled from "styled-components";
import { desktopBreakpoint, contentWidth } from "../variables";

type WrapperProps = {
  light?: boolean,
  thin? : boolean
}

type HeaderProps = {
  center?: boolean,
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: ${contentWidth}px;
  background: pink;
  margin: auto;
  border: solid;
  border-color: ${props => props.light ? "white" : "black"};
  border-width: ${props => props.thin ? 0.5 : 1}px;
`

export const Header = styled.div<HeaderProps>`
  width: fit-content;
  padding-bottom: 10px;
  padding-top: 30px;
  margin: ${props => props.center ? "auto" : "0px"};
  transition: all ease 1s;

  @media (min-width: ${desktopBreakpoint}) {
    padding-top: 50px;
    transition: all ease 1s;
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
    height: 16px;
    transform: rotate(-90deg) translate(0px, 100%);
    transform-origin: bottom left;
    transition: all ease 1s;
    padding-bottom: calc(100% - 16px);
    padding-left: 0px;
  }
`;

export const Line = styled.img`
  width: 25px;
`
export const Title = styled.span`
  font-size: 12px;
  transition: all ease 1s;

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 16px;
    transition: all ease 1s;
  }
`
