import styled from "styled-components"
import { desktopBreakpoint, tabletBreakpoint } from "../variables"

export const UpperLanding = styled.div`
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
  width: 367px;
  object-fit: cover;
  display: none;
  padding-right: 20px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-right: 60px;
  }

`

export const DiscoverMore = styled.div`
  height: 40px;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 100px;
    visibility: visible;
  }

`

