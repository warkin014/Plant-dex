const fs = require('fs');
const csv = require('csv-parser');

const compareValuesWithCSV = (nitrogen, potassium, phosphorous, soilType) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream('predict.csv') 
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        let maxSimilarity = 0;
        let bestMatch = null;

        results.forEach((row) => {
          const rowNitrogen = parseFloat(row.Nitrogen);
          const rowPotassium = parseFloat(row.Potassium);
          const rowPhosphorous = parseFloat(row.Phosphorous);
          const rowSoilType = row['Soil Type'];

          const similarity = calculateSimilarity(
            nitrogen,
            potassium,
            phosphorous,
            soilType,
            rowNitrogen,
            rowPotassium,
            rowPhosphorous,
            rowSoilType
          );

          if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatch = row;
          }
        });

        if (bestMatch) {
          const fertilizerName = bestMatch['Fertilizer Name'];
          const cropType = bestMatch['Crop Type'];
          resolve({ fertilizerName, cropType });
        } else {
          reject(new Error('No matching fertilizer found.'));
        }
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

const calculateSimilarity = (
  inputNitrogen,
  inputPotassium,
  inputPhosphorous,
  inputSoilType,
  rowNitrogen,
  rowPotassium,
  rowPhosphorous,
  rowSoilType
) => {
  // Add your logic to calculate the similarity between input values and row values
  // You can use any similarity measure or algorithm based on your requirements

  let similarity = 0;

  if (inputSoilType === rowSoilType) {
    similarity += 1;
  }

  // Example calculation: absolute difference between input and row values
  similarity -= Math.abs(inputNitrogen - rowNitrogen);
  similarity -= Math.abs(inputPotassium - rowPotassium);
  similarity -= Math.abs(inputPhosphorous - rowPhosphorous);

  return similarity;
};

// Usage example
compareValuesWithCSV(10, 20, 30, 'Loamy')
  .then((result) => {
    console.log('Fertilizer Name:', result.fertilizerName);
    console.log('Crop Type:', result.cropType);
  })
  .catch((error) => {
    console.error(error);
  });
