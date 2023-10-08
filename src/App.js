import React from 'react';
// import safeParser from 'postcss-safe-parser';

import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Findus />
    <Footer />
  </div>
);

export default App;
