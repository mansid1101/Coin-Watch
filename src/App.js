import React, { Component }  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
