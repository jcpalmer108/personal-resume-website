import styled from "styled-components"
import { redstone, silver_polish, tabletBreakpoint } from "../variables"

export const Wrapper = styled.div`
  text-align: center;

  @media (min-width: ${tabletBreakpoint}px) {
    text-align: left;
  }
`

export const Upper = styled.div`

  @media (min-width: ${tabletBreakpoint}px) {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    justify-content: space-between;
  }

`

export const Summary = styled.div`
  @media (min-width: ${tabletBreakpoint}px) {
    width: 60%;
    padding-right: 30px;
  }


`

export const Title = styled.h2`
  padding-bottom: 30px;
  width: 75%;
  margin: auto;

  @media (min-width: ${tabletBreakpoint}px) {
    width: 100%;
    margin: 0px;
    padding-bottom: 20px;
  }

`

export const Description = styled.div`
  font-family: Gilroy-Regular;

`

export const Paragraph = styled.p`
  font-size: 16px;
  line-spacing: 26px;
  margin: 0px;
  padding-bottom: 16px;

  &:first-child {
    padding-bottom: 0px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 14px;
  }

`

type MosaicProps = {
  desktop?: boolean | undefined
}

export const Mosaic = styled.div<MosaicProps>`
  display: ${ props => props.desktop ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  column-gap: 25px;
  height: fit-content;
  padding-top: 45px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: ${ props => props.desktop ? 'flex' : 'none'};
    padding-top: 0px;
    align-self: flex-end;
  }

`
export const Tile = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${silver_polish};
  text-decoration: none;
  max-height: 148px;
  height: 148px;
  width: 175px;
  color: ${silver_polish};
  row-gap: 35px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 140px;
    width: 140px
  }

`

export const Icon = styled.img`
  height: 45px;
  width: 45px;

`

export const Label = styled.span`
  font-family: Gilroy-Medium;
  font-size: 13px;
  text-transform: uppercase;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 14px;
  }

`

export const Lower = styled.div`

`

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  @media (min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: fit-content;
  
  }

`

export const Logo = styled.img`
  padding: 20px;
  width: 100px;
  height: 100px;
  margin: auto;

  @media (min-width: ${tabletBreakpoint}px) {
    padding: 0px;
    margin-right: 30px;
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

`

export const JobTitle = styled.div`
  font-family: Butler-Regular;
  font-size: 25px;
  line-spacing: 65px;

  @media (min-width: ${tabletBreakpoint}px) {
    min-width: 250px;
    font-size: 22px;
  }

`

export const Info = styled.span`
  font-family: Gilroy-Regular;
  font-style: italic;
  font-size: 14px;
  padding: 12px 12px 20px 12px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 12px;
    padding: 0px;
  }

`

export const JobDescription = styled.div`
  font-family: Gilroy-Regular;

  @media (min-width: ${tabletBreakpoint}px) {
    margin-left: 20px;
  }


`

export const JobParagraph = styled.p`
  font-size: 16px;
  line-spacing: 26px;
  margin: 0px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;

  &:first-child {
    padding-bottom: 0px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 13px;
    display: block;
  }

`

export const ModalTrigger = styled.a`
  display: none;
  text-decoration: none;
  padding-top: 12px;
  color: ${redstone};

  @media (min-width: ${tabletBreakpoint}px) {
    padding-left: 5px;
    padding-top: 0px;
  }

`

export const DiagonalLine = styled.img`
  display: none;

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
    height: 72px;
  }

`
