import React, { useState } from 'react';

const SearchForm = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSearchSubmit(query);
  };
  return (
    <div className="search-section">
      <form onSubmit={handleSubmit}>
        <label>Image Search</label>
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchForm;
