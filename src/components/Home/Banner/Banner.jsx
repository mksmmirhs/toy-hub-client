import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 grid grid-cols-2 gap-4 ">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
          Welcome to Car Toy City!
        </h1>
        <p className="text-xl lg:text-2xl text-white">
          Fuel Your Imagination with Endless Fun!
        </p>
      </div>
      <div>
        <img
          src="https://www.nicepng.com/png/full/64-648246_free-classic-car-clipart-toy-car-clipart.png"
          alt="Car Toy Store Banner"
          className="h-[400px]"
        />
      </div>
    </div>
  );
};

export default Banner;
