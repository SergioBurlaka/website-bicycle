import broorks_1 from "../../assets/img/shop/broorks-1.jpg";
import broorks_2 from "../../assets/img/shop/broorks-2.jpg";
import broorks_3 from "../../assets/img/shop/broorks-3.jpg";
import broorks_4 from "../../assets/img/shop/broorks-4.jpg";
import broorks_5 from "../../assets/img/shop/broorks-5.jpg";
import broorks_6 from "../../assets/img/shop/broorks-6.jpg";
import broorks_7 from "../../assets/img/shop/broorks-7.jpg";
import broorks_8 from "../../assets/img/shop/broorks-8.jpg";

import icon_5 from "../../assets/img/icons/icon-5.png";

const Shop = () => {
  return (
    <div className=" grid  grid-cols-2 md:grid-cols-3  lg:grid-cols-[repeat(6,1fr)] grid-rows-6  md:grid-rows-4  lg:grid-rows-[repeat(2,1fr)] gap-x-0 gap-y-0;">
      <div>
        <img className="object-cover w-full h-full" src={broorks_1} alt="" />
      </div>
      <div>
        <img className="object-cover w-full h-full" src={broorks_2} alt="" />
      </div>
      <div className="row-span-2">
        <img className="object-cover w-full h-full" src={broorks_3} alt="" />
      </div>
      <div className="row-span-2">
        <img className="object-cover w-full h-full" src={broorks_4} alt="" />
      </div>
      <div className="relative  col-span-2">
        <img className="object-cover w-full h-full" src={broorks_5} alt="" />
        <div className="bg-[#5ba68d] absolute top-0 h-full left-0 right-0  bg-opacity-0 hover:bg-opacity-50 ease-in-out  hover:transition-all">
          <div className="h-full flex flex-col justify-center items-center content-center cursor-pointer">
            <img src={icon_5} alt="" />
            <span className="text-white uppercase mt-2.5">Shop now</span>
          </div>
        </div>
      </div>
      <div className="row-start-2 col-span-2">
        <img className="object-cover w-full h-full" src={broorks_6} alt="" />
      </div>
      <div>
        <img className="object-cover w-full h-full" src={broorks_7} alt="" />
      </div>
      <div>
        <img className="object-cover w-full h-full" src={broorks_8} alt="" />
      </div>
    </div>
  );
};

export default Shop;z
