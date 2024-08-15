import React from 'react'
import Common from './Common'

import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMailOpenFill } from "react-icons/ri";
const Contact = () => {
  return (
    <div>
      <Common data={'Contact Me'}/>
      <div className='md:h-[958px] pt-[48px] pb-[48px] pl-[12px] md:pr-[12px]'>
        <div className='pt-[48px] pb-[48px] pl-[12px] pr-[12px]'>
        <div className='mb-[48px] pb-[16px] flex flex-col  items-center'>
           <h5 className='text-[#06A3DA] text-[20px] mb-[8px]  justify-center font-bold'>CONTACT ME</h5>
           <h1 className='md:text-[40px] text-[29px] text-[#091E3E] font-bold mt-[-12px] text-center md:break-words'>If You Have Any Query, Feel</h1>
           <h1 className='md:text-[40px] text-[29px] text-[#091E3E] font-bold mt-[-12px]  md:break-words'> Free To Contact Me</h1>
           <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px] '>
           </div>
         </div>
         
         <div className='md:flex md:pl-[68px] pt-[10px]'>
         <div className='mt-[48px] md:pl-[24px] pr-[24px] md:w-[447.99px] flex'>
          <div className='h-[60px] w-[60px] bg-[#196F8F] flex justify-center items-center mt-[7px]'><BsFillTelephoneFill className='text-white'/></div>
          <div className='pl-[24px]'>
            <h5 className='mb-[8px] text-[20px] text-[#091E3E] font-semibold'>Phone</h5>
            <h4 className='text-[24px] text-[#06A3DA] font-bold'>+91 70001 65125</h4>
          </div>
         </div>

          <div className='mt-[48px] md:pl-[24px] pr-[24px] md:w-[447.99px] flex'>
          <div className='h-[60px] w-[60px] bg-[#196F8F] flex justify-center items-center mt-[7px]'><RiMailOpenFill className='text-white'/></div>
          <div className='pl-[24px]'>
            <h5 className='mb-[8px] text-[20px] text-[#091E3E] font-semibold'>Email</h5>
            <h4 className='md:text-[24px] text-[20px] text-[#06A3DA] font-bold'>salonirom254@gmail.com</h4>
          </div>
         </div>
         </div>
         <div className='mt-[48px] md:pl-[24px] pr-[24px] md:w-[447.99px] flex'>
          <div className='h-[60px] w-[60px] bg-[#196F8F] flex justify-center items-center mt-[7px]'><FaMapMarkerAlt className='text-white'/></div>
          <div className='pl-[24px]'>
            <h5 className='mb-[8px] text-[20px] text-[#091E3E] font-semibold'>Location</h5>
            <h4 className='text-[24px] text-[#06A3DA] font-bold'>Khandwa, Mp</h4>
          </div>
         </div>
        </div>
        <div className='md:ml-[100px] hidden md:block'>
        <iframe width="700" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=madhay%20pradesh,%20khandwa%20%20punasa%20Rohani%20450112+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
        </div>
        <div className='ml-[12px] md:hidden'>
        <iframe width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=madhay%20pradesh,%20khandwa%20%20punasa%20Rohani%20450112+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
        </div>
       </div>
    </div>
  )
}

export default Contact
