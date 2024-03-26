import React, { useState, useEffect } from 'react'
import './Image.css' // Import the CSS
import { Link } from 'react-router-dom'
import AWS from 'aws-sdk'

const ImageUpload = () => {
  AWS.config.update({
    accessKeyId: 'AKIAQ3EGRFLLQ5HRCUO3',
    secretAccessKey: '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',
    region: 'ap-south-1',
  })

  const s3 = new AWS.S3()
  const bucketName = 'userlogindisease'

  const defaultImageURL = process.env.PUBLIC_URL + '/insert.jpg' // Replace with the actual path
  const [selectedImage, setSelectedImage] = useState(null)
  const [predictions, setPredictions] = useState(null)
  const [imageLabels, setImageLabels] = useState([])
  const [index, setIndex] = useState()
  const [lable, setlable] = useState()

  const handleImageClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.name = 'myImage'
    input.accept = 'image/*'
    input.onchange = (event) => {
      const file = event.target.files[0]
      setSelectedImage(file)
    }
    input.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleRemove = () => {
    setSelectedImage(null)
    setPredictions(null) // Clear predictions when removing image
  }

  const handlePredict = () => {
    console.log('15')
    if (!selectedImage) return
    const formData = new FormData()
    formData.append('file', selectedImage)

    const userDirectoryKey = `user_directories/${localStorage.getItem(
      'email',
    )}/`

    // Generate a unique file key for the uploaded image
    const fileKey = `${userDirectoryKey}${Date.now()}_${selectedImage.name}`

    const params = {
      Bucket: bucketName,
      Key: fileKey,
      Body: selectedImage,
    }

    fetch('http://localhost:3005/predict', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.predictions && data.predictions.length > 0) {
          let maxIndex = 0
          let maxValue = data.predictions[0][0]
          for (let i = 1; i < data.predictions[0].length; i++) {
            if (data.predictions[0][i] > maxValue) {
              maxValue = data.predictions[0][i]
              maxIndex = i
            }
          }
          let lable = ''
          if (maxIndex == 0) {
            lable = 'Bacterial_spot'
          } else if (maxIndex == 1) {
            lable = 'Early_blight'
          } else if (maxIndex == 2) {
            lable = 'Late_blight'
          } else if (maxIndex == 3) {
            lable = 'Leaf_Mold'
          } else if (maxIndex == 4) {
            lable = 'Septoria_leaf_spot'
          } else if (maxIndex == 5) {
            lable = 'Spider_mites Two-spotted_spider_mite'
          } else if (maxIndex == 6) {
            lable = 'Target_Spot'
          } else if (maxIndex == 7) {
            lable = 'Tomato_Yellow_Leaf_Curl_Virus'
          } else if (maxIndex == 8) {
            lable = 'Tomato_mosaic_virus'
          } else if (maxIndex == 9) {
            lable = 'Healthy'
          }
          console.log('this is email:', localStorage.getItem('email'))
          console.log('Lable of the predection is ', lable)
          console.log('Index of the maximum value:', maxIndex)
          setPredictions(data.predictions[0])
          setIndex(maxIndex)
          setlable(lable)

          const s3Params = {
            Bucket: bucketName,
            Key: fileKey,
            Body: selectedImage,
            Metadata: {
              PredictedLabel: lable,
            },
          }
          // Upload the image to S3
          s3.putObject(s3Params, (err, data) => {
            if (err) {
              console.error('Error uploading image to S3:', err)
              return
            }
            const uploadedLocation = `https://${bucketName}.s3.amazonaws.com/${fileKey}`
            console.log('Image uploaded to S3:', uploadedLocation)
            // Do any additional logic after image upload if needed
          })
        } else {
          console.log('No predictions found in the response')
        }
      })
      .catch((error) => console.error('Error:', error))
  }

  const fetchUserImagesAndLabels = () => {
    const userDirectoryKey = `user_directories/${localStorage.getItem(
      'email',
    )}/`

    // List objects in the S3 bucket with the user's directory key as prefix
    s3.listObjectsV2(
      { Bucket: bucketName, Prefix: userDirectoryKey },
      (err, data) => {
        if (err) {
          console.error('Error listing objects in S3:', err)
          return
        }

        // Extract the list of objects from the response data
        const objects = data.Contents

        // Filter objects to only include those that belong to the user
        const userObjects = objects.filter((object) =>
          object.Key.startsWith(userDirectoryKey),
        )

        // Create an array to store image keys and predicted labels
        const imageLabelsArray = userObjects.map((object) => {
          const objectKey = object.Key
          const label =
            object.Metadata && object.Metadata['x-amz-meta-predictedlabel'] // Check if metadata exists before accessing the predicted label
          const imageUrl = `https://${bucketName}.s3.amazonaws.com/${objectKey}` // Construct image URL
          console.log('Image URL:', imageUrl) // Log the image URL for debugging
          return { imageUrl, label: label || 'Label not available' }
        })

        // Update the state with the image URLs and predicted labels
        setImageLabels(imageLabelsArray)
      },
    )
  }

  useEffect(() => {
    fetchUserImagesAndLabels()
  }, [])

  const handleClickFunction = () => {
    // Construct the user directory key
    const userDirectoryKey = `user_directories/${localStorage.getItem(
      'email',
    )}/`

    // List objects in the S3 bucket with the user's directory key as prefix
    s3.listObjectsV2(
      { Bucket: bucketName, Prefix: userDirectoryKey },
      (err, data) => {
        if (err) {
          console.error('Error listing objects in S3:', err)
          return
        }

        // Extract the list of objects from the response data
        const objects = data.Contents

        // Filter objects to only include those that belong to the user
        const userObjects = objects.filter((object) =>
          object.Key.startsWith(userDirectoryKey),
        )

        // Iterate over user's objects and display their keys and labels
        userObjects.forEach((object) => {
          // Extract the key and label from the object
          const objectKey = object.Key
          const label =
            object.Metadata && object.Metadata['x-amz-meta-predictedlabel'] // Check if metadata exists before accessing the predicted label

          // Display the key and label (you can customize this part to display images if needed)
          console.log('Image Key:', objectKey)
          console.log('Predicted Label:', label)
        })
      },
    )
  }

  return (
    <>
      {/* <div className="image-upload-container">
        <h2>User Image History</h2>
        <div className="image-list">
          {imageLabels.map((imageLabel, index) => (
            <div key={index} className="image-item">
              <img
                src={`https://${bucketName}.s3.amazonaws.com/${imageLabel.key}`}
                alt="User Image"
              />
              <p>Predicted Label: {imageLabel.label}</p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="image-upload-container">
        {selectedImage && (
          <div className="selected-image">
            <img
              alt="not found"
              width={'400px'}
              height={'400px'}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleImageClick}>Upload</button>
          </div>
        )}

        {!selectedImage && (
          <div className="default-image" onClick={handleImageClick}>
            <img
              alt="default"
              width={'400px'}
              height={'400px'}
              src={defaultImageURL}
            />
          </div>
        )}

        <br />
        <br />

        <input
          type="file"
          name="myImage"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />

        {selectedImage && (
          <div className="selected-image1">
            <button onClick={handlePredict}>Predict</button>
            {predictions && (
              <div className="predictions">
                <h3>Predictions:</h3>
                <ul>
                  <Link to="/Diseaseinfo">
                    {/* {predictions.map((prediction, index) => (
                  <li key={index}>{prediction}</li>
                ))} */}
                    {lable}
                  </Link>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default ImageUpload
