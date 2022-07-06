import React, { useEffect, useState } from "react";

import { ImSearch } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { femaleHairstyle } from "../data/femaledata";
import { maleHairstyle } from "../data/maledate";
function Trending() {
  const [itemsPerPages, setItemsPerPage] = useState(3);
  const [counter, setCounter] = useState(0);

  const trending = femaleHairstyle.filter(
    (hairstyle) => hairstyle.trending === true
  );
  const maletrending = maleHairstyle.filter(
    (hairstyle) => hairstyle.trending === true
  );
  const [data, setData] = useState([trending, maletrending]);
  const [over, setOver] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setOver((old) => {
        let newOver = old + 1;
        if (newOver > data.length - 1) {
          newOver = 0;
        }
        return newOver;
      });
    }, 5000);
  }, [data]);

  const pages = Math.ceil(data[over].length / itemsPerPages);
  const newArray = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPages;
    return data[over].slice(start, start + itemsPerPages);
  });
  const nextSlide = () => {
    setCounter((oldCount) => {
      let newCount = oldCount + 1;
      if (newCount > newArray.length - 1) {
        newCount = 0;
      }

      return newCount;
    });
  };
  const prevSlide = () => {
    setCounter((oldCount) => {
      let newCount = oldCount - 1;
      if (newCount < 0) {
        newCount = newArray.length - 1;
      }

      return newCount;
    });
  };
  useEffect(() => {
    if (window.innerWidth <= 999) {
      setItemsPerPage(2);
    }
    if (window.innerWidth <= 580) {
      setItemsPerPage(1);
    }
  }, [itemsPerPages]);

  return (
    <section className='trending-section'>
      <div className='trending-container'>
        <h3>Trending Styles</h3>
        <div id='contents'>
          <FaChevronLeft className='arrow left' onClick={prevSlide} />

          <div className='trending-contents'>
            {newArray[counter].map(({ id, name, image }) => {
              return (
                <div
                  key={id}
                  className='trending-content content1'
                  data-aos='flip-left'
                >
                  <img src={image} alt='style' />
                  <div className='info'>
                    <h4>{name}</h4>
                    <ImSearch />
                  </div>
                </div>
              );
            })}
          </div>
          <FaChevronRight className='arrow right' onClick={nextSlide} />
        </div>
        <div className='trending-dots'>
          {newArray.map((_, index) => {
            return (
              <div
                key={index}
                className={`${
                  counter === index
                    ? "dot trending-dot1 trending-active"
                    : "dot trending-dot1 "
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Trending;
