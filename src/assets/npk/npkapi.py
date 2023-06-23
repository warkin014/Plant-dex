from flask import Flask, request
from flask_cors import CORS, cross_origin
import joblib

app = Flask(__name__)
CORS(app)
# Load the trained model
model = joblib.load('./model/classifier1.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the input values from the request
    Nitrogen = float(request.form.get('Nitrogen'))
    Potassium = float(request.form.get('Potassium'))
    Phosphorous = float(request.form.get('Phosphorous'))

    # Perform the prediction
    result = model.predict([[Nitrogen, Potassium, Phosphorous]])

    # Map the prediction to the corresponding fertilizer type
    if result[0] == 0:
        result = 'TEN-TWENTY SIX-TWENTY SIX'
    elif result[0] == 1:
        result = 'Fourteen-Thirty Five-Fourteen'
    elif result[0] == 2:
        result = 'Seventeen-Seventeen-Seventeen'
    elif result[0] == 3:
        result = 'TWENTY-TWENTY'
    elif result[0] == 4:
        result = 'TWENTY EIGHT-TWENTY EIGHT'
    elif result[0] == 5:
        result = 'DAP'
    else:
        result = 'UREA'

    return result

if __name__ == '__main__':
    app.run()
