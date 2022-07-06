import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero({ image, title }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((oldCount) => {
        let newCount = oldCount + 1;
        if (newCount > image.length - 1) {
          newCount = 0;
        }
        return newCount;
      });
    }, 6000);
  }, [counter]);
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-info' data-aos='fade-right'>
          <h2>Beauty Hairs</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo
            debitis vitae vel velit? Similique, distinctio recusandae aliquid
            eveniet consequuntur omnis doloremque. Quo, at corporis maiores et
            illo ea itaque?
          </p>
          <button className='hero-btn'>
            {title === "View Styles" ? (
              <Link to='/hairstyles'>{title}</Link>
            ) : (
              <a href='#hairstyles'>{title}</a>
            )}
          </button>
        </div>
        <div className='img-container' data-aos='fade-left'>
          <img src={image[counter]} alt='Beauty Hairs' className='hero1' />
        </div>
      </div>
      <div className='dots'>
        {image.map((_, index) => {
          return (
            <div
              key={index}
              className={`${counter === index ? "active-hero-dot" : null}`}
            ></div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
