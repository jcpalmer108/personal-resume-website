import styled from "styled-components"
import { desktopBreakpoint } from "../variables"

export const Wrapper = styled.div`

`

export const Title = styled.h1`
  margin-bottom: 10px; 

`

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 1s ease;


  @media (min-width: ${desktopBreakpoint}px) {
    padding: 20px 60px;
    text-align: left;
    transition: all 1s ease;
  }
`

export const Description = styled.p`
  margin: 30px 0px;
  transition: all 1s ease;

  @media (min-width: ${desktopBreakpoint}px) {
    margin-top: 15px;
    margin-bottom: 35px;
    transition: all 1s ease;
  }
`

export const Photo = styled.img`
  @media (min-width: ${desktopBreakpoint}px) {

  }

`
