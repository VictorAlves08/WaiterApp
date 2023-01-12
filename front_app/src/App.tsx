import React from 'react';

import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header/index';
import { Orders } from './components/Orders';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}

export default App;
