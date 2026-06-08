import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="service-hero">
        <div className="service-overlay">

          <h1>Premium Car Services</h1>

          <p>
            Experience world-class finance,
            insurance and maintenance solutions.
          </p>

        </div>
      </section>

      {/* Services Cards */}

      <section className="service-section">

        <h2 className="service-title">
          Our Services
        </h2>

        <div className="service-grid">

          <Link
            to="finance"
            className="service-card"
          >
            <h1>💰</h1>

            <h3>Car Finance</h3>

            <p>
              Easy EMI options with
              quick approvals.
            </p>
          </Link>

          <Link
            to="insurance"
            className="service-card"
          >
            <h1>🛡️</h1>

            <h3>Insurance</h3>

            <p>
              Complete insurance coverage
              for your vehicle.
            </p>
          </Link>

          <Link
            to="maintenance"
            className="service-card"
          >
            <h1>🔧</h1>

            <h3>Maintenance</h3>

            <p>
              Professional service and
              repair support.
            </p>
          </Link>

        </div>

      </section>

      {/* Nested Route Output */}

      <section className="service-details">

        <Outlet />

      </section>

      <Footer />
    </>
  );
}

export default Services;