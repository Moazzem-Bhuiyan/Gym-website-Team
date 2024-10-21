import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceHome = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="my-20">
      <div className="grid grid-cols-4 gap-10 p-10 w-[80%] m-auto">
        {service.map((item) => (
         <Link to = {`/servicedetails/${item.id}`}>
         
         <div>
            <img className=" relative " src={item.img} alt="" />

            <h1 className=" absolute -mt-20 text-4xl font-bold text-white px-5 ">
              {item.title}
            </h1>
          </div>
         </Link>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <button className="bg-red-500 text-2xl px-10 py-3 text-white font-semibold">
          Our Service
        </button>
      </div>
    </div>
  );
};

export default ServiceHome;
