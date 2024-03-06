// import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Discount from "./Pages/Discount";
import Login from "./Pages/Login";
import Men from "./Pages/Men";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Wishlist from "./Pages/Wishlist";
import Women from "./Pages/Women";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import ProductDetail from "./Components/ProductDetail";



const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Discount' element={<Discount/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/Hero' element={<Hero/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
        </Routes> 
        </Router>
  )
}

export default App