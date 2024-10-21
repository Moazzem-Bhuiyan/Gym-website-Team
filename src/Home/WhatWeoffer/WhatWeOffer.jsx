import React, { useState } from "react";
import { CgGym } from "react-icons/cg";
import { CiApple } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiBodyBalance } from "react-icons/gi";
import { IoNutritionSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const offer = [
    {
      title: "Nutrition Plan",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita!",
      icon: "apple",
    },
    {
      title: "Daily Workouts",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita!",
      icon: "massal",
    },
    {
      title: "Mordern Equipment",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, expedita!",
      icon: "machine",
    },
  ];

  const icons = {
    apple: <IoNutritionSharp />,
    massal: <GiBodyBalance />,
    machine: <CgGym />,
  };

  return (
    <div className="my-20">
      <h1 className="text-center uppercase font-semibold text-lg">
        What we offer
      </h1>
      <h1 className="text-center font-bold text-6xl">
        The main thing for us is <br /> your result!
      </h1>

      <div className="grid grid-cols-3 gap-5 p-5 w-[80%] m-auto my-10">
        {offer.map((item, index) => (
          <div className="space-y-8" key={index}>
            <div className="flex justify-center text-9xl my-3 text-red-500 bg-gray-100 rounded-tl-[50px] rounded-lg rounded-br-[50px] p-2 w-24 m-auto hover:bg-red-500 hover:text-white">
              {icons[item.icon]}
            </div>

            <h1 className="text-center text-3xl font-bold">{item.title}</h1>
            <div className="px-5">
              <p className="text-center text-gray-400 font-bold mt-2">
                {item.des}
              </p>
            </div>

            <div className="flex justify-center">
              <Link
                onMouseEnter={() => setHoveredIndex(index)} 
                onMouseLeave={() => setHoveredIndex(null)} 
                className="flex items-center space-x-2"
              >
                 {hoveredIndex === index && <span>Read More</span>} 
                <h1>
                  <FaArrowRightLong />
                </h1>
               
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
