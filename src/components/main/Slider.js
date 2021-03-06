import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import picOne from '../../img/pdf/pic1.png';
import picTwo from '../../img/pdf/pic2.png';
import picThree from '../../img/pdf/pic3.png';
import '../../css/slider.css'

function Slider () {
    return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={picOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={picTwo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={picThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default Slider;

