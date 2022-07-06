import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs";
import { useAppProvider } from "../context/context";
import { useAuth0 } from "@auth0/auth0-react";
function Sidebar() {
  const { closeSidebar, isSidebarOpen, cart } = useAppProvider();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <section
      className={`${isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}`}
    >
      <FaTimes className='close-btn' onClick={closeSidebar} />
      <ul className=' sidebar-links'>
        <li className='sidebar-link'>
          <NavLink to='/home' onClick={closeSidebar} activeclasname='active'>
            Home
          </NavLink>
        </li>
        <li className='sidebar-link'>
          <NavLink to='/about' onClick={closeSidebar} activeclasname='active'>
            About
          </NavLink>
        </li>
        <li className='sidebar-link'>
          <NavLink
            to='/hairstyles'
            onClick={closeSidebar}
            activeclasname='active'
          >
            Hairstyles
          </NavLink>
        </li>
        <li className='sidebar-link'>
          <NavLink to='/staffs' onClick={closeSidebar} activeclasname='active'>
            Staffs
          </NavLink>
        </li>
        <li className='sidebar-link'>
          <NavLink to='/contact' onClick={closeSidebar} activeclasname='active'>
            Contact
          </NavLink>
        </li>

        {cart.length < 1 ? null : (
          <li className='sidebar-link'>
            <NavLink to='/cart' activeclasname='active' onClick={closeSidebar}>
              Cart
            </NavLink>
          </li>
        )}

        <li className='sidebar-link'>
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
    </section>
  );
}

export default Sidebar;
