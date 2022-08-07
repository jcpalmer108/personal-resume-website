import styled from "styled-components"
import { desktopBreakpoint, tabletBreakpoint } from "../variables"

export const Photo = styled.img`
  width: 45%;
  object-fit: cover;
  padding: 5px;

  &:first-child {
    padding-left: 0px;
  }

  &:last-child {
    padding-right: 0px;
  }


  @media(min-width: ${tabletBreakpoint}px) {
    height: 465px;
    width: 340px;
    padding: 10px;

    &:first-child {
      padding-left: 0px;
    }
  
    &:last-child {
      padding-right: 0px;
    }
  
  }

  @media(min-width: ${desktopBreakpoint}px) {
    height: 494px;
    width: 370px;
  }

`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px 0px;

  @media (min-width: ${tabletBreakpoint}px) {
    padding-bottom: 80px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-bottom: 85px;
  }
  `

  export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media(min-width: ${desktopBreakpoint}px) {
    justify-content: space-between;
  }

`
