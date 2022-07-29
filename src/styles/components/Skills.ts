import styled from "styled-components";
import { silver_polish, tabletBreakpoint } from "../variables";

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 40px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`

export const Title = styled.h2`
  padding: 15px 15px 30px 15px;
  max-width: 250px;

  @media (min-width: ${tabletBreakpoint}px) {
    max-width: none;
    padding: 0px;
    position: absolute;

  }

`

export const Logo = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 70px;
    width: 70px;
  }

  `

export const Link = styled.a`
  height: 50px;
  width: 50px;
  border: 1px solid ${silver_polish};
  padding: 30px;
  margin-right: 13px;

  @media (min-width: ${tabletBreakpoint}px) {
    padding: 0px;
    position: relative;
    background: lightblue;
  }
`

export const Description = styled.div`
  padding: 30px 20px 50px 20px;
  font-family: Gilroy-Regular;

  @media (min-width: ${tabletBreakpoint}px) {
    padding: 0px;
    position: relative;
  }
`

export const Paragraph = styled.p`
  margin-bottom: 16px;
  margin: 0px;
  font-size: 12px;
  line-height: 20px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    position: relative;
  }

`

export const NotMobile = styled.div`
  display: none;
  
  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
  }

`

export const Mosaic = styled.table`

  @media(min-width: ${tabletBreakpoint}px) {
    width: 100%;
    border-collapse: collapse;
  }
`

export const Row = styled.tr`

  `

type CellProps = {
  first?: boolean | undefined,
  last?: boolean | undefined
}
export const Cell = styled.td<CellProps>`

  @media(min-width: ${tabletBreakpoint}px) {
    width: 20%;
    position: relative;
    
    // border-width: 1px;
    // border-color: blue;
    // border-left: ${props => props.first ? 'none' : 'solid'};
    // border-top: ${props => props.first ? 'none' : 'solid'};
    // border-bottom: ${props => props.last ? 'none' : 'solid'};
    // border-right: ${props => props.last ? 'none' : 'solid'};

    &:after {
      content: '';
      display: block;
      margin-top: 100%;    
    }

    &:first-child {
      background: green;
    }
  }
`
