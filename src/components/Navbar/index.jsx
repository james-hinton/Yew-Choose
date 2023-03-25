import { useState } from 'react'
import './style.scss'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')
  return (
    <div className='navbar'>
      <img src='logo.png' alt='logo' className='navbar__logo' />

      <div className='navbar__links'>
        <a
          href='#'
          className={`navbar__link ${
            activeItem === 'home' && 'navbar__link--active'
          }`}
        >
          HOME
        </a>
        {/* Services */}
        <a
          href='#'
          className={`navbar__link ${
            activeItem === 'services' && 'navbar__link--active'
          }`}
        >
          SERVICES
        </a>
        {/* Portfolio */}
        <a
          href='#'
          className={`navbar__link ${
            activeItem === 'portfolio' && 'navbar__link--active'
          }`}
        >
          PORTFOLIO
        </a>
        {/* Contact */}
        <a
          href='#'
          className={`navbar__link ${
            activeItem === 'contact' && 'navbar__link--active'
          }`}
        >
          CONTACT
        </a>
      </div>
    </div>
  )
}

export default Navbar
