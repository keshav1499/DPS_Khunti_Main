import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-16 text-green-800">Student Life at DPS Khunti</h1>

      <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Extracurricular Activities</h2>
        <p className="text-xl text-gray-600 text-center mb-8">
          Our students engage in a variety of extracurricular activities including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Music', 'Dance', 'Drama', 'Art', 'Sports', 'Robotics', 'Debate Club', 'Science Club'].map((activity, index) => (
            <div key={index} className="bg-green-100 rounded-lg p-4 text-center">
              <span className="text-lg font-medium text-green-700">{activity}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Clubs and Societies</h2>
        <p className="text-xl text-gray-600 text-center mb-8">
          Students can join various clubs and societies to explore their interests:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Literary Society', 'Environmental Club', 'Astronomy Club', 'Coding Club'].map((club, index) => (
            <div key={index} className="bg-green-100 rounded-lg p-4 text-center">
              <span className="text-lg font-medium text-green-700">{club}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Achievements</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {[
              { name: 'Aarav Sharma', achievement: 'Winner of National Level Math Olympiad' },
              { name: 'Meera Nair', achievement: 'Gold Medalist in Jharkhand State Swimming Championship' },
              { name: 'Tech Warriors Club', achievement: 'Winners of Inter-School Robotics Competition' }
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                <span className="font-semibold text-gray-800">{item.name}:</span>
                <span className="ml-2 text-gray-600">{item.achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Student Council</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              role: 'President',
              name: 'Ishita Verma',
              grade: 'Grade 12',
              description: 'Ishita leads the student council with a vision to enhance student participation and foster leadership at all levels.'
            },
            {
              role: 'Vice President',
              name: 'Rohan Das',
              grade: 'Grade 11',
              description: 'Rohan actively coordinates events and ensures smooth execution of all council activities.'
            },
            {
              role: 'Secretary',
              name: 'Sneha Gupta',
              grade: 'Grade 10',
              description: 'Sneha manages documentation and communication for the council, maintaining clarity and order.'
            }
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{member.role}</h3>
              <p className="text-lg text-gray-800 mb-1">{member.name}</p>
              <p className="text-md text-gray-600 mb-4">{member.grade}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Students;
