import React, { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMailOpenFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";
import Menu from '@mui/material/Menu';
const Navbar = () => {
  const [isManuopen, setisMenuopen] = useState(false);
  const handlClick =()=>{
      setisMenuopen((prevstate) => !prevstate)
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className='hidden md:block'>
        <main className='h-[45px] flex text-[#EEF9FF] bg-[#091E3E] pl-[48px]pr-[48px] overflow-y-hidden'>
          <div className='w-[948px] flex items-center font-semibold'>
            <small className='mr-[16px] text-[14px] flex  gap-2 '><FaMapMarkerAlt className='w-[10.5px] h-[13.6px] mt-[3px]' />Khandwa-mp</small>
            <small className='mr-[16px] text-[14px]  flex gap-1'><BsFillTelephoneFill className='w-[14px] h-[13.6px] mt-[3px]' /> +91 70001-65125</small>
            <small className='text-[14px] flex gap-1'><RiMailOpenFill className='w-[14px] h-[13.6px] mt-[3px]' />salonirom254@gmail.com</small>
          </div>
          <div className='flex justify-end items-center w-[474px]'>
            <a href='https://www.linkedin.com/in/saloni-rom-33268b249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='h-[30px] mr-[8px] w-[30px] duration-700 border-[#EEF9FF] border-[1px] rounded-full pt-[4px] pb-[4px] pl-[2px] hover:bg-white hover:text-black'><TiSocialLinkedin className='w-[25px] h-[21px] ' /></a>
            <a href='https://github.com/salonirom123' className='h-[30px] mr-[8px] w-[30px] border-[#EEF9FF] border-[1px] rounded-full pt-[6px] pb-[4px] pl-[6px] duration-700 hover:bg-white hover:text-black'><FaGithub /></a>
            <p className='h-[30px] mr-[8px] w-[30px] border-[#EEF9FF] border-[1px] rounded-full pt-[6px] pb-[4px] pl-[6px] duration-700 hover:bg-white hover:text-black'><SiWhatsapp /></p>
          </div>
        </main>
      </div>
      <div className='h-[72px] text-[30.58px] gap-[30px] flex justify-center items-center font-bold text-[#196F8F] md:hidden'>
        <h1>Saloni Rom</h1>
        <button onClick={handlClick}
          className={isManuopen === true ? 'h-[30.4px] w-[43.1px] border-[#196F8F] border-[4px] rounded-sm flex justify-center items-center' : 'h-[30.4px] w-[43.1px] rounded-sm  border-[#196F8F] border-[1px] flex justify-center items-center'}><FaBars className='w-[17.5px] h-[20px]' /></button>
      </div>
      {isManuopen && <div> <ul className='md:hidden flex flex-col pl-10 pb-5 gap-3 text-[18px] '>
        <Link to={"/"} onClick={handlClick} className='cursor-pointer hover:text-blue-400 duration-500'>Home</Link>
        <Link to={"/about"}  className='cursor-pointer hover:text-blue-400 duration-500 '>CV/About</Link>
        <button
         id="basic-button"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
        className='flex hover:text-blue-400 duration-500 cursor-pointer'
        >Projects <MdOutlineArrowDropDown className='h-[25px] w-[25px]' /></button>
        <Link to="/contact"  className='hover:text-blue-400 duration-500 cursor-pointer'>Contact</Link>
      </ul></div>}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className='flex flex-col pt-2 pb-2 pl-5 pr-5 gap-2 '>
       <Link className='cursor-pointer hover:bg-gray-100' to={'/projects'}>All</Link>
       <Link className='cursor-pointer hover:bg-gray-100' to={'/react'}>React</Link>
       <Link className='cursor-pointer hover:bg-gray-100' to={'/javaScript'}>Javascript</Link>
       </div>
      </Menu>
    </>
  )
}

export default Navbar