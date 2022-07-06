import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Btns from "../components/Btns";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAppProvider } from "../context/context";

import { formatPrice, time } from "../helper";
import { staffs } from "../data/staffs";
function SingleHairstyle() {
  const { id } = useParams();
  const [people, setPeople] = useState(1);

  const {
    single_product_loading,
    single_product,
    addToCart,

    fetchSingleHairstyle,
    setDate,
  } = useAppProvider();

  const { image, name, price, duration, attachment } = single_product;
  const { isAuthenticated } = useAuth0();
  const increase = () => {
    setPeople((oldPerson) => {
      let newPerson = oldPerson + 1;
      if (newPerson > 20) {
        newPerson = 20;
      }
      return newPerson;
    });
  };

  const decrease = () => {
    setPeople((oldPerson) => {
      let newPerson = oldPerson - 1;
      if (newPerson < 2) {
        newPerson = 1;
      }
      return newPerson;
    });
  };
  useEffect(() => {
    fetchSingleHairstyle(id);
  }, [id]);
  if (single_product_loading) {
    return (
      <div className='loading'>
        <hr className='hr1' />
        <hr className='hr2' />
        <hr className='hr3' />
        <hr className='hr4' />
        <hr className='hr5' />
        <hr className='hr6' />
        <hr className='hr7' />
        <hr className='hr8' />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <section className='single-section'>
        <div className='single-container'>
          <button>
            <Link to='/hairstyles'>Go Back</Link>
          </button>
          <div className='single-content'>
            <img src={image} alt={name} className='single-img' />
            <div className='single-info'>
              <h3>{name}</h3>
              <p>
                Price: <span>{formatPrice(price)}</span>
              </p>
              <p>
                Duration: <span>{time(duration)}</span>
              </p>
              <div className='single-cont'>
                <p>Attachments:</p>
                {attachment ? (
                  <input
                    type='checkbox'
                    readOnly
                    name='checkbox'
                    id='checkbox'
                    checked
                  />
                ) : (
                  <input
                    type='checkbox'
                    readOnly
                    disabled
                    name='checkbox'
                    id='checkbox'
                  />
                )}
              </div>
              <div className='single-cont'>
                <p>Schedule Date:</p>
                <input
                  type='date'
                  name='date'
                  id='date'
                  onChange={(e) => setDate(e.target)}
                />
              </div>
              <div className='single-cont'>
                <p>Available Staffs: </p>
                <select name='Anna' className='single-select'>
                  {staffs.map(({ name, id }) => {
                    return (
                      <option key={id} value='Anna'>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <p>
                No of supporting staffs: <span>{people * 2}</span>
              </p>
              <div className='single-cont'>
                <p>No of People: </p>
                <Btns
                  amount={people}
                  increase={increase}
                  decrease={decrease}
                />{" "}
              </div>
              <button
                className='book-btn'
                // onClick={() => addToCart(id, people, single_product)}
              >
                {isAuthenticated ? (
                  <Link
                    to='/cart'
                    onClick={() => addToCart(id, people, single_product)}
                  >
                    {}
                    Book now
                  </Link>
                ) : (
                  "login"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SingleHairstyle;
