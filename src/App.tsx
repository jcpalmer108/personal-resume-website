import React from 'react';
import { Wrapper, LandingWrapper } from '@/styles/App';
import Section from './components/Section';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <LandingWrapper>
          <Navbar />
        </LandingWrapper>
        <Section label="my section">
          <div>Children exist</div>
        </Section>
      </Wrapper>
    </>
  );
}
