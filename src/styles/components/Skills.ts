import styled from "styled-components";
import { contentWidth, desktopBreakpoint, silver_polish, tabletBreakpoint } from "../variables";

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
    padding-top: calc(7% - 25px);
    padding-left: 25px;
    position: absolute;
    width: calc(60% - 50px);
    max-width: 500px;
    overflow: hidden;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-top: 45px;
    padding-left: 60px;
    width: 600px;
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

  @media (min-width: ${desktopBreakpoint}px) {
    height: 100px;
    width: 100px;
  }


  `

export const Link = styled.a`
  display: flex;
  width: 50px;
  height: 50px;
  border: 1px solid ${silver_polish};
  padding: 30px;
  margin-right: 13px;

  @media (min-width: ${tabletBreakpoint}px) {
    padding: 0px;
    position: absolute;
    border: none;
    margin-right: 0px;
    padding-bottom: 0px;
    
    max-width: 230px;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding-top: 7%;
    max-height: 200px;
  }

  @media(min-width: ${desktopBreakpoint}px) {
    padding-top: 8%;
  }

  @media (min-width: ${contentWidth}px) {
    padding-top: 90px;
  }


`

export const Description = styled.div`
  padding: 30px 20px 50px 20px;
  font-family: Gilroy-Regular;

  @media (min-width: ${tabletBreakpoint}px) {
    padding: 20px 0px 30px 0px;
    width: 100%;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 7% 0px 30px 0px;
    width: 145%;
  }
`

export const Paragraph = styled.p`
  margin-bottom: 16px;
  margin: 0px;

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
    display: flex;
    flex-direction: column;
  }

`

export const Mosaic = styled.table`

  @media(min-width: ${tabletBreakpoint}px) {
    width: 100%;
    border-collapse: collapse;
  }
`

type ContentProps = {
  desktop?: boolean | undefined
}

export const Content = styled.div<ContentProps>`
  height: 0px;
  width: 60%;
  max-width: 600px;
  display: block;

  @media (min-width: ${tabletBreakpoint}px) {
    display: ${ props => props.desktop ? "none" : "block"};
    padding: 25px;
    height: 100%;
    max-width: none;
    width: calc(100% - 50px);
  }

  @media (min-width: ${desktopBreakpoint}px) {
    display: ${ props => props.desktop ? "block" : "none"};
    position: relative;
    height: 0px;
    padding: 0px;
    width: 60%;
    margin-left: 50px;
    margin-right: 50px;
  }
  `


type CellProps = {
  first?: boolean | undefined,
  last?: boolean | undefined
}
export const Cell = styled.td<CellProps>`

  @media(min-width: ${tabletBreakpoint}px) {
    border-width: 1px;
    border-left: ${props => props.first ? 'none' : 'solid'};
    border-top: ${props => props.first ? 'none' : 'solid'};
    border-bottom: ${props => props.last ? 'none' : 'solid'};
    border-right: ${props => props.last ? 'none' : 'solid'};
    border-color: ${silver_polish};

    width: 20%;
    height: 0px;
    padding-bottom: 20%;
  }

  @media(min-width: ${contentWidth}px) {
    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }
  }
  `
