import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/Header.css"

const Header = () => {
  return (
    <div>
      <nav className='navbar_landingPage'>
        <ul>
          <li className="brand">Orgin</li>
          <div className="nav-links">
            <li>
              <NavLink to={'/home'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/blogpost'}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to={'/profile'}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={'/login'}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to={'/operation'}>
                Operation
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
