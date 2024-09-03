import React from 'react';

const ProductCard = ({ name, price, imageUrl, miniTitle, quantity }) => {
  return (
    <div className="w-96 max-w-sm bg-base-100 rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover object-center w-full h-full sm:h-50 sm:w-50"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-right font-bold italic">BDT {price}</p>
        </div>
        <p className='text-sm font-semibold'>{miniTitle}</p>
        <p className='text-sm font-semibold italic'>{quantity}</p>
      </div>
    </div>
  );
};

export default ProductCard;