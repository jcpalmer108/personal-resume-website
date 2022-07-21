import styled from "styled-components";
import { desktopBreakpoint, contentWidth, silver_polish, tabletBreakpoint } from "../variables";
import { WrapperProps, HeaderProps, ChildrenProps } from "../../types/Section"

export const Wrapper = styled.div<WrapperProps>`
  max-width: ${contentWidth}px;
  margin: auto;
  border-left: solid;
  border-right: solid;
  border-color: transparent;
  border-width: 0px;

  @media (min-width: ${contentWidth}px) {
    border-color: ${props => props.light ? "white" : silver_polish};
    border-width: ${props => props.thin ? 0.2 : 1}px;
  }
`

export const Header = styled.div<HeaderProps>`
  width: fit-content;
  margin: ${props => props.center ? "auto" : "0px"};
  padding-top: 0px;

  @media (min-width: ${desktopBreakpoint}px) {
    margin: 0px;
    padding-top: 15px;
  }
`

export const Label = styled.div`
  height: 12px;
  font-size: 12;
  width: fit-content;
  column-gap: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  padding-bottom: 0px;
  padding-top: 50px;

  @media (min-width: ${tabletBreakpoint}px) {
    transform: rotate(-90deg) translate(0px, 100%);
    transform-origin: bottom left;
    padding-bottom: calc(100% - 16px);
    padding-left: 0px;
    height: 14px;
    font-size: 14
  }

  @media (min-width: ${desktopBreakpoint}px) {
    height: 16px;
    font-size: 16;
  }

`

export const Line = styled.img`
  width: 25px;
`
export const Title = styled.span`
  font-size: 12px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 14px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 16px;
  }

`

export const Children = styled.div<ChildrenProps>`
  padding: ${props => props.padded ? 20 : 0}px;
`
