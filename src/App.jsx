import {} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'

import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import Contatos from './Contatos'
import Produtos from './Produtos'
import Queijos from './Queijos'
import QuemSomos from './QuemSomos'
import Unidades from './Unidades'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Contatos" element={<Contatos/>}/>
      <Route path="Produtos" element={<Produtos/>}/>
      <Route path="Queijos" element={<Queijos/>}/>
      <Route path="QuemSomos" element={<QuemSomos/>}/>
      <Route path="Unidades" element={<Unidades/>}/>




        
      
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
