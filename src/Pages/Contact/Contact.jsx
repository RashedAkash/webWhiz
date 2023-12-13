import React from 'react';
import RightTitle from '../../Shared/RightTitle/RightTitle';

import img from '../../assets/contact.jpeg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { FaClock, FaLocationArrow, FaMailBulk, FaMobile, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='py-16'>
      <div className='md:w-1/3 space-y-2 mb-10'>
        <SectionTitle title='Contact me' />
          <RightTitle text='Feel free to reach out to us at any time. We value your  feedback, inquiries, and collaboration.'/>
    </div>
       <div className='md:flex gap-24 items-center justify-between'>
      
      <div className='lg:w-1/2' >
        <form className='lg:w-2/3 lg:pl-10  space-y-4'>
          <input className=' w-full py-4 px-7  border-gray-300 border-0 border-b text-[#64656D]' type="text" placeholder='Name' />
        <br />
        <input className=' w-full py-4 px-7  border-gray-300 border-0 border-b text-[#64656D]' type="text" placeholder='Email' />
        <br />
          <input className=' w-full py-4 px-7  border-gray-300 border-0 border-b text-[#64656D]' type="text" placeholder='Message' />
          <button type='submit' className="btn btn-block rounded-full text-white bg-gradient-to-r from-[#5F90F0] to-[#185AD9] font-medium">Submit</button>
        </form>
      </div>
      <div className='flex-1 '>
          <div className=' relative'>
            <img className='rounded-xl w-full' src={img} alt="" />
            <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-xl"></div>
            <div className=' hidden lg:block absolute bg-white z-10   lg:p-8 lg:pr-16 shadow-xl rounded-2xl   -left-24 space-y-4 top-24'>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <FaMailBulk />
                <p>rashedhossain416400@gmail.com</p>
              </div>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <FaPhone />
                <p>(+880)1521-787-495</p>
              </div>
             
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <FaLocationArrow />
                <p>Satkhira,khulna,Bangladesh</p>
              </div>
            </div>
            <div className='block lg:hidden absolute bg-white z-10 p-4   shadow-xl rounded-2xl left-12 mx-auto   space-y-2 top-2/4'>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <FaMailBulk />
                <p>
rashedhossain416400@gmail.com
</p>
              </div>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <FaPhone />
                <p>(+880)1521-787-495</p>
              </div>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <FaLocationArrow />
                <p>Satkhira,khulna,Bangladesh</p>
              </div>
             
            </div>
         
          </div>
          
          
          
      </div>
    </div>
   </div>
  );
};

export default Contact;