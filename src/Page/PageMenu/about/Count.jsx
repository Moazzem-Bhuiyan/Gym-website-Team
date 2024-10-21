import React, { useState, useEffect } from 'react';


const Count = () => {
  const [trainers, setTrainers] = useState(0);
  const [exercises, setExercises] = useState(0);
  const [groups, setGroups] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainers((prev) => (prev < 236 ? prev + 1 : 236));
      setExercises((prev) => (prev < 755 ? prev + 10 : 755));
      setGroups((prev) => (prev < 338 ? prev + 5 : 338));
      setClients((prev) => (prev < 1325 ? prev + 20 : 1325));
    }, 50); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pt-11 '>
      <div className=''>
      <div className="count-container">
      <div className="count-box ">
        <h1>{trainers}</h1>
        <p>Trainers</p>
      </div>
      <div className="count-box">
        <h1>{exercises}</h1>
        <p>Exercises</p>
      </div>
      <div className="count-box">
        <h1>{groups}</h1>
        <p>Groups</p>
      </div>
      <div className="count-box">
        <h1>{clients}</h1>
        <p>Clients</p>
      </div>
    </div>
      <div className='back mt-16'>
        <div className='flex items-center h-[400px]'>
        <div>
          <p className=' text-center font-semibold'>sports complex</p>
        <h1 className='text-5xl text-center px-[300px] font-bold'>Transform your daily training routines with the benefits of our gym store</h1>
        <div className='flex justify-center mt-8'>
        <button className="bg-red-500 p-3 px-7">Our Services</button>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Count;
