import Slider from "react-slick";

import { sliderContent } from "./sliderContent";

import SliderItem from "./SlickItem";

const Slick = () => {
  const settings = {
    customPaging: () => (
      <div
        style={{
          width: "14px",
          height: "14px",
          border: "2px #a9afb3 solid",
          borderRadius: "100%",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      ></div>
    ),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="mb-24">
      <Slider {...settings}>
        {sliderContent.map((item) => (
          <SliderItem key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
