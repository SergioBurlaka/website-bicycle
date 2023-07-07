import React from "react";

import Slider from "react-slick";
import twitterBig from "../../assets/img/icons/social/twitter-big.png";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="m-10">
   <Slider {...settings}>
      <div className="item-container">
        <div className="flex flex-col items-center text-center mt-32 mb-16">
          <div className="mb-9">
            <img src={twitterBig} alt="" />
          </div>
          <h3 className="text-2xl mb-6">
            AOD New York @aod <span>/ 35 min</span>
          </h3>
          <p className="mb-24 text-3xl leading-[45px] text-[#848789]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum
            turpis vitae, pretium ante amet.
          </p>
        </div>
      </div>
      <div className="item-container">
        <div className="flex flex-col items-center">
          <div>
            <img src={twitterBig} alt="" />
          </div>
          <h3>
            AOD New York @aod <span>/ 35 min</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum
            turpis vitae, pretium ante amet.
          </p>
        </div>
      </div>
      <div className="item-container">
        <div className="flex flex-col items-center">
          <div>
            <img src={twitterBig} alt="" />
          </div>
          <h3>
            AOD New York @aod <span>/ 35 min</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum
            turpis vitae, pretium ante amet.
          </p>
        </div>
      </div>
    </Slider>
    </div>
 
  );
};

export default Slick;
