import { Link, Route, Routes } from "react-router-dom";

import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import About from "./Components/About/About.jsx";

// const Categories = () => (
//   <div>
//     <h2>Categories</h2>
//     <p>Browse items by category.</p>
//   </div>
// );

// const Products = () => (
//   <div>
//     <h2>Products</h2>
//     <p>Browse individual products.</p>
//   </div>
// );

export default function App() {
  return (
    <div>
      <nav>
        <ul className="flex justify-evenly">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/products">Products</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
}
