import React from 'react';
import { Link } from 'react-router-dom'; 

function Marquee({text}) {
  return (
    <div >
      <div className='bg-green-600 p-1 text-light fw-bold shadow lg:text-2xl text-lg' >
        <marquee behavior="scroll" direction="left">
          {text}
        </marquee>
      </div>
    </div>
  )
}

export default Marquee
