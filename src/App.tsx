import React from 'react';
import Wrapper from '@/styles/App';
import Test1 from '@/styles/Test1';
import Test2 from '@/styles/Test2';

import Section from './components/Section';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Test1>
          <Section label="blah">
            this is my content
          </Section>
          <Section>
            this is my content
          </Section>
        </Test1>
        <Test2>
        <Section>
            this is my content
          </Section>
          <Section>
            this is my content
          </Section>
        </Test2>
      </Wrapper>
    </>
  );
}
