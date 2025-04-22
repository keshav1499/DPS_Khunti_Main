import React from 'react';
import qrcode from '../assets/qr.png';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className='pb-5 bg-green-50 d-flex flex-column justify-content-center pt-5 align-items-center'>
      <h1 className='lg:text-start text-center mb-5 lg:text-5xl text-2xl font-bold'>Admissions are open for academic year 2025-26!</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-[100px]'>
        <div className='w-full flex flex-col gap-5 justify-center items-center'>
          <img src="https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056364/IMG-20250417-WA0024_ukboa3.jpg" alt="QR Code" className='w-[500px] h-[300px] lg:w-[600px] lg:h-[400px] shadow-lg rounded-5' />
          <span className='text-green-700 text-lg'>(Copyright: DPS Khunti)</span>
        </div>
        <div className='w-full flex flex-col gap-2 lg:gap-5 justify-center'>
          <div className='flex text-center lg:text-start flex-col lg:p-0 p-3'>
            <span className='text-xl lg:text-3xl font-bold lg:mb-3'>Admission Timeline</span>
            <span className='lg:text-2xl'>Foundation day: 2nd week of may</span>
            <span className='lg:text-2xl'>Admission office open: April-May 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
