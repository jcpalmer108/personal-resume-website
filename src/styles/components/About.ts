import styled from "styled-components"
import { desktopBreakpoint, tabletBreakpoint } from "../variables"

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
  }
`

export const ConnectWrapper = styled.div`

`

export const Content = styled.div`
  padding-bottom: 40px;
  
  @media (min-width: ${desktopBreakpoint}px) {
    padding-bottom: 0px;
  }

`

export const Schooling = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;

  @media(min-width: ${tabletBreakpoint}px) {
    min-width: 40%;
    padding-left: 70px;
    padding-bottom: 0px;
  }

  @media(min-width: ${desktopBreakpoint}px) {
    min-width: 290px;
    padding-left: 60px;
  }


`

export const School = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: left; 
  justify-content: center;

  @media(min-width: ${tabletBreakpoint}px) {
    padding-top: 35px;
  }

`

export const Degree = styled.span`
  padding-top: 15px;
`

export const Link = styled.a`

`

export const Icon = styled.img`

`

export const Label = styled.a`

`

export const ActionWrapper = styled.div`

`