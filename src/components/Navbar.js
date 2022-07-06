import React from "react";
import { NavLink } from "react-router-dom";
import image from "../Images/Logo.png";
import { FiAlignJustify } from "react-icons/fi";
import { BsFillPersonDashFill, BsFillPersonPlusFill } from "react-icons/bs";
import { useAppProvider } from "../context/context";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { openSidebar, cart } = useAppProvider();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <img src={image} alt='Beauty Hairs' className='logo' />
        <ul className='nav-links'>
          <li className='nav-link'>
            <NavLink to='/home' activeclasname='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/about' activeclasname='active'>
              About
            </NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/hairstyles' activeclasname='active'>
              Hairstyles
            </NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/staffs' activeclasname='active'>
              Staffs
            </NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/contact' activeclasname='active'>
              Contact
            </NavLink>
          </li>
          {cart.length < 1 ? null : (
            <li className='nav-link'>
              <NavLink to='/cart' activeclasname='active'>
                Cart
              </NavLink>
            </li>
          )}
          <li className='nav-link'>
            {isAuthenticated ? (
              <BsFillPersonDashFill
                className='login-icon'
                onClick={() => logout({ returnTo: window.location.origin })}
              />
            ) : (
              <BsFillPersonPlusFill
                className='login-icon'
                onClick={() => loginWithRedirect()}
              />
            )}
          </li>
        </ul>
        <FiAlignJustify className='toggle-btn' onClick={openSidebar} />
      </div>
    </nav>
  );
}

export default Navbar;
