import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel"

function HomeCarousel() {
  return (
    <div style={{ display: 'block'}}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://www.srmist.edu.in/sites/placement/files/bann-3.jpg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://www.srmist.edu.in/sites/placement/files/bann-2.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://www.srmist.edu.in/sites/placement/files/bann-1.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeCarousel