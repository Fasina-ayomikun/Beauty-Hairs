import React from "react";

import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

function DisplayHairstyles({ id, image, name, job, book }) {
  return (
    <div className='trending-content '>
      <img src={image} alt='style' />
      <div className='info'>
        <div className='name'>
          <h4>{name}</h4>
          {job && <p>{job}</p>}
        </div>
        {book ? (
          <Link to={`/hairstyles`}>Book now</Link>
        ) : (
          <Link to={`/hairstyles/${id}`}>
            <ImSearch />
          </Link>
        )}
      </div>
    </div>
  );
}

export default DisplayHairstyles;
