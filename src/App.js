import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SighUp from './components/SighUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SighUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
