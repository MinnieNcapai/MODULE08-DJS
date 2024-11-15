// Import React library for creating components
import React from "react";
// Import Link for navigation and useSearchParams for managing URL query parameters
import { Link, useSearchParams } from "react-router-dom";

// Hardcoded array of van objects representing available vans
const vans = [
  { id: "1", name: "Van A", type: "luxury" },  // Luxury van
  { id: "2", name: "Van B", type: "simple" },  // Simple van
  { id: "3", name: "Van C", type: "rugged" },  // Rugged van
];

// Define the Vans functional component
export default function Vans() {
 // useSearchParams hook to manage and retrieve query parameters from the URL    
  const [searchParams, setSearchParams] = useSearchParams();
 // Get the current "type" filter value from the query parameters  
  const typeFilter = searchParams.get("type");

// Filter the vans based on the type filter; if no filter, display all vans
  const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans;

  return (
   //{/* Main container for the Vans page */} 
    <div className="vans-page">
   {/* Page heading */}    
      <h1>Explore Our Vans</h1>

   {/* Filter options for selecting the type of van */}
      <div className="filter-options">
   {/* Set query parameter to filter vans by type */}     
        <button onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
        <button onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
        <button onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
   {/* Clear the filter by removing the query parameter */}     
        <button onClick={() => setSearchParams({})}>Clear</button>
      </div>

   {/* List of vans displayed based on the current filter */}   
      <ul>
      {displayedVans.map(van => (
          <li key={van.id}> {/* Each van is rendered as a list item */}
   {/* Link to the detailed page of the specific van */}       
            <Link to={`/vans/${van.id}`}>{van.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}