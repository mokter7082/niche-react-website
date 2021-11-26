import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImg"
          src="https://www.mobiledokan.com/wp-content/uploads/2020/12/Tecno-Camon-16-Pro.jpg"
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
          className="d-block w-100 sliderImg"
          src="https://frostbite.com.bd/wp-content/uploads/2021/02/3-3.jpg"
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
          className="d-block w-100 sliderImg"
          src="https://diamu.com.bd/wp-content/uploads/2021/03/DJI-Osmo-Mobile-4-3.jpg"
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
