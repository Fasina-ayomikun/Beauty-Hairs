import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <form className='newsletter'>
          <div className='form-container'>
            <label htmlFor='newsletter-input'>Sign up for our Newsletter</label>
            <input
              type='email'
              id='newsletter-input'
              placeholder='example@gmail.com'
            />
            <button type='submit'>Subscribe</button>
          </div>
        </form>
        <hr />
        <div className='footer-content'>
          <ul className='footer-address'>
            <li>
              <FiMap /> 12 Kella Street, new york
            </li>
            <li>
              <AiOutlinePhone /> +1 234 234 2434
            </li>
            <li>
              <AiOutlineMail /> example@gmail.com
            </li>
          </ul>
          <h4>
            Copyright &copy; {new Date().getFullYear()}. all rights reserved
          </h4>
          <ul className='social-icons'>
            <li>
              <a href='https://www.instagram.com'>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com'>
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
