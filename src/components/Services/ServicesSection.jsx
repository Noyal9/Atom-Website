import "./ServicesSection.css";
import { useNavigate } from "react-router-dom";

function ServicesSection() {

  const navigate = useNavigate();

  return (
    <section className="services-section">

      <h2 className="services-title">
        Our <span>Services</span>
      </h2>

      <p className="services-subtitle">
        Smart digital solutions built to scale your business
      </p>

      <div className="services-grid">

        <div className="service-card" onClick={() => navigate("/services/ai")}>
          <span>🤖</span>
          <h3>AI Powered Solutions</h3>
          <p>RAG chatbots, AI agents, automation & voice AI</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services/web")}>
          <span>🌐</span>
          <h3>Web Solutions</h3>
          <p>Modern static & dynamic websites</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services/cloud")}>
          <span>☁️</span>
          <h3>Cloud Solutions</h3>
          <p>Cloud setup, deployment & credits</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services/data")}>
          <span>🗄️</span>
          <h3>Data Management</h3>
          <p>Database design & optimization</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services/automation")}>
          <span>🔁</span>
          <h3>Automation</h3>
          <p>Workflow automation with n8n</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services/support")}>
          <span>🛠️</span>
          <h3>Maintenance & Support</h3>
          <p>Ongoing technical support</p>
        </div>

      </div>

    </section>
  );
}

export default ServicesSection;
