import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Planner from './pages/Planner';
import About from './pages/About';
import Explore from "./pages/Explore";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SignUp from './pages/SignUp';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/travel-planner" element={<Planner />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;