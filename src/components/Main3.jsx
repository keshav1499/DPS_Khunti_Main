import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg   d-flex justify-content-center align-items-center  bg-center bg-no-repeat "
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056356/IMG-20250419-WA0012_dmi74d.jpg')",
                }}
            ></div>
            <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25 ">
                <div className=' container '>
                    <div className='w-100 h-100 grid  grid-cols-1 lg:grid-cols-2 '>

                    <div className=" flex flex-col   justify-center">


                        <h1 className='fw-bold text-2xl lg:text-4xl  mb-4'>Delhi Public School</h1>
                        <p className='text-lg lg:text-2xl '>  Delhi Public School, Khunti offers a rich and diverse educational experience that goes beyond the classroom. Our campus is designed to support a wide range of activities and interests, ensuring that every student has the opportunity to explore and excel.

                        </p>
                        <span>

                        <Link to="/college" className='btn shadow-lg  mt-5 fw-bold rounded-0 btn-primary'>Go Explore <ArrowRightAltIcon /> </Link>
                        </span>
                    </div>

                    <div className="hidden lg:flex justify-center">

                        <img src="https://res.cloudinary.com/dmfbnkb1q/image/upload/v1745056364/IMG-20250417-WA0022_igusmf.jpg" alt="" className='shadow-lg  rounded-4 w-[700px] h-[400px]' />

                    </div>
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Main3