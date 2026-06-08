import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import carData from "../data/carData";

function Cars() {
  const [cars] = useState(carData);

  const [searchParams, setSearchParams] =
    useSearchParams();

  const search =
    searchParams.get("search") || "";

  const filteredCars = cars.filter((car) =>
    car.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* Banner */}

      <section className="cars-banner">
        <h1>Explore Our Car Collection</h1>

        <p>
          Discover luxury, performance and
          comfort all in one place.
        </p>
      </section>

      {/* Search */}

      <div className="search-container">

        <input
          type="text"
          placeholder="Search Cars..."
          value={search}
          onChange={(e) =>
            setSearchParams({
              search: e.target.value,
            })
          }
        />

      </div>

      {/* Cars Grid */}

      <div className="cars-grid">

        {filteredCars.map((car) => (

          <div
            className="car-card"
            key={car.id}
          >

            <img
              src={car.image}
              alt={car.name}
            />

            <div className="car-content">

              <h3>{car.name}</h3>

              <p className="price">
                {car.price}
              </p>

              <p className="description">
                {car.description}
              </p>

              <div className="btn-group">

                <Link
                  to={`/car/${car.id}`}
                >
                  <button className="view-btn">
                    View Details
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="book-btn">
                    Book Test Drive
                  </button>
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

      <Footer />
    </>
  );
}

export default Cars;