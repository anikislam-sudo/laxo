import React from 'react';
import ProductCard from './ProductCard';

const ProductPage = () => {
    const frequentlyBoughtTogether = [
        { name: "Omega-3 Essential",quantity:"100mg", price: 200, miniTitle:"Get brighter brain energy from nourishing fats and key vitamins in this clever blend.",imageUrl: "https://i.ibb.co/kmjjKS6/card-1.png" },
        { name: "Heart",quantity:"200mg", price: 300, miniTitle:"Nourish your heart with clinically studied AlmegaPL® EPA for supporting healthy heart and cardiovascular function",imageUrl: "https://i.ibb.co/N68WZkZ/card-2.png" },
        { name: "Omega-3 Minis", quantity:"300mg",price: 400,miniTitle:"Your favorite omega-3, now in an easier-to-swallow mini size.", imageUrl: "https://i.ibb.co/1GtMPX9/card-3.png" },
        
      ];
      


    return (
        <div className="mx-auto   min-h-screen  max-w-7xl">
        <div className="container mx-auto p-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold  mb-4">Frequently Bought Together</h2>
          <p className='Galliard italic'>In the dynamic world of e-commerce, the "Frequently Bought Together" feature has become a cornerstone of the online shopping experience. This tool leverages the power of data analytics and consumer behavior insights to suggest complementary products that are often purchased in conjunction with the item a customer is viewing. By highlighting these related products, retailers aim to increase sales, improve customer satisfaction, and streamline the shopping process.</p>
          <div className="py-4 flex flex-wrap gap-10">
            {frequentlyBoughtTogether.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          </div>
          </div>
          </div>
    );
};

export default ProductPage;