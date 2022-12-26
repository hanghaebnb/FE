import React from 'react';
import Main from './pages/Main';
import Router from './shared/Router';
import GlobalStyle from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}
