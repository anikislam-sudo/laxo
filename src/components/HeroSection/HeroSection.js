import React from "react";
import img from "../../assets/image_238__1_-removebg-preview 1.png";
const HeroSection = () => {
  return (
    <div className=" mx-auto  min-h-screen  max-w-7xl">
      <div className="hero py-6  ">
        <div className="container  flex flex-col md:flex-row-reverse items-center justify-between">
          {/* Left side: Image */}
          <div className="md:w-1/2">
            <img src={img} alt="Hero" className="w-full h-auto object-cover" />
          </div>

          {/* Right side: Accordion */}
          <div className="md:w-1/2 mt-8 md:mt-0 p-4">
       

            <div
              tabIndex={0}
              className="collapse   collapse-plus py-2"
            >
              <div className="collapse-title  text-xl font-medium">
              Benefits
              </div>
              <div className="collapse-content">
              <p>
                  Support healthy aging <br />
                  Boost collagen production <br />
                  Support a healthy immune system <br />
                  PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 +
                  CoQ10.
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className=" border-t border-gray-200 collapse collapse-plus py-2 "
            >
              <div className="collapse-title text-xl font-medium">
              Ingredients
              </div>
              <div className="collapse-content ">
              <p>
                  Support healthy aging <br />
                  Boost collagen production <br />
                  Support a healthy immune system <br />
                  PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 +
                  CoQ10.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className=" border-t border-gray-200 collapse collapse-plus  mb-2  py-2 "
            >
              <div className="collapse-title text-xl font-medium">
              How to Use
              </div>
              <div className="collapse-content">
                <p>
                  Support healthy aging <br />
                  Boost collagen production <br />
                  Support a healthy immune system <br />
                  PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 +
                  CoQ10.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className=" border-t border-gray-200 collapse collapse-plus  mb-2 py-2 "
            >
              <div className="collapse-title text-xl font-medium">
              Cautions
              </div>
              <div className="collapse-content">
                <p>
                  Support healthy aging <br />
                  Boost collagen production <br />
                  Support a healthy immune system <br />
                  PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 +
                  CoQ10.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className=" border-t border-gray-200 collapse collapse-plus  mb-2  py-2"
            >
              <div className="collapse-title text-xl font-medium">
              Shipping and returns
              </div>
              <div className="collapse-content">
                <p>
                  Support healthy aging <br />
                  Boost collagen production <br />
                  Support a healthy immune system <br />
                  PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 +
                  CoQ10.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

//     <div className="collapse collapse-plus ">
//     <input type="radio" name="my-accordion-3" defaultChecked />
//     <div className="collapse-title text-xl font-medium">Benefits</div>
//     <div className="collapse-content">
//       <p>Support healthy aging <br />
//          Boost collagen production <br />
//          Support a healthy immune system <br />
//          PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 + CoQ10.</p>
//     </div>
//   </div>
//   <div className="collapse collapse-plus ">
//     <input type="radio" name="my-accordion-3" />
//     <div className="collapse-title text-xl font-medium">Ingredients</div>
//     <div className="collapse-content">
//     <p>Support healthy aging <br />
//          Boost collagen production <br />
//          Support a healthy immune system <br />
//          PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 + CoQ10.</p>
//     </div>
//   </div>
//   <div className="collapse collapse-plus ">
//     <input type="radio" name="my-accordion-3" />
//     <div className="collapse-title text-xl font-medium">How to Use</div>
//     <div className="collapse-content">
//     <p>Support healthy aging <br />
//          Boost collagen production <br />
//          Support a healthy immune system <br />
//          PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 + CoQ10.</p>
//     </div>
//   </div>
//   <div className="collapse collapse-plus ">
//     <input type="radio" name="my-accordion-3" />
//     <div className="collapse-title text-xl font-medium">Cautions</div>
//     <div className="collapse-content">
//     <p>Support healthy aging <br />
//          Boost collagen production <br />
//          Support a healthy immune system <br />
//          PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 + CoQ10.</p>
//     </div>
//   </div>
//   <div className="collapse collapse-plus ">
//     <input type="radio" name="my-accordion-3" />
//     <div className="collapse-title text-xl font-medium">Shipping and returns</div>
//     <div className="collapse-content">
//     <p>Support healthy aging <br />
//          Boost collagen production <br />
//          Support a healthy immune system <br />
//          PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 + CoQ10.</p>
//     </div>
//   </div>
