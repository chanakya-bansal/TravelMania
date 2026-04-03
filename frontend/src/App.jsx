import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Planner from './pages/Planner';
import About from './pages/About';
import Explore from "./pages/Explore";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;