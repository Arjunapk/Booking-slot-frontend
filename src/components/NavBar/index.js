import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
    <>
      <nav className='nav-bar'>
        <img className='nav-bar-logo' src='' alt='website logo' />
        <ul className='nav-bar-link-card'>
          <li className='nav-bar-link-item'>
            <Link className='nav-bar-link' to="/">
              Home
            </Link>
          </li>
          <li className='nav-bar-link-item'>
            <Link className='nav-bar-link' to="/book-slot">
              Book Slot
            </Link>
          </li>
        </ul>
      </nav>
    </>
)

export default NavBar