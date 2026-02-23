import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


import Home from "./pages/Home";
import Planner from './pages/Planner';

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App()
{
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;