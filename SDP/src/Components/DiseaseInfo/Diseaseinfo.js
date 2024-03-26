import React, { useState } from 'react'
import './Diseaseinfo.css'
import Navbar from '../Navbar'

export default function Diseaseinfo() {
  const diseases = [
    {
      image: process.env.PUBLIC_URL + '/Bacterialspot.jpg',
      name: 'Tomato Bacterial Spot',
      symptoms:
        'Besides small, dark spots with a water-soaked appearance on leaves, bacterial spot may cause lesions to develop a yellow halo. Infected fruits may exhibit raised lesions. In severe cases, foliage may defoliate.',
      causes:
        'This disease is caused by the bacterium Xanthomonas campestris pv. vesicatoria. It spreads through splashing water, particularly during warm and humid conditions. Overhead irrigation and handling of plants while wet can contribute to its spread.',
      pesticide: 'Copper-based fungicides',
    },
    {
      image: process.env.PUBLIC_URL + '/Earlyblight.jpg',
      name: 'Tomato Early Blight',
      symptoms:
        'Circular, dark lesions with concentric rings primarily occur on lower leaves, gradually spreading upward. Leaves may yellow and prematurely defoliate. Early blight can also affect fruits, causing dark lesions and reducing yield quality.',
      causes:
        'The fungus Alternaria solani is responsible for early blight. It overwinters in infected plant debris, and warm, moist conditions favor its development. Improper sanitation practices and crowded planting can facilitate its spread.',
      pesticide: 'Chlorothalonil',
    },
    {
      image: process.env.PUBLIC_URL + '/Leafmold.jpg',
      name: 'Tomato Leaf Mold',
      symptoms:
        'Lower leaves exhibit yellowing and wilting, often starting from the bottom of the plant. Fuzzy white to yellowish-brown mold develops on the undersides of affected leaves, particularly in high-humidity environments.',
      causes:
        ' Leaf mold is caused by the fungus Fulvia fulva (formerly Cladosporium fulvum). It thrives in warm, humid conditions and spreads rapidly in crowded or poorly ventilated growing spaces.',
      pesticide: 'Propamocarb',
    },
    {
      image: process.env.PUBLIC_URL + '/Lateblight.jpg',
      name: 'Tomato Late Blight',
      symptoms:
        'Dark, water-soaked lesions typically begin on the leaves, spreading rapidly during periods of high humidity. White, fuzzy fungal growth may appear on the undersides of leaves, particularly in cool, wet weather. Late blight can cause severe damage to both foliage and fruits.',
      causes:
        'Phytophthora infestans, the same organism responsible for the Irish potato famine, causes late blight. Cool temperatures and moist conditions are ideal for its development, and it can spread rapidly during periods of high humidity.',
      pesticide: 'Mefenoxam',
    },
    {
      image: process.env.PUBLIC_URL + '/Septorialleafspot.jpg',
      name: 'Tomato Septoria Leaf Spot',
      symptoms:
        'Small, circular lesions with dark centers and lighter borders develop primarily on lower leaves. As the disease progresses, lesions may coalesce, leading to extensive defoliation.',
      causes:
        'Septoria leaf spot is caused by the fungus Septoria lycopersici. Warm and humid weather favors its development, and it survives on infected plant debris, making crop rotation and sanitation crucial for management.',
      pesticide: 'Azoxystrobin',
    },
    {
      image: process.env.PUBLIC_URL + '/Spidermites.jpg',
      name: 'Tomato Spider Mites',
      symptoms:
        'Infestation by spider mites results in fine stippling on leaves, giving them a speckled appearance. Leaves may yellow and develop webbing, and severe infestations can cause bronzing and distortion of foliage.',
      causes:
        'Spider mites, particularly the two-spotted spider mite (Tetranychus urticae), are responsible for this damage. They thrive in hot and dry conditions, often becoming problematic in drought-stressed or improperly irrigated plants.',
      pesticide: 'Hexythiazox',
    },
    {
      image: process.env.PUBLIC_URL + '/Targetspot.jpg',
      name: 'Tomato Target Spot',
      symptoms:
        'Circular lesions with a target-like appearance develop on leaves, often with concentric rings of alternating colors. Lesions may coalesce, leading to extensive leaf damage and defoliation.',
      causes:
        'Target spot is caused by the fungus Corynespora cassiicola. Warm, humid conditions favor its development, and the disease spreads through wind-driven rain and splashing water.',
      pesticide: 'Pyraclostrobin',
    },
    {
      image: process.env.PUBLIC_URL + '/Bacterialspot.jpg',
      name: 'Tomato Yellow Leaf Curl Virus ',
      symptoms:
        'Infected plants typically exhibit yellowing and upward curling of leaves, often starting from the lower leaves. Growth may be stunted, and fruit production reduced. Leaves may exhibit a characteristic "V" shape.',
      causes:
        'Tomato yellow leaf curl virus (TYLCV) is caused by a group of related viruses transmitted by whiteflies, particularly the silverleaf whitefly (Bemisia tabaci). It affects tomato plants globally and can cause significant yield losses.',
      pesticide: 'Imidacloprid',
    },
    {
      image: process.env.PUBLIC_URL + '/mosaicVirus.jpg',
      name: 'Tomato Mosaic Virus',
      symptoms:
        'Leaves exhibit mottled or mosaic-like patterns, often with areas of light and dark green. Growth may be stunted, and fruits may exhibit deformities such as mottling or streaking.',
      causes:
        'Tomato mosaic virus (ToMV) is transmitted through contact with infected plant sap or contaminated tools. It can persist in weeds and infected debris. There are several strains of ToMV, each with varying effects on tomato plants.',
      pesticide: 'Acephate',
    },
    // Add similar objects for other diseases
  ]
  const [expandedDisease, setExpandedDisease] = useState(null)

  const toggleExpand = (index) => {
    setExpandedDisease(expandedDisease === index ? null : index)
  }

  return (
    <>
      <Navbar />
      <div className="component">
        <h1 className="heading">Tomato Plant Diseases</h1>
        {diseases.map((disease, index) => (
          <div
            key={index}
            className="disease-container"
            onClick={() => toggleExpand(index)}
          >
            <h2 className="disease-name">{disease.name}</h2>

            <div
              className={`disease-details ${
                expandedDisease === index ? 'show' : ''
              }`}
            >
              <div className="box">
                <div className="disease-imagediv">
                  {disease.image && (
                    <img
                      width={'150px'}
                      height={'150px'}
                      src={disease.image}
                      alt={disease.name}
                      className="disease-image"
                    />
                  )}
                </div>
                <div className="disease-infotext">
                  <p>
                    <strong>Symptoms:</strong> {disease.symptoms}
                  </p>
                  <p>
                    <strong>Causes:</strong> {disease.causes}
                  </p>
                  <p>
                    <strong>pesticide:</strong>
                    {disease.pesticide}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
