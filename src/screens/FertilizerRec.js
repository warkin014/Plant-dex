// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import FertilizerForm from '../components/FertilizerForm';
// import LoadingScreen from '../components/LoadingScreen';
// import Results from '../components/Results';

// const Fertilizer = () => {
//   const [loading, setLoading] = useState(false);
//   const [fertilizerName, setFertilizerName] = useState('');
//   const [cropType, setCropType] = useState('');
//   const [csvData, setCsvData] = useState('');

//   useEffect(() => {
//     const fetchCsvData = async () => {
//       try {
//         const response = await fetch('/predict.csv');
//         const content = await response.text();
//         setCsvData(content);
//       } catch (error) {
//         console.error('Error fetching CSV data:', error);
//       }
//     };

//     fetchCsvData();
//   }, []);

//   const handleSubmit = (values) => {
//     setLoading(true);

//     // Simulate API call or CSV data processing
//     setTimeout(() => {
//       parseCSV(values);
//       setLoading(false);
//     }, 2000);
//   };

//   const parseCSV = (values) => {
//     Papa.parse(csvData, {
//       header: true,
//       complete: (results) => {
//         const data = results.data;
//         const closestMatch = findClosestMatch(data, values);
//         setFertilizerName(closestMatch['Fertilizer Name']);
//         setCropType(closestMatch['Crop Type']);
//       },
//     });
//   };

//   const findClosestMatch = (data, values) => {
//     const closestMatch = data.find((row) => row['Soil Type'] === values.soilType);
//     return closestMatch || {};
//   };

//   return (
//     <div>
//       <h1>Fertilizer Recommendation</h1>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <>
//           {!fertilizerName && !cropType ? (
//             <FertilizerForm onSubmit={handleSubmit} />
//           ) : (
//             <Results fertilizerName={fertilizerName} cropType={cropType} />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Fertilizer;
