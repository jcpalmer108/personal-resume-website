import styled from "styled-components";
import { desktopBreakpoint, redstone, tabletBreakpoint } from "../variables";

export const Wrapper = styled.div`
  padding: 40px;
  text-align: center;

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 70px;
  }
`

export const Logo = styled.img`
  height: 55px;
  padding-bottom: 40px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 75px;
    padding-bottom: 52px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    height: 90px;
    padding-bottom: 35px;
  }
`

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 669px;
  margin: auto;
  height: 218px;
  font-size: 14px;
  font-family: Gilroy-Medium;

  @media (min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
    height: 14px;
  }

`

export const FooterPages = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: ${redstone};
  }

`

export const Copyright = styled.p`
  color: white;
  text-align: center;
`

export const Name = styled.span`
  color: ${redstone};
`