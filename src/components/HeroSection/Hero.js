import React from "react";
import img from "../../assets/Frame 48096671.png";

const Hero = () => {
  return (
 <div className="mx-auto py-4  min-h-screen  max-w-7xl">
    <div className=" hero bg-[#677557] ">
  <div className="hero-content flex-col justify-between lg:flex-row">
  <img
              src={img}
              alt="Pharmaceutical Product"
              className=" lg:ml-[-1rem]  lg:my-[-1rem] lg:w-1/2 sm:w-full   "
            />
    <div className="lg:w-1/2 sm:w-full  ">
    <h1 className="text-3xl italic Galliard md:text-5xl text-white  my-4">
              As a certified organic, family-run  pharmaceutical, our Laxfo goes
              directly from us to you <br />—with love.
            </h1>
   
    </div>
  </div>
</div>
</div>
  );
};

export default Hero;
