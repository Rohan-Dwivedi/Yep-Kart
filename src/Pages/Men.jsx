import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero2"

function Men() {
  return (
    <div className="w-full h-auto">
      <Navbar />

      {/* Page Name */}
      <div className="h-[75px] w-full bg-customGray mb-10 flex ">
        <p className="text-2xl flex justify-start items-center ml-14 
          sm:ml-5 sm:text-xl 
          md:ml-4 md:text-xl    
          lg:ml-4 lg:text-2xl 
          xl:ml-5 xl:text-2xl 
          2xl:ml-6 2xl:text-2xl">
          Home | Men
        </p>
      </div>

      <div className="h-[150px] w-full flex justify-start 
    sm:w-full sm:h-[80px] sm:text-[9px] 
          md:w-full md:h-[90px] md:text-[14px]    
          lg:w-full lg:h-[100px]  lg:text-[17px]
          xl:w-full xl:h-[120px] xl:text-xl 
          2xl:w-full 2xl:text-2xl">
        <button className="bg-black text-white font-bold text-[20px] w-[120px] h-[50px] rounded-md ml-[125px] mt-5 
          sm:w-[80px] sm:h-[30px] sm:text-[9px] sm:ml-[20px] sm:mt-0
          md:w-[80px] md:h-[40px] md:text-[14px] md:ml-[20px] md:mt-0 
          lg:w-[100px] lg:h-[45px]  lg:text-[17px] lg:ml-[20px] lg:mt-0
          xl:w-[110px] xl:text-xl xl:h-[40px] xl:ml-[20px] xl:mt-0
          2xl:w-[120px] 2xl:text-2xl 2xl:h-[45px] 2xl:ml-[30px]">FILTER</button>
      </div>

      {/* section1 */}



      <Hero />



      {/* Section2 */}
      <div className=" h-32 mt-12
      sm:h-14 sm:mt-4
      md:h-20 md:mt-6
      lg:h-24 lg:mt-8
      xl:h-28 xl:mt-10
      2xl:h-32 2xl:mt-12
      ">
              <p className="text-center font-bold text-3xl 
              sm:text-[16px] sm:leading-3
              md:text-[20px] md:leading-5
              lg:text-[24px] lg:leading-6
              xl:text-[28px] 
              2xl:text-[32px]
              ">Oversized Hoodie For men</p>
              <p className="text-center text-xl 
              sm:text-[12px] sm:leading-12
              md:text-[14px] md:leading-8
              lg:text-[16px] lg:leading-10
              xl:text-[18px] 
              2xl:text-[20px] 
              ">All Size Men's Collection</p>
      </div>


      <Hero />








      {/* Section3 */}
      <div className=" h-32 mt-12
      sm:h-14 sm:mt-4
      md:h-20 md:mt-6
      lg:h-24 lg:mt-8
      xl:h-28 xl:mt-10
      2xl:h-32 2xl:mt-12
      ">
              <p className="text-center font-bold text-3xl 
              sm:text-[16px] sm:leading-3
              md:text-[20px] md:leading-5
              lg:text-[24px] lg:leading-6
              xl:text-[28px] 
              2xl:text-[32px]
              ">Oversized Hoodie For men</p>
              <p className="text-center text-xl 
              sm:text-[12px] sm:leading-12
              md:text-[14px] md:leading-8
              lg:text-[16px] lg:leading-10
              xl:text-[18px] 
              2xl:text-[20px] 
              ">All Size Men's Collection</p>
      </div>
      <Hero />

    </div>
  )
}

export default Men