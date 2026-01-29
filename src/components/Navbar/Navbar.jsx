import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <img src={logo} className="logo" alt="logo" />

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Testimonial</li>
          <li>Contact</li>
        </ul>

        <button className="nav-btn">Register</button>

      </div>
    </header>
  );
}

export default Navbar;
