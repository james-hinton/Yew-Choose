import './style.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__content'>
          <div className='footer__left'>
            <img src='logo.png' alt='logo' className='footer__logo' />
            <p className='footer__text'>
              Copyright © 2021 Yew Choose. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
