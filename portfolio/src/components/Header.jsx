import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="head-container">
        <div className="logo-nav">
          <h1 className="hlogo">Spoorjith</h1>
          <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
            <Link className="links" to="/" onClick={()=> setMenuOpen(false)}>Home</Link>
            <Link className="links" to="/resume" onClick={()=> setMenuOpen(false)}>Resume</Link>
            <Link className="links" to="/projects" onClick={()=> setMenuOpen(false)}>Projects</Link>
            <Link className="links" to="/contact" onClick={()=> setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
        <div className="hbtn">
          <button className="talk-btn">Let's Talk!</button>
          <button type="button" className="menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>
    </header>
  )
}
export default Header;