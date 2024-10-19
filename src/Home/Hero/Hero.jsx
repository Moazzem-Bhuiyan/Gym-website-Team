import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[800px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/WyQyxsL/gymh1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40">
          <h1 className="text-8xl text-white font-bold items-center justify-center mt-24 ml-10 ">
            Fitness <br />
            Center <br /> Your Place <br /> of Power{" "}
          </h1>

          <div className="flex gap-10 mt-20 ml-10">
            <button className=" bg-red-500 text-white px-10 py-3 text-lg font-bold">
              Discover Our Gym{" "}
            </button>

            <button className=" bg-white   px-10 py-3 text-lg font-bold">
              More About Us{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
