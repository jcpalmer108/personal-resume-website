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
    ${props => props.noBorder ? `
      border: none;
    ` : `
      border-color: ${props.light ? "white" : silver_polish};
      border-width: ${props.thin ? 0.2 : 1}px;    
    `}
  }

  @media(min-width: ${contentWidth}px) {
    border-bottom: ${props => props.bottom ? `1px solid ${silver_polish}` : 'none'};
  }
`

export const Header = styled.div<HeaderProps>`
  width: fit-content;
  margin: ${props => props.center ? "auto" : "0px"};
  padding-top: 50px; 
  padding-left: 16px;
  
  @media (min-width: ${tabletBreakpoint}px) {
    margin: 0px;
    padding-left: 25px;
    padding-top: ${props => props.noTop ? '25px' : '80px'};
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-left: 60px;
    padding-top: 85px;
  }
`

export const Label = styled.div`
  display: flex;
  column-gap: 10px;
  font-size: 11px;
  font-family: Gilroy-Regular;

  @media (min-width: ${tabletBreakpoint}px) {
    transform: rotate(-90deg);
    padding-bottom: calc(100% - 15px);
    font-size: 14px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-bottom: calc(100% - 17px);
    font-size: 16px;
  }

`

export const Children = styled.div<ChildrenProps>`
  padding: ${props => props.padded ? "20px 15px" : "0px"};

  @media (min-width: ${tabletBreakpoint}px) {
    padding: ${props => props.padded ? "40px 25px" : "0px"};
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding: ${props => props.padded ? "45px 60px 55px 60px" : "0px"};
  }
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

export const Line = styled.img`
  width: 25px;
`

