import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BsChatLeftDots } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

function App () {
  return (
    <>
      <Navbar />

      <div className='App transparentbg'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Floating CTA */}
        <div className='floating-buttons'>
          <div className='floating-button'>
            <BsChatLeftDots size='1.5rem' color='black' />
          </div>
          <div className='floating-button'>
            <FaFacebook size='1.5rem' color='black' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
