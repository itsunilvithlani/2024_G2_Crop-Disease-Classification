from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import tensorflow as tf

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

# Load your deep learning model
model = tf.keras.models.load_model('model_inception.h5')

# Define image width and height
# Update with the appropriate values for your model
img_width, img_height = 224, 224

# Define a function to preprocess the image


def preprocess_image(image):
    # Resize image to match model input size
    image = image.resize((img_width, img_height))
    # Convert image to numpy array
    image_array = np.array(image) / 255.0  # Normalize pixel values
    return image_array

# Define a function to make predictions


def predict_image(image):
    # Preprocess the image
    processed_image = preprocess_image(image)
    # Make prediction using the model
    predictions = model.predict(np.expand_dims(processed_image, axis=0))
    return predictions

# Define a route to handle image uploads


@app.route('/predict', methods=['POST'])
def predict():
    # Check if request contains file
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    # Check if the file is an image
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    if file:
        image = Image.open(file)
        # Make prediction
        predictions = predict_image(image)

        # return jsonify({'predicted_class_index': int(max_index)})
        return jsonify({'predictions': predictions.tolist()})
    else:
        return jsonify({'error': 'Invalid file type'})


if __name__ == '__main__':
    app.run(port=3005, debug=True)