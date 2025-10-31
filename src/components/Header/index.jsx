import './style.css'
import { Link } from 'react-router-dom'

function Header() {
    
    return (
        <header>
            <h1>WebSite Explicativo</h1>
            <nav>
                <Link to={'/'}>Introdução</Link>
                <Link to={'/html'}>HTML</Link>
                <Link to={'/css'}>CSS</Link>
                <Link to={'/js'}>JS</Link>
                <Link to={'/nodejs'}>NodeJs</Link>
                <Link to={'/react'}>React</Link>
            </nav>
        </header>
    )
}

export default Header