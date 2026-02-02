import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* LOGO */}
        <img src={logo} className="logo" alt="logo" />

        {/* MENU */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/testimonials">Testimonial</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* REGISTER BUTTON */}
        <Link to="/register">
          <button className="nav-btn">Register</button>
        </Link>

      </div>
    </header>
  );
}

export default Navbar;
