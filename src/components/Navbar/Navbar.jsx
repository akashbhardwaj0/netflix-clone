import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/images/logo.png"
import search_icon from "../../assets/images/search_icon.svg"
import bell_icon from "../../assets/images/bell_icon.svg"
import profile_img from "../../assets/images/profile_img.png"
import caret_icon from "../../assets/images/caret_icon.svg"
import { logout } from '../../firebase'

const Navbar = ()=> {
  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add("nav-dark")
      }else{
        navRef.current.classList.remove("nav-dark")
      }
    })
  },[])
  return (
   
    <div ref = {navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Brows by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="icons" />
        <div className="navbar_profile">
        <img src={profile_img} alt="" className='profile' />
        <img src={caret_icon} alt=""  />
        <div onClick = {()=>{
          logout()
        }} className="dropdown">Sign out of Netflix</div>
          </div>
      </div>
      
    </div>
  )
}

export default Navbar;