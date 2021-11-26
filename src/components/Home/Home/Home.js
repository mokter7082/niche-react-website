import React from "react";
import Allmobile from "../../Main/Allmobile/Allmobile";
import Favorite from "../../Main/Favorite/Favorite";
import Review from "../../Main/Review/Review";
import Header from "../../Shared/Header/Header";
import Slider from "../../Shared/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Allmobile></Allmobile>
      <Favorite></Favorite>
      <Review></Review>
    </div>
  );
};

export default Home;
