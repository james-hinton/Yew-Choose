import './style.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src='logo.png' alt='logo' className='navbar__logo' />

      <div className='navbar__links'>
        <a href='#' className='navbar__link'>
          Home
        </a>
        <a href='#' className='navbar__link'>
          About
        </a>
        <a href='#' className='navbar__link'>
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
