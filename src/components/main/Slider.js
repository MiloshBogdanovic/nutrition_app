import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import imgSlideOne from '../../img/imgSlideOne.jpg';
import imgSlideTwo from '../../img/imgSlideTwo.jpg';
import imgSlideThree from '../../img/imgSlideThree.jpg';
import '../../css/slider.css'

function Slider () {
    return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgSlideOne}
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
      src={imgSlideTwo}
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
      src={imgSlideThree}
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

