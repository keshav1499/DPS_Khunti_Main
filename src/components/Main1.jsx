import React from 'react';

function Main1() {
  return (
    <div className='lg:p-5 p-3 d-flex mt-4 mb-5 shadow bg-light flex-column align-items-center' style={{ backgroundColor: "whitesmoke" }}>
      <div className='d-flex flex-column fw-bolder justify-content-center align-items-center'>
        <div className='flex lg:flex-row flex-col items-center justify-center gap-2 w-full lg:p-5 text-center'>
          <span className='text-dark mt-3 text-2xl lg:text-5xl'>Today's Vision</span>
          <span className='text-green-600 text-2xl lg:text-5xl lg:mt-3'>Tomorrow's Technology</span>
        </div>
      </div>
      <hr className='w-full mt-3' />

      {/* Director Section */}
      <div className="container pb-5 w-full grid grid-cols-1 lg:grid-cols-1 mt-5 relative">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2023/02/04/Ornament-frame-PNG-Graphics-59934430-1-1-580x390.png" alt="" className='absolute w-full h-[35rem] top-[-50px] lg:block hidden' />
        <div className='bg-cover bg-center lg:p-[3rem] container lg:w-[1000px] relative z-10'>
          <div className='flex items-center gap-3 justify-start mb-5'>
            <img src="https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745067782/WhatsApp_Image_2025-04-19_at_18.18.51_0720d1e5_ndshqz.jpg" className='shadow rounded-full w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] object-cover' alt="Director" />
            <div className='flex flex-col'>
              <span className='lg:text-2xl text-xl font-bold'>Dr. Vivek Kumar Singh</span>
              <span className='text-sm text-gray-500'>Director</span>
            </div>
          </div>
          <p className='mt-4 text-justify text-lg'>
            It gives me immense pleasure to welcome you to <strong>Delhi Public School, Khunti</strong>, a beacon of learning and innovation. Our vision is to provide students with not only academic excellence but also the values, skills, and resilience needed to thrive in a rapidly evolving world. We are building more than a school—we are cultivating a community where curiosity is encouraged, creativity is nurtured, and leadership is inspired. Let us work together to illuminate young minds and create a future filled with promise and purpose.
          </p>
        </div>
      </div>

      {/* Principal Section */}
      <div className="container pb-5 w-full grid grid-cols-1 lg:grid-cols-1 mt-5 relative">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2023/02/04/Ornament-frame-PNG-Graphics-59934430-1-1-580x390.png" alt="" className='absolute w-full h-[35rem] top-[-50px] lg:block hidden' />
        <div className='bg-cover bg-center lg:p-[3rem] container lg:w-[1000px] relative z-10'>
          <div className='flex items-center gap-3 justify-start mt-10'>
            <img src="https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745058260/WhatsApp_Image_2025-04-19_at_15.52.49_c4ba8b73_ythzzu.jpg" className='shadow rounded-full w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] object-cover' alt="Principal" />
            <div className='flex flex-col'>
              <span className='lg:text-2xl text-xl font-bold'>Mamta Mishra</span>
              <span className='text-sm text-gray-500'>Principal</span>
            </div>
          </div>
          <p className='mt-4 text-justify text-lg'>
            Dear Parents and Students, <br />
            Welcome to <strong>Delhi Public School, Khunti</strong>, established in 2025 with a mission to inspire excellence and empower young minds. As a proud institution affiliated with the CBSE curriculum, we are committed to nurturing future-ready individuals through academic rigor, moral values, and holistic growth. At DPS Khunti, we foster an inclusive, creative, and intellectually stimulating environment supported by passionate educators and modern facilities. We invite you to explore our community and join us in shaping tomorrow’s leaders—today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main1;
