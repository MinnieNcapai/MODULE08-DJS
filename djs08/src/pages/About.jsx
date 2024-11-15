// Import React library to create components
import React from "react";
// Import background image for the About page
import bgImg from "../assests/images/vancar.jpg";
// Import Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Define the About functional component
export default function About() {
  return (
    <div className="about-page-container">  {/*Container for the entire About page */}    
{/* Hero image displayed at the top of the About page */}
      <img src={bgImg} className="about-hero-image" alt="VanLife Hero" />
{/* Content section for About page text */}
      <div className="about-page-content">
        {/* Main heading */}
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1> 
        {/* Mission statement */}
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p> {/* Mission statement */}
        {/* Team description */}
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p> 
      </div>
       {/* Call-to-action section to prompt users to explore vans */}
      <div className="about-page-cta">
        <h2>Your destination is waiting.<br />Your van is ready.</h2>
       {/* Button linking to the vans page */}
        <Link className="link-button" to="/vans">Explore our vans</Link>
      </div>
    </div>
  );
}