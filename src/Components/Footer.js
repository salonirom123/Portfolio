import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
 const navigate = useNavigate();
  return (
    <div className='overflow-y-hidden'>
      <div className='mt-[48px] pl-[12px] pr-[12px] bg-[#091E3E] md:h-[321.6px] h-auto md:flex'>

      <div className='md:ml-[70px]  md:w-[447.99px] mb-[-75px] md:pl-[24px] pl-[10px] md:pr-[24px] pr-[10px]'>
        <div className='bg-[#196F8F]  md:h-[396.6px] h-auto p-[24px] md:flex md:flex-col gap-10'>
          <p className='md:text-[40px] text-[29px] pb-[5px] pt-[5px] ml-[16px] text-[#EEF9FF] font-bold'>Saloni Rom, Developer</p>
          <p className='mb-[24px] mt-[16px] font-semibold text-[16px] text-[#EEF9FF]'>
          "Passionate about unraveling hidden stories in code and transforming them into pragmatic solutions that drive strategic decision-making and business growth through comprehensive full stack development."</p>
        </div>
      </div>
  

        {/* GEt in touch  */}
        <div className='h-[273.6px] w-[373.33px] mb-[48px] md:pt-[48px] pt-[100px] pl-[24px] pr-[24px]'>
          <div className='mb-[24px] pb-[16px]'>
            <h3 className='text-[#EEF9FF] text-[28px] text-left font-semibold'>Get In Touch</h3>
            <div className='h-[3px] w-[90px] bg-[#196F8F] mt-[5px]'></div>
          </div>
          <div className='mb-[8px] h-[24px] mt-[-23px] '>
            <p className='text-[#EEF9FF] text-[16px] font-semibold text-left flex gap-1 items-center'><IoLocationOutline className='text-blue-400' /> Khandwa, Mp</p>
          </div>
          <div className='mb-[8px] h-[24px]'>
            <p className='text-[#EEF9FF] text-[16px] font-semibold text-left flex items-center gap-1'><MdOutlineEmail className='text-blue-400' />salonirom254@gmail.com</p>
          </div>
          <div className='mb-[8px] h-[24px]'>
            <p className='text-[#EEF9FF] text-[16px] font-semibold text-left flex gap-1'><IoCallOutline className='text-blue-400' />+91 70001 65125</p>
          </div>
          <div className='mt-[24px] h-[36px] flex gap-2 '>

            <p className='h-[36px] w-[36px]  hover:bg-blue-400 hover:text-black bg-[#06A3DA]'>
              <FaTwitter className='text-white ml-2 mt-2' /></p>
            <a className='h-[36px] w-[36px]  hover:bg-blue-400 hover:text-black bg-[#06A3DA]' href='https://www.linkedin.com/in/saloni-rom-33268b249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <FaLinkedinIn className='text-white ml-2 mt-2' /></a>
            <p className='h-[36px] w-[36px]  hover:bg-blue-400 hover:text-black bg-[#06A3DA]' >
              <FaFacebookF className='text-white ml-2 mt-2' /></p>
            <p className='h-[36px] w-[36px]  hover:bg-blue-400 hover:text-black bg-[#06A3DA]'  >
              <FaInstagram className='text-white ml-2 mt-2' /></p>
          </div>
        </div>

        {/* Quick Links */}

        <div className='h-[273.6px] w-[300px] md:mb-[48px] md:pt-[48px] pt-[40px] pl-[24px] pr-[24px]'>
          <div className='mb-[24px] md:pb-[16px]'>
            <h3 className='text-[#EEF9FF] text-[28px] text-left font-semibold'>Quick Links</h3>
            <div className='h-[3px] w-[90px] bg-[#196F8F] mt-[5px]'></div>
          </div>
          <div className='flex flex-col text-left '>
            <button onClick={()=>navigate("/")} className='mb-[8px] text-[16px] text-[#EEF9FF] flex items-center gap-1 duration-500 hover:translate-x-4 '><GoArrowRight className='text-blue-400'/>Home</button>
            <button onClick={()=>navigate("/about")} className='mb-[8px] text-[16px] text-[#EEF9FF] flex items-center gap-1 duration-500 hover:translate-x-4'><GoArrowRight className='text-blue-400'/>CV/About</button>
            <Link to={'/projects'} className='mb-[8px] text-[16px] text-[#EEF9FF] flex items-center gap-1 duration-500 hover:translate-x-4'><GoArrowRight className='text-blue-400'/>Projects</Link>
            <Link to={'/contact'} className='mb-[8px] text-[16px] text-[#EEF9FF] flex items-center gap-1 duration-500 hover:translate-x-4'><GoArrowRight className='text-blue-400'/>Contact</Link>
          </div>
        </div>

        {/* Repo Links  */}

        <div className='h-[273.6px] w-[200px] mb-[48px] md:pt-[48px] pt-[30px] pl-[24px] pr-[24px]'>
          <div className='mb-[24px] md:pb-[16px]'>
            <h3 className='text-[#EEF9FF] text-[28px] text-left font-semibold'>Repositories Links</h3>
            <div className='h-[3px] w-[90px] bg-[#196F8F] mt-[5px]'></div>
          </div>
          <div className='flex flex-col text-left '>
            <a className='mb-[8px] text-[16px] text-[#EEF9FF] flex items-center gap-1 duration-500 hover:translate-x-4' href='https://github.com/salonirom123'><GoArrowRight className='text-blue-400'/>Github</a>
           </div>
        </div>

      </div>

      <div className='md:h-[75px] mt-[-49px] h-[80px] bg-[#061429] md:pl-[12px] md:pr-[12px]'>
        <div className='pl-[12px] pr-[12px] '>
          <p className='text-[16px] h-20 text-[#FFFFFF]  flex justify-center items-center '><AiOutlineCopyrightCircle className=''/> salonirom254.... All Rights Reseved. Designed by Me</p>
        </div>
      </div>

      </div>
  )
}

export default Footer
