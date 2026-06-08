import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();

  const handleTestDrive = () => {
    navigate("/contact");
  };
  return (
    <>
      <Navbar />
      <Hero />


<section className="section">
  <h2 className="title">Featured Cars</h2>

  <div className="feature-grid">

    <div className="feature-card">
      <img
        src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
        alt="BMW M4"
      />
      <h3>BMW M4</h3>
      <p>Luxury Sports Sedan</p>
    </div>

    <div className="feature-card">
      <img
        src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6"
        alt="Audi A6"
      />
      <h3>Audi A6</h3>
      <p>Premium Comfort Drive</p>
    </div>

    <div className="feature-card">
      <img   src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
  alt="Lamborghini"/>
      <h3>Lamborghini</h3>
      <p>Executive Luxury</p>
    </div>

  </div>
</section>


      {/* Why Choose Us */}

      <section className="why-us">

        <h2 className="title">
          Why Choose Us?
        </h2>

        <div className="why-grid">

          <div className="why-card">
               <h3>Premium Cars</h3>
            <p>Top brands with best quality.</p>
          </div>

          <div className="why-card">
               <h3>Best Price</h3>
            <p>Affordable and competitive rates.</p>
          </div>

          <div className="why-card">
  
            <h3>Easy Finance</h3>
            <p>Flexible EMI options available.</p>
          </div>

          <div className="why-card">
          
            <h3>Service Support</h3>
            <p>24/7 maintenance support.</p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

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
          <p>Brands</p>
        </div>

        <div>
          <h1>10+</h1>
          <p>Years Experience</p>
        </div>

      </section>

      {/* Reviews */}

      <section className="reviews">

        <h2 className="title">
          Customer Reviews
        </h2>

        <div className="review-grid">

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Amazing showroom and excellent service.
            </p>
            <h4>- Rahul</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Best experience purchasing my BMW.
            </p>
            <h4>- Rajesh</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Finance process was very easy.
            </p>
            <h4>- Suresh</h4>
          </div>

        </div>

      </section>

      {/* Contact CTA */}

      <section className="cta">

        <h1>Ready To Drive Your Dream Car?</h1>

        <p>
          Contact us today and book a free test drive.
        </p>

        <button onClick={handleTestDrive}>
          Book Test Drive
        </button>

      </section>

      <Footer />
    </>
  );
}

export default Home;