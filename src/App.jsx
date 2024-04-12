import NavBar from './componentes/NavBar'
import { Route, Routes } from 'react-router-dom'
import {Contacto, Home, NotFound} from './layouts'
import Footer from './componentes/Footer'

function App() {

  return (
    <div className='container'>
      <NavBar className="navBar" />
      <Routes className="routes">
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer className="footer" />
    </div>
  )
}

export default App
