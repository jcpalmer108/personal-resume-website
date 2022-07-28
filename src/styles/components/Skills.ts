import styled from "styled-components";
import { tabletBreakpoint } from "../variables";

export const Mobile = styled.div`
  display: block;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`

export const Title = styled.h2`

`

export const Marquee = styled.div`

`

export const Tile = styled.a`

`

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`

export const Row = styled.div`

`

export const Link = styled.a`

`



export const Desktop = styled.div`
  display: none;
  
  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
  }

`