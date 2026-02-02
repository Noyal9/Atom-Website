import "./Legal.css";

function Legal() {
  return (
    <section className="legal-page">

      <h1 className="legal-title">
        Legal Information
      </h1>

      <p className="legal-subtitle">
        Policies and guidelines that govern the use of ATOM services.
      </p>

      <div className="legal-container">

        {/* Terms */}
        <div className="legal-box">
          <h2>Terms & Conditions</h2>
          <p>
            By accessing and using ATOM services, you agree to comply with
            our terms and conditions. You must not misuse our services
            or attempt to disrupt our systems.
          </p>
        </div>

        {/* Privacy */}
        <div className="legal-box">
          <h2>Privacy Policy</h2>
          <p>
            We respect your privacy. Your personal information is collected
            only to provide and improve our services and is never sold to
            third parties.
          </p>
        </div>

        {/* Cookies */}
        <div className="legal-box">
          <h2>Cookie Policy</h2>
          <p>
            ATOM uses cookies to enhance user experience, analyze traffic,
            and improve platform performance.
          </p>
        </div>

        {/* Data Protection */}
        <div className="legal-box">
          <h2>Data Protection</h2>
          <p>
            We implement strong security measures to protect your data from
            unauthorized access, alteration, or disclosure.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="legal-box">
          <h2>Disclaimer</h2>
          <p>
            ATOM is not responsible for any indirect damages resulting from
            the use or inability to use our services.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Legal;
