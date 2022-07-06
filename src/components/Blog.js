import React, { useEffect, useState } from "react";
import { blog } from "../data/blog";
import { femaleHairstyle } from "../data/femaledata";

function Blog() {
  const [counter, setCounter] = useState(0);

  const popular = femaleHairstyle.filter(
    (hairstyle) => hairstyle.popular === true
  );

  useEffect(() => {
    setTimeout(() => {
      setCounter((oldCount) => {
        let newCount = oldCount + 1;
        if (newCount > popular.length - 1) {
          newCount = 0;
        }
        return newCount;
      });
    }, 6000);
  }, [counter]);

  const { image } = popular[counter];
  return (
    <section className='blog-section'>
      <div className='blog-container'>
        <div className='recent' data-aos='fade-right'>
          <h3>Recent Blog</h3>
          {blog.map(({ image, title, id, text }) => {
            return (
              <div key={id} className='recent-content'>
                <div className='recent-image'>
                  <img src={image} alt='image' />
                </div>
                <div className='recent-info'>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='popular' data-aos='fade-left'>
          <h3>Popular Hairstyles</h3>
          <div className='popular-container'>
            <img src={image} alt='' />;
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
