import "./Hero.css";
import heroImg from "../../assets/images/hero.png"; // use your existing image

function Hero() {
  return (
    <section className="hero">

      {/* TOP BIG TITLE */}
      <h1 className="hero-main-title">
        Why you should choose <span>ATOM</span>?
      </h1>

      <div className="hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h2>
            We <span>simplify</span> growth <br />
            using <span>ATOM</span>.
          </h2>

          <p>
            ATOM is a service-based technology company delivering reliable,
            scalable, and modern digital solutions.
          </p>

          <p>
            ATOM delivers modern web, software, and IT services that empower
            businesses with secure, scalable, and user-focused solutions.
          </p>

          <p>
            ATOM provides end-to-end technology and digital services designed
            to help businesses grow, scale, and operate efficiently.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Services</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Hero" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
