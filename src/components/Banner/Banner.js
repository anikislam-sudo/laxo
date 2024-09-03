import React from 'react';
import flower from "../../assets/image 242.png";

const Banner = () => {
    return (
        <div className="flex flex-col ">
            {/* Main content */}
            <div className="flex-grow bg-amber-50">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left side with plant illustration */}
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <img className='pl-0 md:pl-[8rem] mx-auto' src={flower} alt="plant illustration" />
                    </div>
                    
                    {/* Right side with consultation offer */}
                    <div className="w-full md:w-1/2 text-start  md:text-left  md:pl-[16rem]  py-4">
                        <p className="text-gray-600 mb-2">Not Sure where to Start?</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Book a Free 25 Minute 
                        </h2>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Consultation
                        </h2>
                        <button className="bg-green text-white px-4 py-2 rounded">
                            Book Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* Pink Banner */}
            <div className="bg-red-400 text-white py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center text-center">
                    <span className='mb-2 text-lg md:mb-0'>Free BD shopping Over <span className='italic text-lg'>BDT1500 </span><br /> Shop Now</span>
                    <span className='mb-2  text-lg md:mb-0'><span className='italic text-lg'>3-5 Day</span> International Shipping <br />Learn More</span>
                    <span className='text-lg'>Rated <span className='italic text-lg'>4.8 out of 5</span> on Trustpilot <br />Read our reviews</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
