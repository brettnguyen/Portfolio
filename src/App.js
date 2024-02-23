
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './pages/NavBar.js';
import Home from './pages/Home';
import Test from './pages/Test';


function App() {
  return (
    <div className="App">
      <Home/>
      {/*
      <Router>
      <NavBar />

      <Routes>
        <Route element={<NavBar />}/>
        <Route index element={<Home />}/>
      <Route path='Test' element={<Test />}/>
      </Routes>
      </Router>
  */}
    </div>
  );
}

export default App;
