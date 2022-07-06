import React from "react";
import DisplayHairstyles from "./DisplayHairstyles";

import { staffs } from "../data/staffs";

function StaffsInfo() {
  return (
    <section className='hairstyle' id='hairstyles'>
      <div className='hairstyle-container'>
        <h4 className='staff-title'>Our Staffs</h4>

        <section className='hairstyle-contents'>
          <div className='hairstyle-contents-container'>
            {staffs.map(({ image, id, name, job }) => {
              return (
                <DisplayHairstyles
                  key={id}
                  image={image}
                  name={name}
                  job={job}
                  book={true}
                />
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}

export default StaffsInfo;
