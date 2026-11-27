import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        CineShelf
      </NavLink>
      <nav className="navbar__links">
        <NavLink to="/" end className="navbar__link">
          Cerca
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
