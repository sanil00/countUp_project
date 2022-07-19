import React from 'react';
import Home from './component/main/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import './css/App.css'

const App:React.FC = () => {
  return (
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
