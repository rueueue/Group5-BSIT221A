import { useState } from "react";

function SearchBar() {
  return (
    <div className="flex-container-with-filters">
      <input
        placeholder="Looking for more recipes?"
        type="text"
        className="input-container input-style-f62::placeholder"
      />
      <div className="red-box-with-centered-content">
        <img src="assets/search.png" />
      </div>
    </div>
  );
}

export default SearchBar;
