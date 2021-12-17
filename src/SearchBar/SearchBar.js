import React from 'react';

const SearchBar = ({ handleChange }) => {
  return (
    <section className="search-bar-section">
      <input type="search" placeholder="Enter nickname" onChange={handleChange} />
    </section>
  );
};

export default SearchBar;
