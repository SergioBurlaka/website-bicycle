import twitterBig from "../../assets/img/icons/social/twitter-big.png";

import { type SliderContenttype } from "./sliderContent";

const SlickItem = ({ title, time, content }: SliderContenttype) => {
  return (
    <div className="item-container">
      <div className="flex flex-col items-center text-center mt-32 tracking-widest	">
        <div className="mb-9">
          <img src={twitterBig} alt="" />
        </div>
        <h3 className="text-2xl mb-6 font-bold">
          {title}
          <span className="font-light italic">/ {time}</span>
        </h3>
        <p className="mb-24 text-3xl leading-[45px] text-[#848789] italic ">
          {content}
        </p>
      </div>
    </div>
  );
};

export default SlickItem;
