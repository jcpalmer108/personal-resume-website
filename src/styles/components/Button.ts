import styled from "styled-components"
import { desktopBreakpoint, redstone } from "../variables"

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
  transition: all 1s ease;

  @media (min-width: ${desktopBreakpoint}px) {
    width: 218px;
    height: 64px;
    font-size: 14px;
    transition: all 1s ease;
  }
`

export const ArrowRight = styled.img`
  width: 22px;
`