import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Introducao from './pages/INTRODUCAO'
import Html from './pages/Html'
import Css from './pages/Css'
import Js from './pages/Js'
import Nodejs from './pages/Nodejs'
import React from './pages/React'

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Introducao />}/>
          <Route path='/html' element={<Html />}/>
          <Route path='/css' element={<Css />}/>
          <Route path='/js' element={<Js />}/>
          <Route path='/nodejs' element={<Nodejs />}/>
          <Route path='/react' element={<React />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
