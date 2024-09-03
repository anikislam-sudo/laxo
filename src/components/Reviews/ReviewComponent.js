import React from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import vector from "../../assets/Vector.png"
const ReviewComponent = ({ review }) => {
  return (
    <div className="border-b pb-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2">
             <img className='p-3 ' src={vector} alt="" />
          </div>
          <span className="font-semibold italic">{review.author}</span>
        </div>
        <span className="text-sm italic">{review.date}</span>
      </div>
      {/* Star Ratings */}
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
        ))}
        <span className="ml-2 text-gray-600">Great Vitamins</span>
      </div>
      {/* Review Content and Helpful buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <p className="text-gray-800">{review.content}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>Was this helpful?</span>
          <button className="ml-2"><FaThumbsUp /></button>
          <button className="ml-2"><FaThumbsDown /></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
