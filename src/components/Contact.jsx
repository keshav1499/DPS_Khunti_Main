import React from 'react';
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material';

function Contact() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
            <div className='relative h-[200vh] bg-cover bg-center' style={{ backgroundImage: "url('https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056358/IMG-20250418-WA0008_glkcuz.jpg')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className="container mx-auto px-6 mt-5 lg:mt-0 lg:mb-0 mb-5">

                        <form
                            name="teacher-recruitment"
                            method="POST"
                            data-netlify="true"
                            className='bg-white bg-opacity-95 max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300'
                            action="/thank-you"
                        >
                            <input type="hidden" name="form-name" value="teacher-recruitment" />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center text-green-800 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400 break-words">
                             Women Teachers Recruitment
                            </h2>
                            <p>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Full Name
                                    <input
                                        type="text"
                                        name="full-name"
                                        className="w-full p-4 mt-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                        required
                                    />
                                </label>
                            </p>

                            <p>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Email Address
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-4 mt-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                        required
                                    />
                                </label>
                            </p>

                            <p>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Phone Number
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full p-4 mt-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                        required
                                    />
                                </label>
                            </p>

                            <p>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Highest Qualification
                                    <input
                                        type="text"
                                        name="qualification"
                                        className="w-full p-4 mt-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                        required
                                    />
                                </label>
                            </p>

                            <p>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Years of Teaching Experience
                                    <input
                                        type="number"
                                        name="experience"
                                        min="0"
                                        className="w-full p-4 mt-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                        required
                                    />
                                </label>
                            </p>

                            <p>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Subjects You Can Teach (comma separated)
                                    <input
                                        type="text"
                                        name="subjects"
                                        className="w-full p-4 mt-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                                        required
                                    />
                                </label>
                            </p>

                            <p className="mb-6">
                                <label className="flex items-center text-gray-700 font-semibold">
                                    <input
                                        type="checkbox"
                                        name="gender-confirmation"
                                        className="mr-2 h-5 w-5 text-green-500 rounded focus:ring-green-400"
                                        required
                                    />
                                    I confirm that I identify as female and meet the gender requirements for this position
                                </label>
                            </p>

                            <p>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-green-600 hover:to-teal-500 transition duration-300 text-lg font-semibold transform hover:scale-105"
                                >
                                    Apply Now
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Everything below remains unchanged */}
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold mb-16 text-center text-green-900 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <AccessTime className="text-5xl text-green-500 mb-6 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4 text-green-800">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <LocationOn className="text-5xl text-green-500 mb-6 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4 text-green-800">Visit Us</h3>
                        <p className="text-gray-600">Near BJP Office, Khunti, Ranchi, Jharkhand 835210</p>
                    </div>
                </div>
            </div>

            <div className="bg-green-50 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-extrabold text-center mb-16 text-green-900 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">Admission Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-green-800">Admission Process</h3>
                            <p className="text-gray-600 mb-6">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
                            <a href="https://i.pinimg.com/474x/88/6c/72/886c729c5e6310e29e269031d73a5625.jpg" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-full hover:from-green-600 hover:to-teal-500 transition duration-300 transform hover:scale-105">
                                <GetApp className="mr-2" />
                                Download Admission Form
                            </a>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-green-800">Contact for Admission</h3>
                            <p className="text-gray-600">Ph: +91 7366911127 <br /> Ph: +91 8603200456</p>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-green-800">Important Dates</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Admission Form Availability: April 1st</li>
                                <li>Last Date for Submission: April 31st</li>
                                <li>Entrance Test: To be announced</li>
                                <li>Announcement of Results: 3rd week of May</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-green-900 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">Find Us On The Map</h2>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.725234901921!2d85.27583837525541!3d23.687124378717754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b5b6b1c3d7e51%3A0x998181f1546b16c6!2sBJP%20Office%2C%20Khunti!5e0!3m2!1sen!2sin!4v1713522014699!5m2!1sen!2sin"
                        frameBorder="0"
                        className="w-full h-[500px] border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
