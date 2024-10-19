import React from "react";
import pic from "../../assets/choosepic.jpg";

const Chosse = () => {
  return (
    <div>
      <div className=" grid grid-cols-2 gap-5 p-5">
        <div className="img relative">
          <img className=" w-[70%]" src={pic} alt="" />

          <div className="bg-rose-600 text-white w-1/2 p-10  absolute  ml-[350px] -mt-[200px]">
            <h1 className="text-4xl font-bold ">
              Choose Your <br />
              plan <br />
              Trainer{" "}
            </h1>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className=" uppercase font-semibold ">Why Choose Us </h1>
          <h1 className="text-6xl font-bold ">
            Our complex has the best trainers
          </h1>
          <p className="text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque.
          </p>
          <h1 className="text-3xl font-semibold ">
            01. <span>Personal Training</span>
          </h1>{" "}
          <hr />
          <h1 className="text-3xl font-semibold ">
            02. <span>Group Training</span>
          </h1>
          <button className="bg-orange-400 font-bold text-xl text-white px-10 py-5">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="">
          <h1 className="text-[200px] text-gray-100 relative font-bold ">98</h1>
          <h1 className="font-bold text-3xl absolute -mt-[160px] ml-16">
            Programs
          </h1>
        </div>
        

        <div>
          <h1 className="text-[200px] text-gray-100 font-bold relative">65</h1>
          <h1 className="font-bold text-3xl absolute -mt-[160px] ml-16">
            Trainers
          </h1>
        </div>

        <div>
          <h1 className="text-[200px] text-gray-100 font-bold relative">10</h1>
          <h1 className="font-bold text-3xl absolute -mt-[160px] ml-16">
            Years
          </h1>
        </div>

        <div>
          <h1 className="text-[200px] text-gray-100 font-bold relative">15</h1>
          <h1 className="font-bold text-3xl absolute -mt-[160px] ml-16">
            Gyms
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Chosse;
