import './style.css'
import { Link } from 'react-router-dom'

function Header() {
    
    return (
        <header>
            <h1>WebSite Explicativo</h1>
            <nav>
                <Link to={'/'}>Introdução</Link>
                <Link to={'/html'}>HTML</Link>
            </nav>
        </header>
    )
}

export default Header