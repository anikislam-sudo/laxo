import React from 'react';
import { FaSearch } from 'react-icons/fa';
import ReviewComponent from './ReviewComponent'; // Import the individual review component

const ReviewsComponent = () => {
  const reviews = [
    { id: 1, author: 'Beth F.', rating: 5, content: 'I love my line up of IWI vitamins and they are by far the best brand I have found.', date: '5 June 2024', helpful: 0 },
    { id: 2, author: 'Martina Decosta.', rating: 5, content: 'Algae oil is one of the greatest nutrients on the planet. So grateful iwi makes it available in a pure, trustworthy, high quality, natural form! I can\'t believe I am already seeing/feeling a difference.', date: '1 June 2024', helpful: 0 },
    { id: 3, author: 'Beth F.', rating: 5, content: 'I love my line up of IWI vitamins and they are by far the best brand I have found.', date: '23 April 2024', helpful: 0 },
  ];

  return (
    <div className="p-4 mx-auto min-h-screen max-w-7xl">
      {/* Reviews and Filter section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        {/* Left Section: Write a Review Button */}
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="text-4xl font-semibold mb-4">Reviews</h2>
          <button className="btn bg-green text-white w-full md:w-auto">
            Write a Review
          </button>
        </div>
        
        {/* Right Section: Filter Reviews */}
        <div className="w-full md:w-auto flex flex-col md:items-end space-y-4">
          <h2 className="text-lg font-semibold underline">Filter Reviews</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-2">
            <div className="relative w-full md:w-60">
              <input 
                type="text" 
                placeholder="Search" 
                className="input input-bordered text-white bg-green w-full pr-8"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select className="select select-bordered w-full md:w-auto">
              <option>Images & Videos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewComponent key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponent;
