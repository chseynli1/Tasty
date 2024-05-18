import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header__logo'>
          <h3>Tasty</h3>
        </div>
        <div className='header__list'>
          <ul className='header__list__ul'>
            <Link style={{ textDecoration: "none", color: "white" }} to="/"><li className='slide1__header__list__ul__li'>Home</li></Link>
            <li className='header__list__ul__li'>Menu</li>
            <li className='header__list__ul__li'>Specialties</li>
            <li className='header__list__ul__li'>Reservation</li>
            <li className='header__list__ul__li'>Blog</li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/add"><li className='header__list__ul__li'>Add</li></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/wishlist"><li className='header__list__ul__li'>Wishlist</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header