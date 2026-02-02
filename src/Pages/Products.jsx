import "./Products.css";

function Products() {
  return (
    <section className="products-page">

      <h1 className="products-title">
        Our Products
      </h1>

      <p className="products-subtitle">
        Scalable digital products designed to power your business.
      </p>

      <div className="products-container">

        <div className="product-box">
          <h2>Custom Web Applications</h2>
          <p>
            Tailor-made web applications designed for performance,
            scalability, and business growth.
          </p>
        </div>

        <div className="product-box">
          <h2>Business Software Solutions</h2>
          <p>
            Software systems that streamline operations and improve
            productivity.
          </p>
        </div>

        <div className="product-box">
          <h2>Digital Platforms</h2>
          <p>
            Platforms for e-commerce, SaaS, dashboards, and enterprise
            workflows.
          </p>
        </div>

        <div className="product-box">
          <h2>Cloud-Based Systems</h2>
          <p>
            Secure and scalable cloud-hosted products with modern
            architecture.
          </p>
        </div>

        <div className="product-box">
          <h2>Enterprise Tools</h2>
          <p>
            Internal tools that enhance reporting, automation, and
            decision-making.
          </p>
        </div>

        <div className="product-box">
          <h2>Ongoing Product Support</h2>
          <p>
            Continuous updates, monitoring, and improvements for your
            products.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Products;
