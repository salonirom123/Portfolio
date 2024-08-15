import React from 'react'
import Common from './Common'
import { FaCubes } from "react-icons/fa";
import pic from  '../assert/profile.jpeg'
const About = () => {
  return (
    <div>
      <Common data={'CV/About Me'} />
      <div className='md:h-[596px] h-auto md:flex justify-center mt-[90px]'>
        <div className='md:w-[783.99px] md:h-[500px] mt-[48px] pl-[24px] pr-[24px]'>
          <div className='mb-[48px] pb-[16px]'>
            <h5 className='text-[#06A3DA] text-[20px] mb-[8px] font-bold '>ABOUT ME</h5>
            <h1 className='md:text-[40px] text-[29px] text-[#091E3E] font-bold mt-[-2px]  md:break-words'>Full Stack Developer | Java  </h1>
            <h1 className='md:text-[40px] text-[29px] text-[#091E3E] font-bold mt-[-4px]  break-words '>React | Javascript | Redux | DSA</h1>
            <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px]'></div>
          </div>
          
           <p className='text-[16px] text-[#6B6A75] mb-[24px] mt-[80px]'>
           Hello! My name is Saloni, and I am a passionate full-stack developer with a strong background in both front-end and back-end technologies. I thrive on creating seamless and efficient web applications that provide exceptional user experiences.
           </p>
           <p className='text-[20px] text-[#6B6A75] mb-[24px]'>Personal Attributes:</p>
           <p className='text-[16px] text-[#6B6A75] mb-[24px]'>I am known for my problem-solving skills, attention to detail, and ability to work collaboratively in a team environment. My passion for coding drives me to stay updated with the latest industry trends and technologies, ensuring that I can deliver innovative solutions to complex problems.</p>
        </div>
        <div className='md:w-[560px] md:h-[500px] md:mt-[48px]  pl-[24px] pr-[24px]'>
          <img className='rounded-full md:h-[500px] h-auto w-auto md:w-[500px]' alt='' src={pic}/>
        </div>
      </div>

      <div className='md:h-[617px] md:flex  pt-[48px] pb-[48px] pl-[12px] pr-[12px] md:ml-[99px] md:mr-[99px]'>
        <div className='pl-[4px] pr-[4px] md:w-[648px]'>
          <h4 className='text-[#06A3DA] mb-[4px] text-[24px] font-bold'>EDUCATION</h4>
          <h4 className='mb-[24px] mt-5 text-[20px] text-[#091E3E] flex items-center gap-5'><FaCubes className='text-[#06A3DA]'/> 2021-2025 - Bachelor's in Information Technology (RGPV University)</h4>
          
          <h4 className='mb-[24px] text-[20px] text-[#091E3E] flex items-center gap-5'><FaCubes className='text-[#06A3DA]'/> 2019-2021 - 12th (Govt. Exellence HSS punasa)</h4>
          
          <h4 className='mb-[24px] text-[20px] text-[#091E3E] flex items-center gap-5'><FaCubes className='text-[#06A3DA]'/> 2017-2019 - (Govt. HS Rohani)</h4>
          

          <h4 className='text-[#06A3DA] mb-[4px] text-[24px] font-bold mt-10'>ACHIEVMENTS</h4>
          <h4 className='mb-[24px] mt-5 text-[20px] text-[#091E3E] flex items-center gap-5'><FaCubes className='text-[#06A3DA]'/> 600+ problem solved on GeeksforGeek </h4>
          <h4 className='mb-[24px] mt-5 text-[20px] text-[#091E3E] flex items-center gap-5'><FaCubes className='text-[#06A3DA]'/> 700+ problem solved on Leetcode </h4>
          <h4 className='mb-[24px] mt-5 text-[20px] text-[#091E3E] flex items-center gap-5'><FaCubes className='text-[#06A3DA]'/> GFG Tshirt </h4>
          
         </div>
         <div className='md:h-[521px] md:w-[648px] top-0 md:mb-[24px] pl-[4px] pr-[4px]'>
           <h4 className='text-[#06A3DA] mb-[4px] text-[24px] font-bold mt-10'>SKILLS</h4>
           <small className='text-[14px] text-[#6B6A75]'>TECHNICAL:</small>
           <h4 className='mb-[24px] mt-1 text-[20px] text-[#091E3E] flex items-center gap-5'><FaCubes className='text-[#06A3DA] w-[40px]'/> Object Oriented Programing, POP, Data Structure & Algorithms </h4>

           <small className='text-[14px] text-[#6B6A75]'>PROGRAMING LANGUAGES & TECHNOLOGIES:</small>
           <h4 className='mb-[24px] mt-1  text-[20px] text-[#091E3E] flex gap-5'><FaCubes className='text-[#06A3DA] mt-1 w-[50px]'/> SQL (SQLServer), C LANGUAGES, Java, React, Javascript, Redux, Visual Code </h4>
           
           <small className='text-[14px] text-[#6B6A75]'>LANGUAGES :</small>
           <h4 className='mb-[24px] mt-1  text-[20px] text-[#091E3E] flex gap-5'><FaCubes className='text-[#06A3DA] mt-1 w-[30px]'/> English, Hindi(native)</h4>
          
         </div>
      </div>
      <div className='pb-[48px] pl-[12px] pr-[12px] md:ml-[90px] md:mr-[90px] md:h-[392.8px]'>
        <div className='pl-[4px] pr-[4px] mb-[24px]'>
          <h4 className='text-[#06A3DA] mb-[4px] text-[24px] font-bold'>PROJECTS</h4>
          <h5 className='mb-[24px] mt-1  text-[20px] text-[#06A3DA] flex gap-5'><FaCubes className='text-[#06A3DA] mt-1 w-[30px]'/>Kanban-Board (React, Redux, TailwindCSS)</h5>
          <h5 className='mb-[24px] mt-1  text-[20px] text-[#06A3DA] flex gap-5'><FaCubes className='text-[#06A3DA] mt-1 w-[30px]'/>Jira-Ticket (HTML, Javascript, CSS)</h5>
          <h5 className='mb-[24px] mt-1  text-[20px] text-[#06A3DA] flex gap-5'><FaCubes className='text-[#06A3DA] mt-1 w-[30px]'/>Swiggy-clone (React, Redux, TailwindCSS)</h5>
          <h5 className='mb-[24px] mt-1  text-[20px] text-[#06A3DA] flex gap-5'><FaCubes className='text-[#06A3DA] mt-1 w-[30px]'/>JIT-Page (React,TailwindCSS)</h5>
        </div>
      </div>
    </div>
  )
}

export default About