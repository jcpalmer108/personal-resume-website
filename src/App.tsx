import React from 'react';
import Section from '@/components/Section/Section';
import GlobalStyle from './styles/global';
import './App.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Section label="test">Blah</Section>
      </div>
    </>
  );
}
