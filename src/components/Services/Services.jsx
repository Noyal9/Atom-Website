import "./Services.css";
import serviceImg from "../../assets/images/services.png"; 
// change image name if different

function Services() {
  return (
    <section className="services">
      <div className="services-container">

        {/* LEFT IMAGE */}
        <div className="services-image">
          <img src={serviceImg} alt="Services" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="services-content">

          <span className="services-tag">OUR SERVICES</span>

          <h2>
            We extend our <span>services</span><br />
            to the <span>wide</span> variety.
          </h2>

          <p>
            At ATOM, we deliver a wide range of digital and technology services
            designed to help businesses grow, scale, and stay competitive in a
            rapidly evolving digital world.
          </p>

          {/* SERVICE BUTTONS */}
          <div className="services-boxes">

            <div className="service-box">
              <span className="icon">🤖</span>
              AI Powered Solutions
            </div>

            <div className="service-box">
              <span className="icon">🌐</span>
              Web Solutions
            </div>

            <div className="service-box">
              <span className="icon">☁️</span>
              Cloud Solutions
            </div>

            <div className="service-box">
              <span className="icon">🗄️</span>
              Data Management
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;
