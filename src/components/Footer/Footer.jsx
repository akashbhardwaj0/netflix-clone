import React from 'react'
import "./Footer.css"
import facebook_icon from "../../assets/images/facebook_icon.png"
import instagram_icon from "../../assets/images/instagram_icon.png"
import twitter_icon from "../../assets/images/twitter_icon.png"
import youtube_icon from "../../assets/images/facebook_icon.png"

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrence</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="service-code copyright-text">Service Code</p>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
      
    </div>
  )
}
