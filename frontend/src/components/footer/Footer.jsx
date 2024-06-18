import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/Fashionista-logo.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pinterest_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer_logo" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Offices</li>
            <li>Products</li>
            <li>About</li>
            <li>Conatct</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="instagram" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="pinterest" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="whatsapp" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer