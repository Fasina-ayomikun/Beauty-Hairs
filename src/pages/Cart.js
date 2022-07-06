import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppProvider } from "../context/context";
import { formatPrice } from "../helper";

function Cart() {
  const {
    cart,
    total_people,
    transport_fee,
    total_price,
    toggleBtn,
    removeBtn,
    date,
  } = useAppProvider();

  if (cart.length < 1) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className='empty'>
          <h3>Your Cart is Empty</h3>
          <button className='empty-btn'>
            <Link to='/hairstyles'>fill it</Link>
          </button>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='cart-page'>
        <div className='cart-container'>
          <div className='item-ordered'>
            <div className='cart-header'>
              <h5> </h5>
              <h5>No of staffs needed</h5>
              <h5>No of customers booked</h5>
            </div>
            {cart.map(({ id, price, name, image, amount }) => {
              return (
                <div key={id} className='item'>
                  <div className='item-info'>
                    <img src={image} alt='hairstyle' />
                    <div>
                      <h6>
                        {name}{" "}
                        <ImBin
                          style={{ color: `rgba(225,0,0,0.5)` }}
                          onClick={() => removeBtn(id)}
                        />
                      </h6>
                      <p>{formatPrice(price)}</p>
                      <p>
                        Booked for: <span>{date}</span>
                      </p>
                    </div>
                  </div>
                  <h6 className='staff-no'>{amount * 2}</h6>
                  <div className='controls'>
                    <FaPlus
                      onClick={() => {
                        toggleBtn(id, "increase");
                      }}
                    />
                    <h6>{amount}</h6>
                    <FaMinus
                      onClick={() => {
                        toggleBtn(id, "decrease");
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className='total-items'>
            <div className='total-container'>
              <h5>Total Items Ordered:</h5>
              <h5>{total_people * 2}</h5>
              <h5>{total_people}</h5>
            </div>
          </div>
        </div>
        <div className='checkout-box'>
          <div className='box-container'>
            <div>
              <h5>Subtotal:</h5>
              <p>{formatPrice(total_price)}</p>
            </div>
            <div>
              <h5>Transport Fee:</h5>
              <p>{formatPrice(transport_fee)}</p>
            </div>
            <hr />
            <div>
              <h5>Total Fee:</h5>
              <p>{formatPrice(total_price + transport_fee)}</p>
            </div>
          </div>
          <button className='checkout-btn'>Checkout</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
