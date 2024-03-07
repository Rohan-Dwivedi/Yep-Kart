import React from 'react';
import H7 from "../assets/Home/H7.png";

function Hero() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-full max-w-[1292px] h-[556px] justify-evenly flex flex-row flex-wrap">

        {/* First block */}
        <div className="w-[422px] h-[556px] flex flex-col mb-8 sm:mb-0">
          <div><img src={H7} className="w-[422px] h-[439px]" alt="Product" /></div>

          <div className="w-[422px] h-[117px] bg-gray-100">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Over Size Denim Jeans</h1>
              <h1 className="bg-black text-white w-1/6 h-3/4 text-center text-xl font-bold p-1">50%</h1>
            </div>
            <div className="flex justify-center items-center pt-4">
              <h1 className="text-gray-400 text-xl mr-2"><del>Rs. 2,400 </del></h1>
              <h1 className="text-black text-xl">Rs. 1,200</h1>
            </div>
          </div>
        </div>
        {/* End of first block */}

        {/* Second block */}
        <div className="w-[422px] h-[556px] flex flex-col mb-8 sm:mb-0">
          <div><img src={H7} className="w-[422px] h-[439px]" alt="Product" /></div>

          <div className="w-[422px] h-[117px] bg-gray-100">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Over Size Denim Jeans</h1>
              <h1 className="bg-black text-white w-1/6 h-3/4 text-center text-xl font-bold p-1">50%</h1>
            </div>
            <div className="flex justify-center items-center pt-4">
              <h1 className="text-gray-400 text-xl mr-2"><del>Rs. 2,400 </del></h1>
              <h1 className="text-black text-xl">Rs. 1,200</h1>
            </div>
          </div>
        </div>
        {/* End of second block */}

        {/* Third block */}
        <div className="w-[422px] h-[556px] flex flex-col mb-8 sm:mb-0">
          <div><img src={H7} className="w-[422px] h-[439px]" alt="Product" /></div>

          <div className="w-[422px] h-[117px] bg-gray-100">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Over Size Denim Jeans</h1>
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

export default Hero;
