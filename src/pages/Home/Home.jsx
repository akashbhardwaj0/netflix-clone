import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../../public/hero_banner.jpg'
import hero_title from '../../assets/images/hero_title.png'
import play_icon from '../../assets/images/play_icon.png'
import info_icon from '../../assets/images/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern 
Istanbul embarks on a quest to save the city from an immortal enemy. </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
           
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
       
          
        </div>
        
      </div>
      <div className="more-cards">
         <TitleCards title = {"Blockbuster Movie"} category = {"popular"}/>
         {/* <TitleCards title = {"Only on Netfix"} category = "now_playing"/> */}
         <TitleCards title = {"Upcomming"}category = {"upcoming"}/>
         <TitleCards title = {"Top pics for you"}category = {"top_rated"}/>
         
         
         </div>
         <Footer/>
    </div>
  )
}

export default Home;
