import React from 'react'
import './Disease.css'

export default function Disease() {
  return (
    <div className="disease-container">
      <div className="first">
        <div className="one">
          <img
            width={'150px'}
            height={'150px'}
            src="https://extension.umn.edu/sites/extension.umn.edu/files/bacterial-symptoms-pepper.jpg"
            alt="image"
          />
          <p>Tomato Bacterial Spot</p>
        </div>

        <div className="two">
          <img
            width={'150px'}
            height={'150px'}
            src="https://apps.lucidcentral.org/pppw_v11/images/entities/tomato_early_blight_211/alternariasol1.jpg"
            alt="image"
          />
          <p>Tomato Early Blight</p>
        </div>

        <div className="three">
          <img
            width={'150px'}
            height={'150px'}
            src="https://content.peat-cloud.com/thumbnails/leaf-mold-of-tomato-1.jpg"
            alt="image"
          />
          <p>Tomato leaf mold</p>
        </div>
      </div>

      <div className="second">
        <div className="four">
          <img
            width={'150px'}
            height={'150px'}
            src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Late_blight_on_tomato_leaf_%287871756748%29.jpg"
            alt="image"
          />
          <p>Tomato Late blight</p>
        </div>

        <div className="five">
          <img
            width={'150px'}
            height={'150px'}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrg2LUWNKiJudQmLDMQyHvbgbQmGkE0LVlYRQqCE3YMw&s"
            alt="image"
          />
          <p>Tomato Septoria leaf spot</p>
        </div>

        <div className="six">
          <img
            width={'150px'}
            height={'150px'}
            src="https://kentuckypestnews.files.wordpress.com/2016/07/spider-mites-fig-11.jpg"
            alt="image"
          />
          <p>Tomato Spider mites</p>
        </div>
      </div>

      <div className="third">
        <div className="seven">
          <img
            width={'150px'}
            height={'150px'}
            src="https://apps.lucidcentral.org/pppw_v10/images/entities/tomato_target_spot_163/img_4795.jpg"
            alt="image"
          />
          <p>Tomato Target Spot</p>
        </div>

        <div className="eight">
          <img
            width={'150px'}
            height={'150px'}
            src="https://www.greenlife.co.ke/wp-content/uploads/2022/04/Tomato-Leaf-Curl.jpg"
            alt="image"
          />
          <p>Tomato Yellow Leaf Curl Virus</p>
        </div>

        <div className="nine">
          <img
            width={'150px'}
            height={'150px'}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuzcZTh5FftUfWZWjjrRTFdYKQb8rex9jesxvh7i6Fu44gI9h8nc30VjPjj3gcJkAnro&usqp=CAU"
            alt="image"
          />
          <p>Tomato mosaic Virus</p>
        </div>
      </div>
    </div>
  )
}
