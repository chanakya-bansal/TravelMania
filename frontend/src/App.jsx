import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


import Home from "./pages/Home";
import Planner from './pages/Planner';
import About from './pages/About';

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;