import React from 'react';
import GlobalStyle from './styles/global';
import FontStyles from './styles/fonts';
import './App.css';

export default function App() {
  return (
    <>
      <FontStyles />
      <GlobalStyle />
      <div className="app" data-testid="app">
        <p>blah</p>
      </div>
    </>
  );
}
