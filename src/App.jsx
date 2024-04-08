import NavBar from './componentes/NavBar'
import { Route, Routes } from 'react-router-dom'
import {Contacto, Home, NotFound} from './layouts'
import Footer from './componentes/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='*'element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
