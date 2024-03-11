import React from 'react';
import H7 from "../assets/Home/H7.png";

function Hero() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-[1200px] h-[565px] gap-1 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 sm:h-[350px] sm:w-[550px]  lg:w-[1400px] sm:pl-2 sm:pr-2 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8 2xl:pl-10 2xl:pr-10">
        
        {/* First block */}
        <div className="flex flex-col mb-8 hover:shadow-lg">
          <div><img src={H7} className="w-full h-[439px] sm:h-[200px] " alt="Product" /></div>

          <div className="w-full h-[117px] bg-gray-100 sm:h-[90px]">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Over Size Denim Jeans</h1>
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

          <div className="w-full h-[117px] bg-gray-100 sm:h-[90px]">
            <div className="flex justify-between items-center h-1/2 pl-2 pr-2">
              <h1 className="w-5/6 font-[400] text-xl">Over Size Denim Jeans</h1>
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

          <div className="w-full h-[117px] bg-gray-100">
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
