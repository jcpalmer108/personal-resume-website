import styled from "styled-components";
import {
  desktopBreakpoint,
  lively_coral,
  redstone,
  silver_polish,
  tabletBreakpoint,
} from "../variables";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: left;
  padding: 30px 0px;
  height: fit-content;

  @media (min-width: ${desktopBreakpoint}px) {
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    padding-top: 0px;
  }
`;

export const Section = styled.div`
  width: 100%;

  @media (min-width: ${tabletBreakpoint}px) {
    width: 50%;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    width: calc(33.3% - 0.5px);
    height: 286px;
    border-bottom: solid 1px ${silver_polish};
    border-right: solid 1px ${silver_polish};
    overflow-y: scroll;

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      border-bottom: none;
    }

    &:nth-child(3),
    &:nth-child(6) {
      border-right: none;
    }
  }
`;

export const CallToAction = styled(Section)`
  background: blue;
  background: ${redstone};
  display: none;

  @media (min-width: ${desktopBreakpoint}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Circle = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${lively_coral};
`;

export const RocketIcon = styled.img`
  height: 25px;
`;

export const Details = styled.div`
  color: white;
  font-family: Gilroy-Regular;
  font-size: 18px;
  weight: 600;
  padding-top: 15px;
  padding-bottom: 30px;
  max-width: 176px;
  text-align: center;
`;

export const Action = styled.div`
  background: white;
  color: ${redstone};
  font-family: Gilroy-Medium;
  font-size: 10px;
  padding: 20px;
  max-width: 176px;
`;

export const Subheader = styled.div`
  font-family: Gilroy-Bold;
  font-size: 22px;
  padding: 20px 30px 15px 50px;

  @media (min-width: ${tabletBreakpoint}px) {
  }

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 23px 30px 15px 50px;
  }
`;

export const Line = styled.div`
  display: flex;
  column-gap: 15px;
  padding: 7px 50px;

  &:last-child {
    padding-bottom: calc(35px - 7px);
  }
`;

export const Icon = styled.img`
  height: 20px;
`;

export const Subtitle = styled.div`
  font-family: Gilroy-Regular;
  font-size: 11px;
  color: ${silver_polish};
  padding-top: 3px;
`;

export const Info = styled.div`
  font-family: Gilroy-Regular;
  font-size: 18px;

  @media (min-width: ${desktopBreakpoint}px) {
    font-size: 16px;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
