import React from 'react';
import Wrapper from '@/styles/App';
import Section from './components/Section';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Section label="my section">
          <p>Children exist</p>
        </Section>
      </Wrapper>
    </>
  );
}
