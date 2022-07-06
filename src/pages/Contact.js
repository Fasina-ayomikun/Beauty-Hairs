import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FiMap } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Contact() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='contact-section'>
        <div className='contact-container'>
          <h4>Contact Us</h4>
          <form className='contact-form'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' />

            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' />
            <label htmlFor='msg'>Messsage:</label>
            <textarea name='msg' id='msg'></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
        <div className='contact-info'>
          <div className='contact-info-container'>
            <div className='address'>
              <FiMap />
              <h5>Address</h5>
              <p>12 Kella Street, New York</p>
            </div>
            <div className='address'>
              <AiOutlinePhone />
              <h5>Phone</h5>
              <p>+1 432 654 9787</p>
            </div>
            <div className='address'>
              <AiOutlineMail />
              <h5>Email</h5>
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
