import React from 'react';

function Main2() {
  const downloadBroucher = () => {
    const anchor = document.createElement('a');
    anchor.href = brochu;
    anchor.download = 'brochure.pdf';
    anchor.click();
  };

  return (
    <div className='pb-5 bg-gradient-to-br from-green-900 to-gray-800'>
      <div className='container'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mt-5 flex flex-col justify-center">
            <span className='text-green-300'>You need to know..</span>
            <h1 className='font-bold text-3xl lg:text-5xl mb-4 text-white'>About DPS Khunti</h1>
            <p className='text-white text-lg lg:text-xl'>
              Delhi Public School, Khunti was established in the year 2025 with a vision to empower young learners through quality education. Affiliated with the CBSE curriculum, our school emphasizes academic rigor, moral integrity, and holistic growth. With modern infrastructure, dedicated faculty, and student-focused programs, DPS Khunti strives to create an environment where every child thrives and becomes a responsible global citizen.
            </p>
            <button className="bg-green-600 hover:bg-green-700 p-2 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-white" onClick={downloadBroucher}>
              Download Brochure
            </button>
          </div>
          <div className="lg:mt-0 mt-5 flex justify-center items-center">
            <a href="https://www.wolverhampton.gov.uk/sites/default/files/2023-01/Job%20ref%203-2023%20SDP%20-%20Recruitment%20brochure.pdf" download="brochure.pdf">
              <img src="https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056363/IMG-20250417-WA0021_byecy9.jpg" className='lg:w-full rounded-lg' alt="Brochure" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
