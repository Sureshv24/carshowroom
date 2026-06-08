import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="about-hero">

        <div className="about-overlay">

          <h1>About Our Showroom</h1>

          <p>
            Delivering Premium Cars and Exceptional
            Customer Experiences Since 2015.
          </p>

        </div>

      </section>

      {/* Company Info */}

      <section className="about-section">

        <h2>Who We Are</h2>

        <p>
          Welcome to Car Showroom, your trusted
          destination for premium and luxury vehicles.
          We offer a wide range of cars from leading
          brands such as BMW, Audi, Mercedes-Benz,
          Porsche and many more.

          Our mission is to provide customers with
          quality vehicles, transparent pricing and
          outstanding after-sales support.
        </p>

      </section>

      {/* Mission Vision */}

      <section className="mission-vision">

        <div className="mv-card">
          <h2>🎯 Our Mission</h2>

          <p>
            To provide world-class automotive
            solutions with unmatched customer
            satisfaction.
          </p>
        </div>

        <div className="mv-card">
          <h2>🚀 Our Vision</h2>

          <p>
            To become India's most trusted premium
            automobile dealership.
          </p>
        </div>

      </section>

      {/* Statistics */}

      <section className="about-stats">

        <div>
          <h1>500+</h1>
          <p>Cars Sold</p>
        </div>

        <div>
          <h1>1000+</h1>
          <p>Happy Customers</p>
        </div>

        <div>
          <h1>15+</h1>
          <p>Car Brands</p>
        </div>

        <div>
          <h1>10+</h1>
          <p>Years Experience</p>
        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-choose">

        <h2>Why Choose Us?</h2>

        <div className="choose-grid">

          <div className="choose-card">
            🚗
            <h3>Premium Cars</h3>
            <p>Latest luxury and sports cars.</p>
          </div>

          <div className="choose-card">
            💰
            <h3>Affordable Finance</h3>
            <p>Easy EMI and loan facilities.</p>
          </div>

          <div className="choose-card">
            🛠
            <h3>Service Support</h3>
            <p>24/7 maintenance support.</p>
          </div>

          <div className="choose-card">
            ⭐
            <h3>Trusted Dealer</h3>
            <p>Thousands of happy customers.</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;