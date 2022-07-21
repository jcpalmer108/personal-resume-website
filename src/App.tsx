import React from 'react';
import { Wrapper, LandingWrapper } from './styles/App';
import Section from './components/Section';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';
import content from './assets/content/content.json'
import generateMenu from './utils/generateMenu';
import SeparatingLine from './components/SeparatingLine';
import Landing from './components/Landing';

export default function App() {
  const menu = generateMenu(content.sections)
  const landing = content.sections.find((section) => section.key === "landing")

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <LandingWrapper>
          <Navbar menu={menu} />
          <SeparatingLine light />
          <Landing content={landing}/>
        </LandingWrapper>
        <Section label="my section">
          <div>Children exist</div>
        </Section>
      </Wrapper>
    </>
  );
}
