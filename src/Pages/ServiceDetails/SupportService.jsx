import "./ServiceDetails.css";

function SupportService(){
  return(
    <div className="service-details">
      <h1>Maintenance & <span>Support</span></h1>

      <p>
        We keep your systems running smoothly.
      </p>

      <ul>
        <li>Bug Fixing</li>
        <li>Performance Optimization</li>
        <li>Security Updates</li>
        <li>Ongoing Support</li>
      </ul>
    </div>
  );
}

export default SupportService;
