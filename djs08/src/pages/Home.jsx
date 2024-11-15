// Import React library to create the Home component
import React from "react";
// Import Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Define the Home functional component
export default function Home() {
  return (
   //{/* Main container for the Home page content */}  
    <div className="home-container">
    {/* Page heading */}     
      <h1>You got the travel plans, we got the travel vans.</h1>
    {/* Page description encouraging users to explore van rentals */}  
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

    {/* Navigation link to the vans page */}
      <Link to="/vans">Find your van</Link>
    </div>
  );
}