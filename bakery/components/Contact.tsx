'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine"
    });
  }, []);

  return (
    <section 
      id="contact" 
      className="w-full flex flex-col justify-start items-end gap-20 bg-cover bg-center h-fit lg:py-20 py-10 lg:px-20 px-10"
      style={{backgroundImage:`url('banner.jpg')`}}
    >
      <div className='lg:w-[40%] w-full'>

      </div>
      <div className='lg:w-[60%] w-full flex flex-col justify-start items-center gap-10'>
        <h1
          data-aos="zoom-in"
          className='text-[55px] text-black font-semibold text-center'
        >
          Contact Us
        </h1>
        <p 
          data-aos="zoom-in"
          data-aos-delay="400"
          className='text-center text-xl text-black'
        >
          Lorem ipsum dolor sit amet consectetur, <br></br>adipisicing elit. Doloremque, eos.
        </p>
        <div
          className='flex flex-col justify-center items-center gap-6 lg:w-[80%] w-full'
        >

          <div id="form-box" className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 w-full'>
            <div className='w-full flex flex-col justify-center items-start gap-2'>
              <h1 className='text-lg font-semibold text-black'>Full Name</h1>
              <input 
                type="text" 
                placeholder='Enter your full name'
                className='bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400'
              />
            </div>

            <div className='w-full flex flex-col justify-center items-start gap-2'>
              <h1 className='text-lg font-semibold text-black'>Email</h1>
              <input 
                type="email" 
                placeholder='Enter your valid email'
                className='bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400'
              />
            </div>

          </div>
          <button className='w-full bg-black px-6 py-3 rounded-full text-white font-semibold'>SUBMIT</button>
        </div>

        <div 
          data-aos="zoom-in" 
          data-aos-delay="600" 
          id="adress-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-end items-start gap-6 mt-10"
        >
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-black font-bold text-2xl'>FIND US</h1>
            <p className='text-xl'>121 Rock Street, 21 <br></br> Avenue, New York, NY 92103-9000</p>
          </div>

          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-black font-bold text-2xl'>FIND US</h1>
            <p className='text-xl'>121 Rock Street, 21 <br></br> Avenue, New York, NY 92103-9000</p>
          </div>

          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-black font-bold text-2xl'>CALL US</h1>
            <p className='text-xl'>121 Rock Street, 21 <br></br> Avenue, New York, NY 92103-9000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact