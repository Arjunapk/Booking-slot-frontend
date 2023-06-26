import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const NavBar = () => {
  const onClickMenu = () => {
    const navBarSm = document.querySelector('.nav-bar-link-card-sm')
    navBarSm.classList.toggle('nav-bar-active')
  }

  const renderNavLinksSm = () => (
    <ul className='nav-bar-link-card-sm'>
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
  )

  
  const renderNavLinksLg = () => (
    <ul className='nav-bar-link-card-lg'>
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
  )

  return (
    <>
      <nav className='nav-bar'>
        <Link to='/' className='nav-logo-card'>
          <img className='nav-bar-logo' src='https://res.cloudinary.com/dexzw88rk/image/upload/v1687688369/PicsArt_03-19-07.18.18_yru54j.png' alt='website logo' />
          <p className='nav-bar-website'>APK</p>
        </Link>
        <button type='button' className='btn btn-outline menu-button' onClick={onClickMenu}>
          <GiHamburgerMenu />
        </button>
        {renderNavLinksLg()}
      </nav>
      {renderNavLinksSm()}
    </>
  )
}

export default NavBar