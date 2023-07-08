import Slider from "react-slick";
import twitterBig from "../../assets/img/icons/social/twitter-big.png";

const Slick = () => {
  const settings = {
    customPaging: () => {
      return (
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
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-24">
      <Slider {...settings}>
        <div className="item-container">
          <div className="flex flex-col items-center text-center mt-32 tracking-widest	">
            <div className="mb-9">
              <img src={twitterBig} alt="" />
            </div>
            <h3 className="text-2xl mb-6 font-bold">
              AOD New York @aod
              <span className="font-light italic">/ 35 min</span>
            </h3>
            <p className="mb-24 text-3xl leading-[45px] text-[#848789] italic ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium veniam quod repudiandae amet magnam vero eligendi
              possimus. Repudiandae, qui harum!
            </p>
          </div>
        </div>
        <div className="item-container">
          <div className="flex flex-col items-center text-center mt-32 tracking-widest	">
            <div className="mb-9">
              <img src={twitterBig} alt="" />
            </div>
            <h3 className="text-2xl mb-6 font-bold">
              AOD Los Angeles @lakers
              <span className="font-light italic">/ 17 min</span>
            </h3>
            <p className="mb-24 text-3xl leading-[45px] text-[#848789] italic ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias illum ad nesciunt doloribus? Iste velit minus ullam
              officia magnam quasi commodi ducimus id expedita sapiente! Atque,
              harum fugit?
            </p>
          </div>
        </div>
        <div className="item-container">
          <div className="flex flex-col items-center text-center mt-32 tracking-widest	">
            <div className="mb-9">
              <img src={twitterBig} alt="" />
            </div>
            <h3 className="text-2xl mb-6 font-bold">
              AOD San Francisco @Dough
              <span className="font-light italic">/ 15 min</span>
            </h3>
            <p className="mb-24 text-3xl leading-[45px] text-[#848789] italic ">
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
