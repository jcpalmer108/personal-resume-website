import styled from "styled-components"
import { off_black, redstone, silver_polish } from "../variables"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Content = styled.div`

`

export const Quote = styled.p`
  margin: 30px 0px;
  font-size: 15px;
  font-family: Gilroy-Regular;
  height: 130px;

`

export const Person = styled.div`
  font-size: 16;
  font-family: Gilroy-Medium;
  margin-bottom: 10px;

`

export const Title = styled.div`
  font-size: 12px;
  font-family: Gilroy-Regular;
  margin-bottom: 20px;

`

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

type DotProps = {
  selected: boolean
}

export const Dot = styled.div<DotProps>`
  height: 7px;
  width: 7px;
  margin: 0px 7.5px;
  background: ${props => props.selected ? off_black : silver_polish};
  border-radius: 50%;
`


export const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin-top: 30px;

`

type ArrowProps = {
  desktop?: boolean | undefined
}

export const ArrowLeft = styled.img<ArrowProps>`
  display: ${props => props.desktop ? 'none' : 'block'}; 
  width: 19px;
`

export const ArrowRight = styled.img<ArrowProps>`
  display: ${props => props.desktop ? 'none' : 'block'};
  width: 19px;
`

export const Circle = styled.div`
  background: ${redstone};
  opacity: 10%;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: -1;
  position: absolute;
`
export const Option = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`