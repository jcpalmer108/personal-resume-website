import { tab } from "@testing-library/user-event/dist/tab"
import styled from "styled-components"
import { desktopBreakpoint, tabletBreakpoint } from "../variables"

export const Wrapper = styled.div`
  display: flex;

`

export const Title = styled.h1`
  margin: 20px;

  @media (min-width: ${tabletBreakpoint}px) {
    margin: 0px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;


  @media (min-width: ${tabletBreakpoint}px) {
    text-align: left;
    padding: 20px;
    align-items: flex-start;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 20px 60px;
  }
`

export const Description = styled.p`
  margin: 30px 20px;

  @media (min-width: ${tabletBreakpoint}px) {
    margin: 15px 0px 30px 0px;
  }
`

export const MobilePhoto = styled.img`
  height: 415px;
  width: 100%;
  object-fit: cover;
  object-position: 0px 92%;
  display: block;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`

export const DesktopPhoto = styled.img`
  height: 563px;
  width: 100%;
  object-fit: cover;
  display: none;
  flex-shrink: 2;

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
    padding-right: 20px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-right: 60px;
  }

`
