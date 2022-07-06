import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Btns({ amount, increase, decrease }) {
  return (
    <div className=' single-controls'>
      <FaMinus onClick={decrease} />
      <h6>{amount}</h6>
      <FaPlus onClick={increase} />
    </div>
  );
}

export default Btns;
