import "./Contact.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      {/* TOP LINE */}
      <div className="contact-line"></div>

      <div className="contact-content">

        {/* COLUMN 1 */}
        <div className="contact-col">
          <h2 className="contact-logo">ATOM</h2>
          <p className="contact-tagline">The core of your digital growth.</p>

          <h4>Address:</h4>
          <p>3rd Floor, Orion Tech Park</p>
          <p>Nova Street, Green Valley</p>
          <p>Bangalore - 560102</p>
          <p>Karnataka, India</p>

          <h4>Contact Details:</h4>
          <p>+91 98765 43210</p>
          <p>contact@atomservices.com</p>
          <p>www.atomservices.com</p>
        </div>

        {/* COLUMN 2 */}
        <div className="contact-col big-col">
          <h4 className="contact-heading">Services</h4>
          <ul>
            <li><a href="/services">Web Development</a></li>
            <li><a href="/services">Software Solutions</a></li>
            <li><a href="/services">UI / UX Design</a></li>
            <li><a href="/services">IT Consulting</a></li>
            <li><a href="/services">Cloud Services</a></li>
            <li><a href="/services">Maintenance & Support</a></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="contact-col big-col">
          <h4 className="contact-heading">Products</h4>
          <ul>
            <li><a href="/products">Custom Web Applications</a></li>
            <li><a href="/products">Business Software Solutions</a></li>
            <li><a href="/products">Digital Platforms</a></li>
            <li><a href="/products">Cloud-Based Systems</a></li>
            <li><a href="/products">Enterprise Tools</a></li>
            <li><a href="/products">Ongoing Product Support</a></li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="contact-col big-col">
          <h4 className="contact-heading">Legal</h4>
          <ul>
            <li><a href="/legal">Terms & Conditions</a></li>
<li><a href="/legal">Privacy Policy</a></li>
<li><a href="/legal">Cookie Policy</a></li>
<li><a href="/legal">Data Protection</a></li>
<li><a href="/legal">Disclaimer</a></li>

          </ul>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="contact-socials">
        <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
      </div>

      {/* BOTTOM BAR */}
      <div className="contact-bottom">
        © 2026 ATOM. All rights reserved.
      </div>

    </section>
  );
}

export default Contact;
