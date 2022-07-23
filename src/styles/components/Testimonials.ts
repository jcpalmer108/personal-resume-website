import styled from "styled-components"
import { redstone } from "../variables"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`

`

export const Quote = styled.p`
  font-size: 15px;
  font-family: Gilroy-Regular;

`

export const Person = styled.div`
  font-size: 16;
  font-family: Gilroy-Medium;

`

export const Title = styled.div`
  font-size: 12px;
  font-family: Gilroy-Regular;

`

export const Dots = styled.div`
  display: flex;
  
`

type DotProps = {
  selected: boolean
}

export const Dot = styled.div<DotProps>`
  height: 5px;
  width: 5px;
  background: ${props => props.selected ? 'blue' : 'red'};
  border-radius: 50%;
`


export const Arrows = styled.div`

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

`
export const Option = styled.div`

`