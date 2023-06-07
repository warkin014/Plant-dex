import React, { useState } from 'react';
import csvParser from 'csv-parser';




const FertilizerForm = () => {
  const [nitrogen, setNitrogen] = useState('');
  const [potassium, setPotassium] = useState('');
  const [phosphorous, setPhosphorous] = useState('');
  const [soilType, setSoilType] = useState('');
  const [loading, setLoading] = useState(false);
  const [fertilizerName, setFertilizerName] = useState('');
  const [cropType, setCropType] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

   // Simulating a delay of 2 seconds for the loading screen
setTimeout(async () => {
  // Your logic to compare values with the CSV file and get the fertilizer name and crop type
  // Replace the below code with your actual implementation

  const csvFilePath = 'fertilizer_data.csv'; // Replace with the path to your actual CSV file

  try {
    const response = await fetch(`/${csvFilePath}`);
    const text = await response.text();

    console.log('CSV Text:', text);

    const parser = csvParser({ separator: ',' });
    const results = [];

    parser.on('data', (row) => {
      results.push(row);
    });

    parser.on('end', () => {
      console.log('Parsed CSV Data:', results);

      results.forEach((row) => {
        const rowNitrogen = parseInt(row.Nitrogen, 10);
        const rowPotassium = parseInt(row.Potassium, 10);
        const rowPhosphorous = parseInt(row.Phosphorous, 10);
        const rowSoilType = row['Soil Type'];

        console.log('Comparing:', rowNitrogen, rowPotassium, rowPhosphorous, rowSoilType);

        if (
          !isNaN(rowNitrogen) &&
          !isNaN(rowPotassium) &&
          !isNaN(rowPhosphorous) &&
          rowNitrogen === parseInt(nitrogen, 10) &&
          rowPotassium === parseInt(potassium, 10) &&
          rowPhosphorous === parseInt(phosphorous, 10) &&
          rowSoilType === soilType
        ) {
          console.log('Match Found!');
          setFertilizerName(row['Fertilizer Name']);
          setCropType(row['Crop Type']);
        }
      });

      setLoading(false);
    });

    parser.write(text);
    parser.end();
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
}, 2000);

  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="nitrogen">Nitrogen:</label>
          <input
            type="number"
            id="nitrogen"
            value={nitrogen}
            onChange={(e) => setNitrogen(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="potassium">Potassium:</label>
          <input
            type="number"
            id="potassium"
            value={potassium}
            onChange={(e) => setPotassium(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phosphorous">Phosphorous:</label>
          <input
            type="number"
            id="phosphorous"
            value={phosphorous}
            onChange={(e) => setPhosphorous(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="soilType">Soil Type:</label>
          <select
            id="soilType"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          >
            <option value="">Select Soil Type</option>
            <option value="Black">Black</option>
            <option value="Clayey">Clayey</option>
            <option value="Loamy">Loamy</option>
            <option value="Red">Red</option>
            <option value="Sandy">Sandy</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {loading && <div>Loading...</div>}

      {!loading && fertilizerName && (
        <div>
          <h2>Result</h2>
          <p>Fertilizer Name: {fertilizerName}</p>
          <p>Crop Type: {cropType}</p>
        </div>
      )}
    </div>
  );
};

export default FertilizerForm;
