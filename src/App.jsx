import { Routes, Route } from "react-router-dom";

/* Layout */
import Navbar from "./components/Navbar/Navbar";

/* Main Pages */
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Legal from "./Pages/Legal";
import Products from "./Pages/Products";



/* Service Detail Pages */
import AiService from "./Pages/ServiceDetails/AiService";
import WebService from "./Pages/ServiceDetails/WebService";
import CloudService from "./Pages/ServiceDetails/CloudService";
import DataService from "./Pages/ServiceDetails/DataService";
import AutomationService from "./Pages/ServiceDetails/AutomationService";
import SupportService from "./Pages/ServiceDetails/SupportService";



function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/products" element={<Products />} />


        


        {/* Service Details Routes */}
        <Route path="/services/ai" element={<AiService />} />
        <Route path="/services/web" element={<WebService />} />
        <Route path="/services/cloud" element={<CloudService />} />
        <Route path="/services/data" element={<DataService />} />
        <Route path="/services/automation" element={<AutomationService />} />
        <Route path="/services/support" element={<SupportService />} />

      </Routes>
    </>
  );
}

export default App;