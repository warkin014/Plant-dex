import React, { useState } from 'react';
import '../styles/fertilizerform.css'
import { blue } from '@material-ui/core/colors';

function App() {
  const [npkValues, setNpkValues] = useState({
    nitrogen: '',
    phosphorous: '',
    potassium: ''
  });
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNpkValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Nitrogen', npkValues.nitrogen);
    formData.append('Phosphorous', npkValues.phosphorous);
    formData.append('Potassium', npkValues.potassium);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.text();
        setResult(result);
      } else {
        console.error('Prediction failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='form-container'>
      <h2>Fertilizer Recommender</h2>
      <form onSubmit={handleSubmit}>
        <label>
        <div className='paras'>Nitrogen:</div>
          <input
            type="number"
            name="nitrogen"
            value={npkValues.nitrogen}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        
        <label>
        <div className='paras'>Phosphorous:</div>
          <input
            type="number"
            name="phosphorous"
            value={npkValues.phosphorous}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />

        <label>
        <div className='paras'>Potassium:</div>
          <input
            type="number"
            name="potassium"
            value={npkValues.potassium}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />

        <input type="submit" value="Predict" />
      </form>
      {result && <p className='result'>Result: {result}</p>}
    </div>
  );
}

export default App;
