import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Finance from "./pages/Finance";
import Insurance from "./pages/Insurance";
import Maintenance from "./pages/Maintenance";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/services" element={<Services />}>
          <Route path="finance" element={<Finance />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="maintenance" element={<Maintenance />} />
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;