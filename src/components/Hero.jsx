import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/cars");
  };

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Drive Your Dream Car</h1>

        <p>
          Premium Cars. Luxury Experience.
        </p>

        <button onClick={handleExplore}>
          Explore Collection
        </button>

      </div>

    </section>
  );
}

export default Hero;