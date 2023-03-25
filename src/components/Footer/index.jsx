import './style.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__left'>
          <img src='logo.png' alt='logo' className='footer__logo' />
          <p className='footer__text'>
            Copyright © {currentYear} Yew Choose ({' '}
            <a
              target='_blank'
              href='https://find-and-update.company-information.service.gov.uk/company/13106443'
            >
              13106443
            </a>{' '}
            ). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
