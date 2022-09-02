import styled from "styled-components";
import { desktopBreakpoint, redstone, tabletBreakpoint } from "../variables";

export const Link = styled.a`
  width: 186px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  background-color: ${redstone};
  justify-content: center;
  text-decoration: none;
  color: white;
  font-family: Gilroy-Medium;
  font-size: 12px;
  transition: all 500ms ease;

  @media (min-width: ${tabletBreakpoint}px) {
    width: 214px;
    height: 60px;
    font-size: 14px;
    border: 1px solid transparent;
    transition: all 500ms ease;

    &:hover {
      color: ${redstone};
      background: white;
      transition: all 500ms ease;
      font-size: 16px;
      border: ${redstone} 1px solid;

      img {
        filter: invert(59%) sepia(50%) saturate(1158%) hue-rotate(312deg)
          brightness(92%) contrast(95%);
        transition: all 500ms ease;
      }
    }
  }

  @media (min-width: ${desktopBreakpoint}px) {
    width: 218px;
    height: 64px;
  }
`;

export const ArrowRight = styled.img`
  width: 22px;
  padding-bottom: 3px;
`;
