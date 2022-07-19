import React from 'react';
import { Wrapper, LandingWrapper } from './styles/App';
import Section from './components/Section';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';
import content from './assets/content/content.json'
import generateMenu from './utils/generateMenu';
import SeparatingLine from './components/SeparatingLine';

export default function App() {
  const menu = generateMenu(content.sections)

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <LandingWrapper>
          <Navbar menu={menu} />
          <SeparatingLine light />
          <div>testing</div>
        </LandingWrapper>
        <Section label="my section">
          <div>Children exist</div>
        </Section>
      </Wrapper>
    </>
  );
}
