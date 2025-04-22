// Marquee.jsx
import React from 'react';

function Marquee({ children }) {
  return (
    <div>
      <div className='bg-green-600 p-1 text-light fw-bold shadow lg:text-2xl text-lg'>
        <marquee behavior="scroll" direction="left">
          {children}
        </marquee>
      </div>
    </div>
  );
}

export default Marquee;
