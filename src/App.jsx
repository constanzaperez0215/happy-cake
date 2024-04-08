import NavBar from './componentes/NavBar'
import { Route, Routes } from 'react-router-dom'
import {Contacto, Home, NotFound} from './layouts'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contacto/>} />
      <Route path='*'element={<NotFound/>} />
    </Routes>
   
    </>
  )
}

export default App
