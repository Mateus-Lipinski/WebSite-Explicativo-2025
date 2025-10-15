import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Introducao from './pages/INTRODUCAO'
import Html from './pages/Html'

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Introducao />}/>
          <Route path='/html' element={<Html />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
