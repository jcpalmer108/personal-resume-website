import React from 'react';
import GlobalStyle from './styles/global';
import './App.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app" data-testid="app">
        <p>blah</p>
      </div>
    </>
  );
}
