import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { reviews } from "../data/blog";
function Reviews() {
  const [itemsPerPages, setItemsPerPage] = useState(2);
  const [counter, setCounter] = useState(0);

  const pages = Math.ceil(reviews.length / itemsPerPages);
  const newArray = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPages;
    return reviews.slice(start, start + itemsPerPages);
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
    if (window.innerWidth <= 788) {
      setItemsPerPage(1);
    }
  }, [itemsPerPages]);
  return (
    <section className='reviews-section'>
      <div className='reviews-container'>
        <h3>Customer testimonial</h3>
        <div className='testimonial-content'>
          <FaChevronLeft className='arrow left' onClick={prevSlide} />
          <div className='testimonials'>
            {newArray[counter].map(({ name, id, image, review }) => {
              return (
                <div key={id} className='testimonial'>
                  <div className='front'>
                    <div className='person-container'>
                      <img src={image} alt={name} />
                    </div>
                    <h4>{name}</h4>
                    <p>{review}</p>
                  </div>
                  <div className='back'>
                    <img src={image} alt={name} className='person' />
                  </div>
                </div>
              );
            })}
          </div>
          <FaChevronRight className='arrow right' onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
