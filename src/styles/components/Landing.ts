import styled from "styled-components"
import { desktopBreakpoint } from "../variables"

export const Wrapper = styled.div`

`

export const Title = styled.h1`
  padding-bottom: 10px; 

`

export const Content = styled.div`
  padding: 20px;

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 20px 60px;
  }
`

export const Description = styled.p`

`
