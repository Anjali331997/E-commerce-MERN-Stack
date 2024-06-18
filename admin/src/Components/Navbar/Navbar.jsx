import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/Fashionista-logo.png'
import navprofile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlogo} alt="logo" className="nav-logo" />
            <img src={navprofile} alt="Profile-icon" className="nov-profile" />
        </div>
    )
}

export default Navbar