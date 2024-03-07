// import React from 'react'
import Navbar from "../Components/Navbar"
import Homebg from "../assets/Home/Homebg.png"
import H1 from "../assets/Home/H1.png"
import H2 from "../assets/Home/H2.png"
import H3 from "../assets/Home/H3.png"
import H4 from "../assets/Home/H4.png"

function Home() {
  return (
    <div>
      <Navbar />

      <div className="w-full h-screen">

        <div className="relative">
          <div className="absolute w-full text-center">
            <button className="bg-yellow-600 w-[238px] rounded-3xl h-[56px]">SHOP NOW</button>
            
          </div>
          <div>
            <img src={Homebg} className="w-full h-[536px]" />
          </div>
        </div>
        <div className="h-[266px] bg-yellow-700 flex items-center justify-evenly">
          <div ><img src={H1} className="w-[198px] h-[178px] rounded-full" /></div>
          <div ><img src={H2} className="w-[198px] h-[178px] rounded-full" /></div>
          <div ><img src={H3} className="w-[198px] h-[178px] rounded-full" /></div>
          <div ><img src={H4} className="w-[198px] h-[178px] rounded-full" /></div>
        </div>

        <div className="w-[1246px] h-[217px]">
          <h1>Style Beyond Size : Plus Size Fashion Trends</h1>
          <p>The world of fashion is constantly evolving and over the years, there has been a style revolution which is inclusive, expansive and vibrant. Plus size clothing is no longer a niche segment but a thriving part of the global fashion landscape. It’s high time that we debunk the saying ‘fit and fabulous’ and instead replace it with ‘free and fabulous’. </p>
          <br />
          <p>For as long as we can remember, fuller-bodied people have seen fashion or style as a garb to hide their so-called flaws. Instafab Plus is here to redefine the manner in which you look at plus size fashion. We have come up with a range of funky plus size clothing for men and women that shall empower you to use fashion as an expression of your unique personality.</p>

        </div>

      </div>

    </div>
  )
}

export default Home