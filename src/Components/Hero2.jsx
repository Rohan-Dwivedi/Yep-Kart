import React from 'react';
import H7 from "../assets/Home/H7.png";

function Hero2() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-[1400px] h-[565px] gap-4 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 sm:h-[350px] sm:w-[550px]  lg:w-[1400px]">
        
        {/* First block */}
        <div className="flex flex-col mb-8 hover:shadow-lg ">
          <div><img src={H7} className="w-full h-[439px] sm:h-[200px] " alt="Product" /></div>

          <div className="w-full h-[117px] bg-cardGray sm:h-[140px]">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Regular Fit Denim Jacket</h1>
              <h1 className="bg-black text-white w-1/6 h-3/4 text-center text-xl font-bold p-1 sm:w-1/3">50%</h1>
            </div>
            <div className="flex justify-center items-center pt-4">
              <h1 className="text-gray-400 text-xl mr-2"><del>Rs. 2,400 </del></h1>
              <h1 className="text-black text-xl">Rs. 1,200</h1>
            </div>
          </div>
        </div>
        {/* End of first block */}
        
        {/* Second block */}
        <div className="flex flex-col mb-8 hover:shadow-lg">
          <div><img src={H7} className="w-full h-[439px] sm:h-[200px]" alt="Product" /></div>

          <div className="w-full h-[117px] bg-cardGray sm:h-[140px]">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Regular Fit High Neck</h1>
              <h1 className="bg-black text-white w-1/6 h-3/4 text-center text-xl font-bold p-1 sm:w-1/3">50%</h1>
            </div>
            <div className="flex justify-center items-center pt-4">
              <h1 className="text-gray-400 text-xl mr-2"><del>Rs. 2,400 </del></h1>
              <h1 className="text-black text-xl">Rs. 1,200</h1>
            </div>
          </div>
        </div>
        {/* End of second block */}

        {/* Third block */}
        <div className="flex flex-col mb-8 hover:shadow-lg md:hidden sm:hidden lg:hidden">
          <div><img src={H7} className="w-full h-[439px] sm:h-[200px]" alt="Product" /></div>

          <div className="w-full h-[117px] bg-cardGray">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Regular Fit SweatShirt</h1>
              <h1 className="bg-black text-white w-1/6 h-3/4 text-center text-xl font-bold p-1">50%</h1>
            </div>
            <div className="flex justify-center items-center pt-4">
              <h1 className="text-gray-400 text-xl mr-2"><del>Rs. 2,400 </del></h1>
              <h1 className="text-black text-xl">Rs. 1,200</h1>
            </div>
          </div>
        </div>
        {/* End of third block */}
        
       </div>
    </div>
    
  );
}

export default Hero2;
