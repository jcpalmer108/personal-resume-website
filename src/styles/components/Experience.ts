import styled from "styled-components"
import { silver_polish } from "../variables"

export const Wrapper = styled.div`
  text-align: center;
`

export const Upper = styled.div`

`

export const Title = styled.h2`
  padding-bottom: 30px;
  width: 75%;
  margin: auto;
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
`

type TileProps = {
  desktop?: boolean | undefined
}

export const Mosaic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 25px;
`
export const Tile = styled.a<TileProps>`
  display: ${props => props.desktop ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: end;

  border: 1px solid ${silver_polish};
  text-decoration: none;
  color: ${silver_polish};
  padding-bottom: 24px;
  margin-top: 45px;
  height: 148px;
  width: 175px;
  row-gap: 35px;
`

export const Icon = styled.img`
  height: 45px;
  width: 45px;

`

export const Label = styled.span`
  font-family: Gilroy-Medium;
  font-size: 13px;
  text-transform: uppercase;

`

export const Lower = styled.div`

`

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

`

export const Logo = styled.img`
  padding: 20px;
  width: 100px;
  height: 100px;
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

`

export const JobTitle = styled.div`
  font-family: Butler-Regular;
  font-size: 25px;
  line-spacing: 65px;
`

export const Info = styled.span`
  font-family: Gilroy-Regular;
  font-style: italic;
  font-size: 14px;
  padding: 12px 12px 20px 12px;
`

export const JobDescription = styled.div`
  font-family: Gilroy-Regular;

`

export const JobParagraph = styled.p`
  font-size: 16px;
  line-spacing: 26px;
  margin: 0px;
  padding-bottom: 16px;

  &:first-child {
    padding-bottom: 0px;
  }




`

export const DiagonalLine = styled.img`
  display: none;
`
