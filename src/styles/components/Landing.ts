import styled from "styled-components"
import { desktopBreakpoint } from "../variables"

export const Wrapper = styled.div`
  display: flex;

  @media (min-width: ${desktopBreakpoint}px) {
    padding-right: 60px;

  }
`

export const Title = styled.h1`
  margin: 20px;
  transition: all 1s ease;

  @media (min-width: ${desktopBreakpoint}px) {
    margin: 0px;
    transition: all 1s ease;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  transition: all 1s ease;


  @media (min-width: ${desktopBreakpoint}px) {
    padding: 20px 60px;
    text-align: left;
    align-items: flex-start;
    transition: all 1s ease;
  }
`

export const Description = styled.p`
  margin: 30px 20px;
  transition: all 1s ease;

  @media (min-width: ${desktopBreakpoint}px) {
    margin: 15px 0px 30px 0px;
    transition: all 1s ease;
  }
`

export const MobilePhoto = styled.img`
  height: 415px;
  width: 100%;
  object-fit: cover;
  object-position: 0px 92%;
  display: block;

  @media (min-width: ${desktopBreakpoint}px) {
    display: none;
  }
`

export const DesktopPhoto = styled.img`
  height: 563px;
  width: 100%;
  object-fit: cover;
  display: none;
  flex-shrink: 2;

  @media (min-width: ${desktopBreakpoint}px) {
    display: block;
  }
`
