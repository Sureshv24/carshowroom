import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Test Drive Request Submitted Successfully!");
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="contact-hero">

        <div className="contact-overlay">

          <h1>Contact Us</h1>

          <p>
            Book a Test Drive or Get More Information
            About Your Dream Car
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="contact-section">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Chennai, Tamil Nadu, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>info@carshowroom.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>Mon - Sat : 9 AM - 8 PM</p>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form-box">

          <h2>Book Test Drive</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              type="text"
              name="car"
              placeholder="Interested Car"
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Book Test Drive
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;