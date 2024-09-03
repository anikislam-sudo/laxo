import React, { useState } from "react";
import {  useDispatch } from "react-redux";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import img1 from "../../assets/Frame 48096642.png";
import img2 from "../../assets/Frame 48096643.png";
import img3 from "../../assets/Frame 48096644.png";
import img4 from "../../assets/Frame 48096645.png";
import img5 from "../../assets/Frame 48096646.png";
import { Link } from "react-router-dom";

const Product = () => {

  const [selectedSize, setSelectedSize] = useState("100ml");
  const [selectedFlavor, setSelectedFlavor] = useState("Orange");
  const [currentImage, setCurrentImage] = useState(0); // Track selected image
  const [thumbnailIndex, setThumbnailIndex] = useState(0); // Track visible thumbnails
  const [selectedOption, setSelectedOption] = useState("subscribe");
  const dispatch = useDispatch();
  

  const product = {
    name: "Liposomal Vitamin C",
    price: 4332.23,
    images: [
      "https://i.ibb.co/nPk5PYK/Frame-48096607.png",
      "https://i.ibb.co/t8T7KJX/Frame-48096621.png",
      "https://i.ibb.co/gRfYFX6/Frame-48096622.png",
      "https://i.ibb.co/yqr0xrg/Frame-48096620.png",
      "https://i.ibb.co/MVdYkyv/Frame-48096619.png",
    ],
    sizes: ["100ml", "200ml", "300ml"],
    flavors: ["Orange", "Blue Berry", "Lime"],
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        size: selectedSize,
        flavor: selectedFlavor,
        quantity: 1,
        images: product.images[currentImage],
      })
    );
  };

  const handlePrevious = () => {
    if (thumbnailIndex > 0) {
      setThumbnailIndex(thumbnailIndex - 1);
    }
  };

  const handleNext = () => {
    if (thumbnailIndex < product.images.length - 1) {
      setThumbnailIndex(thumbnailIndex + 1);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="container p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link src="/">Home</Link>
              </li>
              <li>
              <Link src="/">Vitamin C Supplements</Link>
              </li>
            </ul>
          </div>
          <p className="italic Galliard lg:pr-5 font-normal underline">
            Add to Wishlist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Big Image Display */}
            <div className="w-full mb-4">
              <img
                src={product.images[currentImage]}
                alt="Selected Product"
                className="w-full object-cover"
              />
            </div>

            {/* Thumbnail Slider */}
            <div className="flex items-center justify-between">
              <button
                className={`btn rounded-full btn-gray-500 ${
                  thumbnailIndex === 0 ? "btn-disabled" : ""
                }`}
                onClick={handlePrevious}
                disabled={thumbnailIndex === 0}
              >
                <FaArrowLeft />
              </button>
              <div className="flex flex-1 items-center justify-around overflow-x-auto">
                {product.images
                  .slice(thumbnailIndex, thumbnailIndex + 4)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 cursor-pointer ${
                        index + thumbnailIndex === currentImage
                          ? "border-2 border-primary"
                          : ""
                      }`}
                      onClick={() => setCurrentImage(index + thumbnailIndex)} // Image click swaps large image
                    />
                  ))}
              </div>
              <button
                className={`btn btn-gray-500 rounded-full ${
                  thumbnailIndex + 4 >= product.images.length
                    ? "btn-disabled"
                    : ""
                }`}
                onClick={handleNext}
                disabled={thumbnailIndex + 4 >= product.images.length}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-thin mb-4 Galliard italic">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <Link src="/" className="ml-2 text-sm text-green">
                See all reviews
              </Link>
            </div>
            <p className="text-2xl Galliard italic mb-4">
              BDT {product.price.toFixed(2)}
            </p>
            <p className="mb-4">
              Liposomal Vitamin C is an advanced form of Vitamin C encapsulated
              within liposomes, which are tiny fat-like particles that enhance
              its absorption and bioavailability in the body.
            </p>
            <p className="mb-4">
              This delivery method allows for more efficient cellular uptake,
              ensuring that higher levels of Vitamin C reach the bloodstream and
              tissues.
            </p>
            <p className="mb-4">
              It provides potent antioxidant support, boosts the immune system,
              promotes collagen production, and enhances skin health. Liposomal
              Vitamin C is ideal for those seeking maximum benefits from their
              Vitamin C supplementation.
            </p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Select Size</h3>
              <div className="flex space-x-4">
                {" "}
                {/* Changed to flex and space-x-2 */}
                {product.sizes.map((size, index) => (
                 <button
                 key={size}
                 className={`btn ${
                   selectedSize === size
                     ? "btn-active bg-btn-active text-white"
                     : "bg-gray-200 text-black"
                 }`}
                 onClick={() => setSelectedSize(size)}
               >
                 {size}
               </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2">Select Flavor</h3>
              <div className="flex space-x-2">
                {product.flavors.map((flavor) => (
                  <div key={flavor} className="flex  items-center">
                    <input
                      type="radio"
                      id={flavor}
                      name="flavor"
                      value={flavor}
                      checked={selectedFlavor === flavor}
                      onChange={() => setSelectedFlavor(flavor)}
                      className="mr-2  text-green "
                    />
                    <label htmlFor={flavor} className="cursor-pointer  ">
                      {flavor}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn bg-green btn-block text-white"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {/* Additional details below Add to Cart button */}
            <div className="mt-4">
              <p>
                Pickup available at our{" "}
                <strong className="italic">22 Bistro Place, Banani</strong>
              </p>
              <p className="text-gray-500">Usually ready in 2-4 days</p>
              <div className="border-t border-gray-200 my-4"></div>

              {/* Subscribe & Save 10% Section */}
              <div
                className={`bg-gray-100 p-4 rounded cursor-pointer ${
                  selectedOption === "subscribe"
                    ? "bg-gray-100"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedOption("subscribe")}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`text-${
                      selectedOption === "subscribe" ? "black" : "gray-400"
                    } font-bold`}
                  >
                    Subscribe & Save 10%
                  </p>
                  <p
                    className={`text-${
                      selectedOption === "subscribe" ? "black" : "gray-400"
                    } font-bold text-xl mt-2`}
                  >
                    BDT 800
                  </p>
                </div>
                <p
                  className={`text-${
                    selectedOption === "subscribe" ? "black" : "gray-400"
                  }`}
                >
                  FREE SHIPPING + Cancel anytime
                </p>
                <p
                  className={`text-${
                    selectedOption === "subscribe" ? "black" : "gray-400"
                  }`}
                >
                  YOUR SUBSCRIPTION PERKS
                </p>
              </div>

              <div className="border-t border-gray-200 "></div>

              {/* One Time Purchase Section */}
              <div
                className={`bg-gray-100 p-4 rounded cursor-pointer ${
                  selectedOption === "oneTime"
                    ? "bg-gray-100"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedOption("oneTime")}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`text-${
                      selectedOption === "oneTime" ? "black" : "gray-400"
                    } font-bold`}
                  >
                    One Time Purchase
                  </p>
                  <p
                    className={`text-${
                      selectedOption === "oneTime" ? "black" : "gray-400"
                    } font-bold text-xl mt-2`}
                  >
                    BDT 200
                  </p>
                </div>
                <p
                  className={`text-${
                    selectedOption === "oneTime" ? "black" : "gray-400"
                  }`}
                >
                  or four interest-free payments of BDT 20 with sezzle
                </p>
              </div>
            </div>

            <div className=" flex flex-wrap items-center justify-between gap-4 mt-4 ">
              <img src={img1} alt="" srcset="" />
              <img src={img2} alt="" srcset="" />
              <img src={img3} alt="" srcset="" />
              <img src={img4} alt="" srcset="" />
              <img src={img5} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
