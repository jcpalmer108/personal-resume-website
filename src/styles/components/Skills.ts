import styled from "styled-components";
import {
  contentWidth,
  desktopBreakpoint,
  silver_polish,
  tabletBreakpoint,
} from "../variables";
import { CellProps } from "../../types/Skills";

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 35px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-bottom: 40px;
  }
`;

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
`;

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
`;

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
    transition: all 500ms ease-in-out;
    max-width: 230px;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding-top: 7%;
    max-height: 200px;

    &:hover {
      #logo {
        height: 75px;
        width: 75px;
        transition: all 500ms ease-in-out;
      }
    }
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding-top: 8%;

    &:hover {
      #logo {
        height: 110px;
        width: 110px;
        transition: all 500ms ease-in-out;
      }
    }
  }

  @media (min-width: ${contentWidth}px) {
    padding-top: 90px;
  }
`;

export const Description = styled.p`
  font-family: Gilroy-Regular;
  margin: 0px;
  padding: 25px 15px 40px 15px;

  @media (min-width: ${tabletBreakpoint}px) {
    padding: 20px 0px 40px 0px;
  }

  @media (min-width: ${contentWidth}px) {
    padding: 55px 60px 30px 60px;
  }
`;

export const NotMobile = styled.div`
  display: none;

  @media (min-width: ${tabletBreakpoint}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Mosaic = styled.table`
  @media (min-width: ${tabletBreakpoint}px) {
    width: 100%;
    border-collapse: collapse;
  }
`;

type ContentProps = {
  desktop?: boolean | undefined;
};

export const Content = styled.div<ContentProps>`
  height: 0px;
  width: 60%;
  max-width: 600px;
  display: block;

  @media (min-width: ${tabletBreakpoint}px) {
    display: ${(props) => (props.desktop ? "none" : "block")};
    padding: 25px;
    height: 100%;
    max-width: none;
    width: calc(100% - 50px);
  }

  @media (min-width: ${contentWidth}px) {
    display: ${(props) => (props.desktop ? "block" : "none")};
    position: relative;
    height: 0px;
    padding: 0px;
    width: 100%;
  }
`;

export const Cell = styled.td<CellProps>`
  @media (min-width: ${tabletBreakpoint}px) {
    border-width: 1px;
    border-left: ${(props) => (props.first ? "none" : "solid")};
    border-top: ${(props) => (props.first ? "none" : "solid")};
    border-bottom: ${(props) => (props.last ? "none" : "solid")};
    border-right: ${(props) => (props.last ? "none" : "solid")};
    border-color: ${silver_polish};

    width: 20%;
    height: 0px;
    padding-bottom: 20%;
  }

  @media (min-width: ${contentWidth}px) {
    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0px;

  @media (min-width: ${contentWidth}px) {
    padding: 0px 60px;
  }
`;
