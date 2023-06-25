import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
    <>
      <nav className='nav-bar'>
        <div className='nav-logo-card'>
          <img className='nav-bar-logo' src='https://res.cloudinary.com/dexzw88rk/image/upload/v1687688369/PicsArt_03-19-07.18.18_yru54j.png' alt='website logo' />
          <p className='nav-bar-website'>APK</p>
        </div>
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
          <li className='nav-bar-link-item'>
            <Link className='nav-bar-link' to="/book-slot/history">
              History
            </Link>
          </li>
        </ul>
      </nav>
    </>
)

export default NavBar