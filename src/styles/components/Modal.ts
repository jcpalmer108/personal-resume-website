import styled from "styled-components"
import { desktopBreakpoint, jet, off_black, silver_polish, tabletBreakpoint } from "../variables";

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0px;
  background: black;
  height: 100%;
  width: 100%;
  z-index: 998;
  opacity: 0.8;
`

export const Window = styled.div`
  position: fixed;
  top: calc(15% / 2);
  left: calc(15% / 2);
  height: 85%;
  width: 85%;
  overflow: hidden;
  opacity: 1;
  z-index: 999;
  text-align: right;
`
export const CloseIcon = styled.img`
  width: 17px;
  padding-bottom: 5px;
`

export const InnerWindow = styled.div`
  background: white;
  height: calc(100% - 30px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`


export const LeftRightBorders = styled.div`
  width: 87%;
  border-left: solid 1px ${silver_polish};
  border-right: solid 1px ${silver_polish};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TopBottomBorders = styled.div`
  height: 100%;
  width: 100%;

  @media(min-width: ${desktopBreakpoint}px) {
    border-top: solid 1px ${silver_polish};
    border-bottom: solid 1px ${silver_polish};
    height: 80%;
  }

  `

export const Content = styled.div`
  text-align: left;
  padding: 20px;
  max-height: calc(100% - 40px);
  overflow-y: scroll;  

  @media(min-width: ${tabletBreakpoint}px) {
    padding: 40px;
    max-height: calc(100% - 80px);

  }

`

export const Tile = styled.div`
  width: 100%;
  height: 100%;
  background: ${off_black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 25px;

  @media(min-width: ${tabletBreakpoint}px) {
    max-width: 235px;
    padding: 40px;
    margin: auto;
  }

`

export const Circle = styled.div`
  border-radius: 50%;
  background: ${jet};
  height: 145px;
  width: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 25px;

  @media(min-width: ${tabletBreakpoint}px) {
    height: 185px;
    width: 185px;
  }

`

type LogoProps = {
  icon?: string
}

export const Logo = styled.img<LogoProps>`
  height: ${({ icon }) => {
    switch(icon) {
      case "nike":
        return "28px";
      case "slalom": 
        return "50px";
      default: 
        return "70px";
    }
  }}};

  @media(min-width: ${tabletBreakpoint}px) {
    height: ${({ icon }) => {
      switch(icon) {
        case "nike":
          return "38px";
        case "slalom": 
          return "60px";
        default: 
          return "90px";
      }
    }}};  
  }

`

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media(min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
    column-gap: 20px;
    padding-top: 75px;
  }

`

export const TileLabel = styled.div`
  font-family: Gilroy-Bold;
  font-size: 14px;

  @media(min-width: ${tabletBreakpoint}px) {
    font-size: 17px;
    padding-bottom: 15px;
  }

`

export const TileInfo = styled.span`
font-family: Gilroy-Regular;
font-size: 14px;

@media(min-width: ${tabletBreakpoint}px) {
  font-size: 13px;
}
`

export const OrgTeam = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${tabletBreakpoint}px) {
    flex-direction: row;
  }
`