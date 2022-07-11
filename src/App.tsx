import React from 'react';
import './css/App.css';
import Home from './routes/Home';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route path=":id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
