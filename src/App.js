import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <Navbar />

      <div className='App transparentbg'>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
