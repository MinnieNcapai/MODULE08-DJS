// Import React library to create components
import React from "react";
// Import useParams hook to extract URL parameters
import { useParams } from "react-router-dom";

// Array of van objects representing available van details
const vans = [
  { id: "1", name: "Van A", type: "luxury", description: "A luxury van for your road trips." },
  { id: "2", name: "Van B", type: "simple", description: "A simple van for budget travelers." },
  { id: "3", name: "Van C", type: "rugged", description: "A rugged van for adventure seekers." },
];

// Define the VanDetails functional component
export default function VanDetails() {
// useParams hook extracts the "id" parameter from the URL    
  const { id } = useParams();
// Find the van with the matching ID from the vans array  
  const van = vans.find(v => v.id === id);

// If no van is found, display a "Van not found" message  
  if (!van) {
    return <p>Van not found!</p>;
  }

// Render the details of the selected van
  return (
    <div className="van-details">
      <h1>{van.name}</h1>
      <p>Type: {van.type}</p>
      <p>{van.description}</p>
    </div>
  );
}