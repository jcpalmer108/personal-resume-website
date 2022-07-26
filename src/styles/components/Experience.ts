import styled from "styled-components"

export const Wrapper = styled.div`
  text-align: center;
`

export const Upper = styled.div`

`

export const Title = styled.h2`
padding-bottom: 14px;

`

export const PageDescription = styled.div`
  font-family: Gilroy-Regular;

`

export const PageParagraph = styled.p`
  font-size: 16px;
  line-spacing: 26px;


`

type TileProps = {
  desktop?: boolean | undefined
}
export const Tile = styled.a<TileProps>`
  display: ${props => props.desktop ? 'none' : 'block'};
`

export const Icon = styled.img`

`

export const Label = styled.span`

`

export const Lower = styled.div`

`

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  &:first-child {
    padding-top: 14px;
  }

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
  padding: 12px;
`

export const JobDescription = styled.div`
  font-family: Gilroy-Regular;

`

export const JobParagraph = styled.p`
  font-size: 16px;
  line-spacing: 26px;


`

export const DiagonalLine = styled.img`
  display: none;
`
