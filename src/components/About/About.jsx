import "./About.css";
import aboutImg from "../../assets/images/services.png";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">

          <span className="about-tag">OUR REACH</span>

          <h2 className="about-title">
            We are <span>present</span><br />
            all over the<br />
            <span>world.</span>
          </h2>

          <p>
            The reach of ATOM extends across diverse industries and regions.
            We work with startups, small businesses, and enterprises,
            providing scalable and innovative services.
          </p>

          <div className="about-stats">

            <div>
              <h3>200+</h3>
              <span>Projects Delivered</span>
            </div>

            <div>
              <h3>80+</h3>
              <span>Happy Clients</span>
            </div>

            <div>
              <h3>5+</h3>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img src={aboutImg} alt="About" />
        </div>

      </div>
    </section>
  );
}

export default About;
