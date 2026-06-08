import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {

  const inputRef = useRef();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      !user.name ||
      !user.email ||
      !user.phone
    ) {
      alert("Please fill all details");
      return;
    }

    alert("Profile Login Successful!");

    setIsLoggedIn(true);
  };

  return (
    <>
      <Navbar />

      <section className="profile-container">

        <div className="profile-box">

          {!isLoggedIn ? (

            <>
              <h1>👤 Profile Login</h1>

              <form onSubmit={handleLogin}>

                <input
                  ref={inputRef}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone"
                  onChange={handleChange}
                />

                <button type="submit">
                  Login Profile
                </button>

              </form>
            </>

          ) : (

            <div className="dashboard">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="profile"
              />

              <h1>
                Welcome, {user.name}
              </h1>

              <p>
                Your Profile Login Successful
              </p>

              <div className="profile-details">

                <h3>
                  📧 {user.email}
                </h3>

                <h3>
                  📞 {user.phone}
                </h3>

              </div>

            </div>

          )}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Profile;