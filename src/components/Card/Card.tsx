import React from "react";


type CardType = {
  title: string;
  imgPath: string;
  logo: string
};

const Card = ({ title, imgPath, logo }: CardType) => {
  return (
    <div className=" h-full flex flex-col justify-between">
      <div className=" h-full flex flex-col items-center px-16 pb-12 pt-14">
        <img className=" mx-auto mt-0 mb-8" src={logo} alt="" />

        <h2 className="text-2xl uppercase font-bold mb-6">{title} </h2>
        <p className="pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived.
        </p>
        <div className="bg-[#d7d7d7] w-14 h-0.5"></div>
      </div>

      <div>
        <img className="object-cover w-full h-full" src={imgPath} alt="" />
      </div>
    </div>
  );
};

export default Card;
