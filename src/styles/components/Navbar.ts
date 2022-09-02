import styled from "styled-components";
import {
  tabletBreakpoint,
  redstone,
  silver_polish,
  desktopBreakpoint,
} from "../variables";

export const Logo = styled.img`
  height: 40px;

  @media (min-width: ${desktopBreakpoint}px) {
    height: 55px;
  }
`;

export const Hamburger = styled.div`
  border: 1px solid ${redstone};
  height: 40px;
  width: 40px;
  display: flex;

  .hamburger-react {
    top: -3.5px;
    left: -3.5px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`;

export const UpperMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  justify-content: space-between;
  padding: 0px 20px;

  @media (min-width: ${tabletBreakpoint}px) {
    padding: 0px 25px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 0px 60px;
    height: 105px;
  }
`;

export const LowerMenu = styled.div`
  min-height: 320px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
`;

export const MobileMenu = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MobilePages = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const SocialsWrapper = styled.div`
  background: white;
  justify-content: space-around;
  display: flex;
  height: 60px;
`;

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
`;

export const Icon = styled.img`
  height: 26px;
`;

export const DesktopMenu = styled.div`
  display: none;
  line-spacing: 3px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: flex;
    justify-content: space-between;
    align-items: right;
  }
`;

export const DesktopPages = styled.a`
  text-decoration: none;
  color: black;
  padding-left: 24px;
  font-family: Gilroy-Medium;
  font-size: 12px;
  transition: all 500ms ease;

  &:first-child {
    padding-left: none;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    &:hover {
      font-size: 14px;
      color: ${redstone};
      transition: all 500ms ease;
    }
  }

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 14px;
    padding-left: 40px;

    &:hover {
      font-size: 16px;
      color: ${redstone};
      transition: all 500ms ease;
    }
  }
`;
