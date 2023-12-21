import React from "react";
import "./Styles.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./HealthTipsSlider.css";

const Health_Tips = ({ healthTips }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <div className="tips" id="health_tips">
    //   Health_Tips
    // </div>
    <>
      <div className="health-tips-slider" id="health_tips">
        <div className="tips_header">Daily Health Tips </div>
        <Slider {...sliderSettings}>
          {healthTips.map((tip, index) => (
            <div key={index} className="health-tip-slide">
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
              <p>{tip.more}</p>
            </div>
          ))}
        </Slider>
        {/* <Carousel>
          {healthTips.map((tip, index) => (
            <div key={index} className="health-tip-slide">
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </div>
          ))}
        </Carousel> */}
      </div>
    </>
  );
};

export default Health_Tips;
