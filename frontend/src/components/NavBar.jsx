import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png"
import "../styles/NavBar.css"

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
 
  const location = useLocation();
 
  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
     

      <div className="logo_container">
        <img src={logo} alt="TravelMania" className="logo" />
      </div>

      <nav className="desktop-nav">
        <ul className="nav-links">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive("/courses") ? "active" : ""}>
            <Link to="/courses">Travel Planner</Link>
          </li>
          <li className={isActive("/tournaments") ? "active" : ""}>
            <Link to="/tournaments">Tournament</Link>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={isActive("/ranking") ? "active" : ""}>
            <Link to="/ranking">Ranking</Link>
          </li>

        </ul>
      </nav>
      	
   
    </header>
  );
};

export default Navbar;
