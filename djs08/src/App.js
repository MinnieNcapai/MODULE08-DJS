// Import React library to create components
import React from "react";
// Import BrowserRouter, Routes, Route, and Link from react-router-dom for routing
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Import page components
import Home from "./pages/Home.jsx"; // Home page component
import About from "./pages/About.jsx" // About page component
import Vans from "./pages/Vans.jsx"; // Vans listing page component
import VansDetails from "./pages/VansDetails.jsx"; // Van details page component

// Define the main App component
export default function App() {
  return (
//{/* Sets up routing for the application */}
    <BrowserRouter>
  {/* Header section with navigation links */}
      <header>
  {/* Logo linking back to the home page */}
        <Link className="site-logo" to="/">#VanLife</Link>
  {/* Navigation bar with links to other pages */}      
        <nav>
          <Link to="/about">About</Link> {/* Link to the About page */}
          <Link to="/vans">Vans</Link>  {/* Link to the Vans listing page */}
        </nav>
      </header>
  {/* Define the routes for the application */}    
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route for the Home page */}
        <Route path="/about" element={<About />} /> {/* Route for the About page */}
        <Route path="/vans" element={<Vans />} /> {/* Route for the Vans listing page */}
        <Route path="/vans/:id" element={<VansDetails />} /> {/* Route for Van details page with dynamic ID */}
      </Routes>
    </BrowserRouter>
  );
}