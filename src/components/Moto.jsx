import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg d-flex justify-content-center align-items-center bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056364/IMG-20250417-WA0022_igusmf.jpg')",
                }}
            ></div>

            <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25">
                <div className='container'>
                    <div className='w-100 h-100 grid grid-cols-1 lg:grid-cols-2'>
                        <div className="flex flex-col justify-center">
                            <h1 className='fw-bold text-2xl lg:text-4xl mb-4'>Delhi Public School, Khunti</h1>
                            <p className='text-lg lg:text-2xl'>
                                Delhi Public School, Khunti offers a holistic and enriching educational environment that nurtures curiosity, creativity, and character. Founded in 2025 and affiliated to the CBSE curriculum, our school supports academic and co-curricular growth through its well-rounded infrastructure and student-first values.
                            </p>
                            <span>
                                <Link to="/college" className='btn shadow-lg mt-5 fw-bold rounded-0 bg-success text-white'>
                                    Go Explore <ArrowRightAltIcon />
                                </Link>
                            </span>
                        </div>

                        <div className="hidden lg:flex justify-center">
                            <img src="https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056363/IMG-20250417-WA0020_aaozxy.jpg" alt="" className='shadow-lg rounded-4 w-[700px] h-[400px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main3;
