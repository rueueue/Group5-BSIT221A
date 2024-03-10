import React from "react";

function SearchBar({ searchTerm, handleChange }) {
  return (
    <div className="flex-container-with-filters">
      <input
        placeholder="Looking for more recipes?"
        type="text"
        className="input-container input-style-f62::placeholder"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="red-box-with-centered-content">
        <img src="assets/search.png" />
      </div>
    </div>
  );
}

export default SearchBar;
