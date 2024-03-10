// import React from 'react'
import Navbar from "../Components/Navbar"
import Homebg from "../assets/Home/Homebg.png"
import H1 from "../assets/Home/H1.png"
import H2 from "../assets/Home/H2.png"
import H3 from "../assets/Home/H3.png"
import H4 from "../assets/Home/H4.png"
import Hero from "../Components/Hero"

function Home() {
  return (

    <div className="w-full h-auto">
      <Navbar />


      <div className="h-screen w-full">

        {/* Img area */}

        <div className="relative h-3/4 w-full">
          <img src={Homebg} className=" w-full h-full  " />

          <hr className="absolute border-white border-y-[1px] 
          2xl: w-[70%] bottom-[9.8vh] mx-[15%]    
          xl: w-[70%] bottom-16 mx-[15%]
             lg: w-[70%] lg:bottom-[10vh] mx-[15%]
             md:w-[70%] bottom-[4vh] mx-[15%]
             sm:w-[70%] bottom-[8%] mx-[15%]"
          ></hr>
          <button className="absolute left-1/2 transform -translate-x-1/2 bottom-10 bg-yellow-600 rounded-full font-bold
           w-[238px] h-[56px] text-[28px]
           lg:w-52 lg:h-10 lg:text-[25px] lg:bottom-[calc(100% + 10px)] lg:left-[calc(50% - 36px)]
           md:w-48 md:h-11 md:text-[24px] md:bottom-[calc(100% + 10px)] md:left-[calc(50% - 24px)]
           sm:w-[25%] sm:h-11 sm:text-[12px] sm:bottom-[calc(100% + 10px)]  sm:left-[calc(50% - (25% / 2))]
            ">SHOP NOW</button>
        </div>

        <div className="bg-yellow-700 flex items-center justify-evenly h-72 xl:h-64 md:h-52 sm:h-36">
          <div className="inline-block text-center">
            <img src={H1} className="rounded-full w-40 h-40 lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-16 sm:h-16" />
            <p className="text-2xl font-semibold lg:text-lg md:text-md sm:text-sm">JEANS</p>
          </div>
          <div className="inline-block text-center">
            <img src={H2} className="rounded-full w-40 h-40 lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-16 sm:h-16" />
            <p className="text-2xl font-semibold lg:text-lg md:text-md sm:text-sm">DRESSES</p>
          </div>
          <div className="inline-block text-center">
            <img src={H3} className="rounded-full w-40 h-40 lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-16 sm:h-16" />
            <p className="text-2xl font-semibold lg:text-lg md:text-md sm:text-sm">SHIRTS</p>
          </div>
          <div className="inline-block text-center">
            <img src={H4} className="rounded-full w-40 h-40 lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-16 sm:h-16" />
            <p className="text-2xl font-semibold lg:text-lg md:text-md sm:text-sm">TOPS</p>
          </div>
        </div>


      </div>



      {/* component area */}

      <div className="mt-28 mb-10
      sm:mt-0 sm:mb-10
      md:mt-14 md:mb-8
      lg:mt-24 lg:mb-24
      xl:mt-24 xl:mb-10
      2xl:mt-32 2xl:mb-12">
        <div className="flex h-28 pr-44 pt-12
        sm:h-5 sm:p-3 
        md:h-16 md:pt-6 
        lg:h-12 
        xl:pt- 
        2xl:h-18">



          <div className="w-2/3 flex justify-end
          ">
            <div>
              <p className="text-center font-bold text-3xl 
              sm:text-[16px] sm:leading-3
              md:text-[20px] md:leading-5
              lg:text-[24px] lg:leading-6
              xl:text-[28px] 
              2xl:text-[32px]
              ">Turn heads as you walk</p>
              <p className="text-center text-xl 
              sm:text-[12px] sm:leading-12
              md:text-[14px] md:leading-8
              lg:text-[16px] lg:leading-10
              xl:text-[18px] 
              2xl:text-[20px] 
              ">Plus Size Women's Collection</p>
            </div>
          </div>

          <div className="w-1/3 flex justify-end mt-1
          ">
            <button className="bg-black text-white w-48 h-12 text-md 
            sm:w-20 sm:h-6 sm:text-[9px]
            md:w-32 md:h-8 md:text-[14px]    
            lg:w-40 lg:h-10  lg:text-[17px]
            xl:w-56 xl:text-xl 
            2xl:w-60 2xl:text-2xl">VIEW COLLECTION</button>
          </div>
        </div>
      </div>


      <Hero />


      <div className="mt-0 mb-11
      sm:mt-0 sm:mb-10
      md:mt-2 md:mb-8
      lg:mt-0 lg:mb-24
      xl:mt-0 xl:mb-10
      2xl:mt-0 2xl:mb-12">
        <div className="flex h-28 pr-44 pt-12
        sm:h-5 sm:p-3 
        md:h-16 md:pt-6 
        lg:h-12 
        xl:pt- 
        2xl:h-18">



          <div className="w-2/3 flex justify-end
          ">
            <div>
              <p className="text-center font-bold text-3xl 
              sm:text-[16px] sm:leading-3
              md:text-[20px] md:leading-5
              lg:text-[24px] lg:leading-6
              xl:text-[28px] 
              2xl:text-[32px]
              ">Turn heads as you walk</p>
              <p className="text-center text-xl 
              sm:text-[12px] sm:leading-12
              md:text-[14px] md:leading-8
              lg:text-[16px] lg:leading-10
              xl:text-[18px] 
              2xl:text-[20px] 
              ">Plus Size Women's Collection</p>
            </div>
          </div>

          <div className="w-1/3 flex justify-end mt-1
          ">
            <button className="bg-black text-white w-48 h-12 text-md 
            sm:w-20 sm:h-6 sm:text-[9px]
            md:w-32 md:h-8 md:text-[14px]    
            lg:w-40 lg:h-10  lg:text-[17px]
            xl:w-56 xl:text-xl 
            2xl:w-60 2xl:text-2xl">VIEW COLLECTION</button>
          </div>
        </div>
      </div>

      <Hero />



      {/* <Hero /> */}















      {/* Last area  */}


      <div className="flex justify-center w-full mt-12
      sm:mt-0
      md:mt-8">
        <div className="w-10/12 pl-8 pr-8">
          <h1 className="text-3xl font-bold w-3/4
           sm:text-[16px] sm:leading-6
           md:text-[20px] md:leading-6
           lg:text-[24px] lg:leading-6
           ">Style Beyond Size: Plus Size Fashion Trends</h1>
          <p className="text-lg md:text-xl mt-2
          sm:text-[12px] sm:leading-4
          md:text-[14px] md:leading-4
          lg:text-[16px] lg:leading-4
          ">The world of fashion is constantly evolving and over the years, there has been a style revolution which is inclusive, expansive, and vibrant. Plus size clothing is no longer a niche segment but a thriving part of the global fashion landscape. It’s high time that we debunk the saying ‘fit and fabulous’ and instead replace it with ‘free and fabulous’.</p>
          <p className="text-lg md:text-xl mt-2
          sm:text-[12px] sm:leading-4
          md:text-[14px] md:leading-4
          lg:text-[16px] lg:leading-4
          ">For as long as we can remember, fuller-bodied people have seen fashion or style as a garb to hide their so-called flaws. Instafab Plus is here to redefine the manner in which you look at plus size fashion. We have come up with a range of funky plus size clothing for men and women that shall empower you to use fashion as an expression of your unique personality.</p>
        </div>
      </div>



    </div>


  )
}

export default Home