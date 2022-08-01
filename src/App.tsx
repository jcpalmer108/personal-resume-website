import React from 'react';
import { Wrapper, LandingWrapper, FooterWrapper } from './styles/App';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import content from './assets/content/content.json'
import generateMenu from './utils/generateMenu';
import SeparatingLine from './components/SeparatingLine';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Gallery from './components/Gallery';

export default function App() {
  const menu = generateMenu(content.sections)
  const landing = content.sections.find((section) => section.key === "landing")
  const about = content.sections.find((section) => section.key === "about")
  const testimonials = content.sections.find((section) => section.key === "testimonials")
  const experience = content.sections.find((section) => section.key === "experience")
  const skills = content.sections.find((section) => section.key === "skills")

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <LandingWrapper>
          <Navbar menu={menu} />
          <SeparatingLine light />
          <Landing content={landing}/>
        </LandingWrapper>
        <About content={about} />
        <Skills content={skills}/>
        <Testimonials content={testimonials} />
        <Experience content={experience} />
        <Gallery />
        <FooterWrapper>
          <Footer menu={menu} />
        </FooterWrapper>
      </Wrapper>
    </>
  );
}
