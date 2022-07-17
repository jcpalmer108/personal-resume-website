import styled from "styled-components";
import { 
  desktopBreakpoint,
  contentWidth,
  silver_polish
} from "../variables";

type WrapperProps = {
  light?: boolean,
  thin? : boolean,
}

type HeaderProps = {
  center?: boolean,
}

type ChildrenProps = {
  padded?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: ${contentWidth}px;
  margin: auto;
  border-left: solid;
  border-right: solid;
  border-color: transparent;
  transition: all ease 1s;
  border-width: 0px;

  @media (min-width: ${contentWidth}px) {
    border-color: ${props => props.light ? "white" : silver_polish};
    border-width: ${props => props.thin ? 0.5 : 1}px;
    transition: all ease 1s;
  }

`

export const Header = styled.div<HeaderProps>`
  width: fit-content;
  margin: ${props => props.center ? "auto" : "0px"};
  padding-top: 0px;
  transition: all ease 1s;

  @media (min-width: ${desktopBreakpoint}px) {
    margin: 0px;
    padding-top: 15px;
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
  padding-top: 50px;

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

export const Children = styled.div<ChildrenProps>`
  padding: ${props => props.padded ? 20 : 0}px;
`
