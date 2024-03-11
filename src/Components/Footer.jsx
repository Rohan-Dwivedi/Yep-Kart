// import React from 'react'
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer bg-black ">
      <div className="sb_footer section padding flex flex-col 	">
        <div className="sb_footer-links flex justify-between items-start flex-row flex-wrap w-full text-left mb-8 ">
          <div className="sb-footer_links_div  w-44 m-4 flex justify-start flex-col text-white">
            <h4 className="text-lg mb-3 cursor-pointer">About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              provident totam eos officiis reiciendis minus.
            </p>
          </div>

          <div className="sb_footer-link-div w-44 m-4 flex justify-start flex-col text-white">
            <h4 className="text-lg mb-3 cursor-pointer">Men's Clothing</h4>
            <NavLink className={`cursor-grab`} to="/men">
              Men's Shirts
            </NavLink>
            <NavLink className={`cursor-grab`} to="/men">
              Men's T-Shirts
            </NavLink>
            <NavLink className={`cursor-grab`} to="/men">
              Men's jeans
            </NavLink>
            <NavLink className={`cursor-grab`} to="/men">
              Men's T-Shirts
            </NavLink>
            <NavLink className={`cursor-grab`} to="/men">
              Men's Shorts
            </NavLink>
            <NavLink className={`cursor-grab`} to="/men">
              Men's Jacket
            </NavLink>
          </div>

          <div className="sb-footer_links_div  w-44 m-4 flex justify-start flex-col text-white">
            <h4 className="text-lg mb-3 cursor-pointer">Women Clothing</h4>
            <NavLink className={`cursor-grab`} to="/Women">
              Women's Shirts
            </NavLink>
            <NavLink className={`cursor-grab`} to="/Women">
              Women's T-Shirts
            </NavLink>
            <NavLink className={`cursor-grab`} to="/Women">
              Women's jeans
            </NavLink>
            <NavLink className={`cursor-grab`} to="/Women">
              Women's Shorts
            </NavLink>
            <NavLink className={`cursor-grab`} to="/Women">
              Women's Jacket
            </NavLink>
          </div>
          <div className="sb-footer_links_div  w-44 m-4 flex justify-start flex-col text-white">
            <h4 className="text-lg mb-3 cursor-pointer">Contact Us</h4>
            <NavLink to="/Home">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </NavLink>
            <NavLink to="/Home">Contact - 0123456789</NavLink>
            <NavLink to="/Home">E-mail - abc@gmail.com</NavLink>
          </div>
          <div className="sb-footer-links_div  w-44 m-4 flex justify-start flex-col ">
            <h4 className="text-lg mb-3 text-white cursor-pointer">
              Socialmedia
            </h4>
            <div className="socialmedia flex flex-row gap-5 text-xl text-white">
              <NavLink className={`hover:scale-125 `} to="/Home">
                <FaFacebook />
              </NavLink>
              <NavLink className={`hover:scale-125 `} to="/Home">
                {" "}
                <FaInstagram />
              </NavLink>
              <NavLink className={`hover:scale-125 `} to="/Home">
                <FaPinterestP />
              </NavLink>
            </div>
          </div>
        </div>
        <hr className="w-full "></hr>
        <div className="sb-footer-below flex flex-row justify-around ">
          <div className="sb-footer-copyright text-white">
            @{new Date().getFullYear()} YepCart. All right reserved.
          </div>
          <div className="sb-footer-below-links flex flex-row gap-3 text-white">
            <NavLink to="/Home">Terms & Conditions</NavLink>
            <NavLink to="/Home">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer