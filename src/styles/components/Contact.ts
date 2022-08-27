import styled from "styled-components";
import {
  desktopBreakpoint,
  redstone,
  silver_polish,
  tabletBreakpoint,
} from "../variables";

export const Mobile = styled.form`
  text-align: center;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`;

export const NotMobile = styled.form`
  display: none;

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
  }

  @media (min-width: ${desktopBreakpoint}px) {
  }
`;

export const FormWrapper = styled.div`
  @media (min-width: ${tabletBreakpoint}px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border-top: 1px solid ${silver_polish};
    border-bottom: 1px solid ${silver_polish};
  }
`;

export const InputWrapper = styled.div`
  padding-top: 2.5px;
  border-bottom: 1px solid ${silver_polish};

  @media (min-width: ${desktopBreakpoint}px) {
    padding-top: 20px;
  }
`;

export const LeftWrapper = styled.div`
  padding: 35px 25px;
`;

export const Title = styled.h2`
  @media (min-width: ${tabletBreakpoint}px) {
    width: 80%;
  }
`;

export const Left = styled.div`
  width: 55%;
  border-right: 1px solid ${silver_polish};
`;

export const Right = styled.div`
  flex-grow: 1;
  height: 100%;
`;

export const Button = styled.input`
  border: none;
  background: ${redstone};
  width: 100%;
  font-size: 12px;
  color: white;
  height: 50px;
  font-family: Gilroy-Medium;
  font-size: 12px;
  line-spacing: 27px;
  letter-spacing: 2px;
  border-left: none;

  &:disabled {
    opacity: 0.3;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    width: 45%;
    border-left: 1px solid ${silver_polish};
    height: 100%;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${silver_polish};
  height: 75px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 90px;
  }
`;

export const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 25px;
  height: 51px;

  @media (min-width: ${tabletBreakpoint}px) {
    width: 55%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 0px;
  }
`;

export const Links = styled.a`
  border-top: 1px solid ${silver_polish};
  border-bottom: 1px solid ${silver_polish};
  border-left: 1px solid ${silver_polish};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-right: 1px solid ${silver_polish};
  }

  @media (min-width: ${tabletBreakpoint}px) {
    border: none;

    &:last-child {
      border-right: none;
    }
  }
`;

export const BlankSection = styled.div`
  height: 50px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 80px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    height: 85px;
  }
`;

export const Icon = styled.img`
  height: 20px;

  @media (min-width: ${tabletBreakpoint}px) {
    height: 23px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    height: 27px;
  }
`;
