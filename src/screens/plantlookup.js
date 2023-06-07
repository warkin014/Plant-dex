import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import PlantResult from '../components/PlantResult';

const Plantlookup = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://perenual.com/api/species-list?key=sk-7klt647f358f107e01167&q=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' , height: '100%' }}>
      <h1 className='page-heading'>Plant Database Lookup</h1>
      <SearchBar onSearch={handleSearch} />
      <div stle={{backgrounColor:"#fff"}}>
      {searchResults.map((plant) => (
        <PlantResult key={plant.common_name} plant={plant} />
      ))}
      </div>
    </div>
  );
};

export default Plantlookup;
