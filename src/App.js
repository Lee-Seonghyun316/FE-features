import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SighUp from './components/SighUp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SighUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
