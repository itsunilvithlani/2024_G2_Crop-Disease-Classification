import React from 'react'
import './info.css'
import Block from './Block'
const cardsData = [
  {
    title: 'Image Acquisition',
    content:
      'Our leaf disease detection process begins with the collection of high-quality images of plant leaves. Farmers and researchers can upload images directly to our platform for immediate analysis.',
  },
  {
    title: 'Data Preprocessing',
    content:
      'Once the images are uploaded, our system undergoes a preprocessing stage to enhance the quality of the data. This step includes tasks such as noise reduction, image normalization, and color correction.',
  },
  {
    title: 'Machine Learning Models',
    content:
      'The heart of our leaf disease detection system lies in the application of machine learning models. Trained on vast datasets, these models recognize patterns and features indicative of various plant diseases.',
  },
  {
    title: 'Convolutional Neural Networks (CNNs)',
    content:
      'Our use of CNNs allows us to effectively capture spatial hierarchies in leaf images, recognizing intricate patterns and structures not discernible to the human eye for high accuracy in disease identification.',
  },
  {
    title: 'Feature Extraction',
    content:
      'As machine learning models analyze the images, they extract relevant features like color variations, texture details, and lesion arrangements, allowing for a comprehensive analysis of plant health.',
  },
  {
    title: 'Classification and Diagnosis',
    content:
      'The system classifies the plant as healthy or diseased, providing additional information on the specific disease type. This diagnosis is crucial for farmers and researchers to take prompt action.',
  },
]
const Info = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className="info">
          <div className="heading">
            <h1>How It Works?</h1>
          </div>
          <div className="detail">
            <div className="f">
              <img src="Phoneicon.png" height={'80px'} width={'60px'} />
              <h3>Click a pic</h3>
              <h5>Take a picture of your plant leaf</h5>
            </div>
            <div className="s">
              <img src="upload.png" height={'80px'} width={'80px'} />
              <h3>Upload on web</h3>
              <h5>Visit DrPlant site and upload your image</h5>
            </div>
            <div className="t">
              <img src="more.png" height={'80px'} width={'70px'} />
              <h3>Get Final Report</h3>
              <h5>
                DrPlant analyzes your Leaf image and displays reports for you
              </h5>
            </div>
          </div>
        </div>
        <div className="HIW"></div>
        <div className="Content">
          <h1>Understanding the Background of DrPlant</h1>
          <div className="HIW"></div>
          <div className="card-container">
            {cardsData.map((card, index) => (
              <Block key={index} title={card.title} content={card.content} />
            ))}
          </div>

          <p></p>
        </div>
      </div>
    </>
  )
}

export default Info
