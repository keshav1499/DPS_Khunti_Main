import React from 'react';

const aboutData = [
  {
    name: "Mamta Mishra",
    description: "Principal",
    image: "https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745058260/WhatsApp_Image_2025-04-19_at_15.52.49_c4ba8b73_ythzzu.jpg", 
    quote: "Welcome to our school community! We are dedicated to fostering a nurturing environment that promotes academic and personal growth. Join us in making a positive impact.",
   
  },
  {
    name: "Dr. Vivek Kumar Singh",
    description: "Director",
    image: "https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745067782/WhatsApp_Image_2025-04-19_at_18.18.51_0720d1e5_ndshqz.jpg", 
    quote: "Together, we can achieve greatness. Let’s work hand-in-hand to shape the future and build a thriving school environment.",
   
  },
  {
    name: "Madhuri Kumari",
    description: "English Teacher",
    image: "https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745058831/download_1_pbmq9g.png", 
    quote: "Teaching is not just about imparting knowledge; it's about inspiring a love for learning and encouraging growth.",
   
  },
  {
    name: "Sweta Kumari",
    description: "Hindi Teacher",
    image: "https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745058831/download_1_pbmq9g.png", 
    quote: "Hindi is the language of our people. Let's unlock its secrets together.",
   
  },
  {
    name: "Piyush Kumar Singh",
    description: "Science Teacher",
    image: "https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745058831/download_f0l9cu.png", 
    quote: "Science is a journey of discovery. Let's explore and learn together.",
    
  },
  {
    name: "Kajal Kumari Singh",
    description: "Primary- All subjects",
    image: "https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745058831/download_1_pbmq9g.png", 
    quote: "I love children",
    
  },
  {
    name: "Shiwangi Kumari",
    description: "Primary- All subjects",
    image: "https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745058831/download_1_pbmq9g.png", 
    quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    
  }
];

function Faculty() {
  const principal = aboutData.find(member => member.description === "Principal");
  const Director = aboutData.find(member => member.description === "Director");
  const otherFaculty = aboutData.filter(member => member.description !== "Principal" && member.description !== "Director");

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className="text-4xl font-bold text-center mb-16 text-green-800">Our Faculty</h1>

     
      <div className="grid md:grid-cols-2 gap-8 mb-16">
       
        {principal && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={principal.image} alt={principal.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{principal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{principal.name}</h2>
                <p className="mt-2 text-gray-500">{principal.quote}</p>
                
              </div>
            </div>
          </div>
        )}

        
        {Director && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={Director.image} alt={Director.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{Director.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{Director.name}</h2>
                <p className="mt-2 text-gray-500">{Director.quote}</p>
              
              </div>
            </div>
          </div>
        )}
      </div>

     
      {otherFaculty.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Our Dedicated Faculty</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((data, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img className="h-56 w-full object-cover" src={data.image} alt={data.name} />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.description}</div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-black">{data.name}</h3>
                  <p className="mt-2 text-gray-500">{data.quote}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faculty;
