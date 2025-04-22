import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-green-800">Delhi Public School, Khunti</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing young minds and shaping future leaders since 2025
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-green-700">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At DPS Khunti, we are dedicated to fostering an environment of academic excellence, creativity, and holistic development. Affiliated with the CBSE curriculum, our state-of-the-art facilities and passionate faculty ensure a quality education that empowers students to reach their full potential.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056367/WhatsApp_Image_2025-04-17_at_18.08.47_6996adee_tlwpah.jpg" 
              alt="DPS Khunti Campus"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-green-700 text-center">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2025 in Khunti, Delhi Public School, Khunti aims to become a premier institution of academic excellence. With Principal Mamta Mishra at the helm, we aspire to cultivate future-ready citizens through a nurturing and dynamic learning environment driven by innovation and values.
          </p>
        </div>

        <div className="mt-20 text-center">
          <Link to="/events" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
            Explore Our Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
