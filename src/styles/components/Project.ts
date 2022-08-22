import styled from "styled-components";
import { silver_polish } from "../variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
`

export const Icon = styled.img`
  height: 24px;
  border: 1px solid ${silver_polish};
  padding: 20px;
  margin-top: 25px;
`

export const Title = styled.div`
  font-family: Gilroy-Regular;
  font-size: 14px;
  font-weight: bold;
  padding-top: 15px;
`
export const Industry = styled.div`
  font-family: Gilroy-Medium;
  color: ${silver_polish};
  font-size: 12px;
  padding-top: 10px;
  width: 80%;
`

export const Description = styled.div`
  text-align: left;

`