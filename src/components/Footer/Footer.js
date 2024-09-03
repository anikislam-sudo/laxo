import React from 'react';

import { GoArrowUpRight } from "react-icons/go";

import logo from "../../assets/logo (2).png"
import logo1 from "../../assets/Group 12250.png"
import logo2 from "../../assets/Group 12264.png"
import logo3 from "../../assets/icons.png"
import logo4 from "../../assets/whatsapp 1.png"
import logo5 from "../../assets/Group 12267.png"

const Footer = () => {
  return (
    <footer className="bg-[#1a3e2f] text-white py-3 px-6 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center  mb-4 md:mb-0">
          <img src={logo} alt="LAXFO" className="h-20  ml-14" />
          
        </div>
        
        <div className="flex-grow mx-4  max-w-xl ">
          <p className="text-md text-center pb-2">
            Subscribe to the newsletter and always stay updated on the <br />latest news and exclusive promotions.
          </p>
          <form className="flex items-center pb-4">
            <input 
              type="email" 
              placeholder="Your Email address" 
              className="bg-transparent border-b border-white text-white placeholder-white flex-grow mr-2 pt-3 focus:outline-none text-sm"
            />
            <button type="submit" className="text-white text-sm pr-2">
              Submit 
            </button>
            <GoArrowUpRight></GoArrowUpRight>
          </form>
        </div>

        <div className="flex  flex-col items-center space-x-3 mt-4 md:mt-0">
          <span className="text-md whitespace-nowrap">We are here to help </span>
          <div className="flex  space-x-6 pt-2 ">
           <img className='w-6 h-6' src={logo1} alt="" />
           <img className='w-6 h-6'  src={logo2} alt="" />
           <img className='w-6 h-6'  src={logo3} alt="" />
           <img className='w-6 h-6'  src={logo4} alt="" />
           <img  className='w-6 h-6' src={logo5} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;