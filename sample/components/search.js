import React from "react";

function SearchBar({ searchTerm, handleChange }) {
  return (
    <div className="flex-container-with-filters">
      <input
        placeholder="🔍   Looking for more recipes?"
        type="text"
        className="input-container input-style-f62::placeholder"
        value={searchTerm}
        onChange={handleChange}
      />
   
   <div className="our-recipes">
      <p>Available Recipes</p>
    </div>
    </div>
    
    
  );
}

export default SearchBar;
