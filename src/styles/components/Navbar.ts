import styled from "styled-components";
import { tabletBreakpoint, redstone, silver_polish, desktopBreakpoint } from "../variables";

export const Logo = styled.img`
  height: 50px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 55px;
  }

`

export const UpperMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px 20px 20px;

  .hamburger-react {
    border: 1px solid ${redstone};
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 20px 60px;
    display: flex;
  }

`

export const LowerMenu = styled.div`
  min-height: 320px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
`

export const PagesWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const Pages = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`

export const SocialsWrapper = styled.div`
  background: white;
  justify-content: space-around;
  display: flex;
  height: 60px;
`

export const Socials = styled.a`
  border-left: 1px solid ${silver_polish};
  border-bottom: 1px solid ${silver_polish};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-left: none;
  }
`

export const Icon = styled.img`
  height: 26px;
`

export const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DesktopPages = styled.a`
  text-decoration: none;
  color: black;
  padding: 0px 12px;
  font-family: Gilroy-Medium;
  font-size: 14px;
  wrap: no-wrap;

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 0px 20px;
  }

`
