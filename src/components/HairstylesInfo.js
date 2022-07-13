import React from "react";
import DisplayHairstyles from "./DisplayHairstyles";

import { useAppProvider } from "../context/context";
function HairstylesInfo() {
  const { filtered_products, all_products, UpdateFilters, UpdateSort, sort } =
    useAppProvider();

  const categories = [
    "all",
    ...new Set(all_products.map((product) => product.category)),
  ];
  if (filtered_products.length < 1) {
    return (
      <section className='hairstyle' id='hairstyles'>
        <div className='hairstyle-container'>
          <div className='search-input'>
            <input
              type='text'
              placeholder='Search...'
              name='text'
              onChange={UpdateFilters}
            />
            <select
              name='gender'
              id='gender'
              onChange={UpdateSort}
              value={sort}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className='hair-types'>
            <div>
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    name='category'
                    type='button'
                    className='hair-type '
                    value={category}
                    onClick={UpdateFilters}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <section className='hairstyle-contents'>
            <h2 style={{ textAlign: `center` }}>Sorry, no hairstyle found.</h2>
          </section>
        </div>
      </section>
    );
  }

  return (
    <section className='hairstyle' id='hairstyles'>
      <div className='hairstyle-container'>
        <div className='search-input'>
          <input
            type='text'
            placeholder='Search...'
            name='text'
            onChange={UpdateFilters}
          />
          <select name='gender' id='gender' onChange={UpdateSort} value={sort}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div className='hair-types'>
          <div>
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  name='category'
                  type='button'
                  className='hair-type '
                  value={category}
                  onClick={UpdateFilters}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <section className='hairstyle-contents'>
          <div className='hairstyle-contents-container'>
            {filtered_products.map(({ image, name, id }) => {
              return (
                <DisplayHairstyles
                  key={id}
                  image={image}
                  id={id}
                  name={name}
                  book={false}
                />
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}

export default HairstylesInfo;
