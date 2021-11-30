import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-75 sliderImg mx-auto"
          src="https://i.ibb.co/ftx9fsD/mobile-Slider-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/explore">
            {" "}
            <Button>Explore All Product</Button>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 sliderImg mx-auto"
          src="https://i.ibb.co/9pbsWdb/Mobile-Slider-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Link to="/explore">
            {" "}
            <Button>Explore All Product</Button>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 sliderImg mx-auto"
          src="https://i.ibb.co/fvhn5wr/Mobile-Slider-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <Link to="/explore">
            {" "}
            <Button>Explore All Product</Button>{" "}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
