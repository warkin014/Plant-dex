import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClearAndRefresh = () => {
    setSearchTerm('');
    window.location.reload();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClearAndRefresh}>Clear</button>
    </div>
  );
};

export default SearchBar;
