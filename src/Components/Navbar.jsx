// import React from 'react'
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  return (
    
    <header className="w-full h-24 grid grid-cols-[10rem,1fr,2fr,1fr,10rem]">
      {/* navbar-logo */}

      <logo className="col-start-2 col-end-3 grid content-center text-2xl	xl:col-start-1 xl:col-end-2 xl:content-center xl:justify-self-center">
        <NavLink to="/">YepCart</NavLink>
      </logo>

      {/* navbar-list-items */}

      <nav className="col-start-3 col-end-4 h-24 flex justify-around items-center xl:hidden " >
       
        <NavLink className={`hover:scale-110 `} to="/" end>Home</NavLink>
        <NavLink className={`hover:scale-110 `} to="men">Men</NavLink>
        <NavLink className={`hover:scale-110 `} to="Women">Women</NavLink>
        <NavLink className={`hover:scale-110 `} to="Blog">Blog</NavLink>
        <NavLink className={`hover:scale-110 `} to="Contact">Contact</NavLink>
       
      </nav>

      {/* navbar-icons */}

      <icons  className="col-start-4 col-end-5 flex justify-end  items-center gap-3 text-xl xl:justify-center xl:col-start-3 xl:col-end-4">
        <NavLink to="PageNotFound">
          <IoMdSearch />
        </NavLink>
        <NavLink to="PageNotFound">
          <HiUser />
        </NavLink>
        <NavLink to="PageNotFound">
          <FaRegHeart />
        </NavLink>
        <NavLink to="PageNotFound">
          <IoCartOutline />
        </NavLink>
      </icons>

      {/* hamburger-menu */}
     <menu onClick={()=> seticons(!icons)} className="col-start-5 col-end-6 grid content-center text-2xl hidden xl:block xl:grid  xl:col-start-5 xl:col-end-6 xl:justify-self-center">
     <GiHamburgerMenu />
     {/* import Hamburger from 'hamburger-react'
     <Hamburger rounded /> */}
     </menu>

    </header>
  )
}

export default Navbar;