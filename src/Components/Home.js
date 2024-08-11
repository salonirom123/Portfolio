import React, { useEffect, useState } from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import profile from '../assert/perfil.png'
import WorkingOn from './WorkingOn';
import Technical from './Technical';
import Projects from './Projects';
import Achievment from './Achievment';
import PersonalSkill from './PersonalSkill';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';

import { MdOutlineArrowDropDown } from "react-icons/md";

const Home = () => {

  const [activeImage, setactiveImage] = useState(0);


  const Preveous = () => {
    setactiveImage((activeImage) => (activeImage === 0 ? items.length - 1 : activeImage - 1))
  }
  const Next = () => {
    setactiveImage((activeImage) => (activeImage === items.length - 1 ? 0 : activeImage + 1))
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      Next();
    },5000)
    return ()=>{
      clearTimeout(timer)
    }
  }, [activeImage])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const items = [
    {
      image: 'https://andreramosprovincia.site/img/carousel-3.jpg',
      description: 'All Projects',
    },
    {
      image: 'https://andreramosprovincia.site/img/carousel-2.jpg',
      description: 'React Projects',
    },
    {
      image: 'https://andreramosprovincia.site/img/carousel-1.jpg',
      description: 'Javascript Project',
    },
  ];

  return (
    <div className='overflow-x-hidden '>
      <div className='relative overflow-hidden '>
        
      <div className='absolute inset-0 bg-blue-950 opacity-50'></div>
        <div className='hidden md:block'>
        <nav className='h-[97.8px]  absolute top-0   text-[#FFFFFF] flex'>
          <div className='pl-[48px] pr-[48px] flex gap-4 cursor-pointer w-[491px] items-center'>
            <img className='h-[40px] w-[40px] mt-[8px]' src={profile} alt='' />
            <h1 className='text-[40px] font-bold z-10'>Saloni Rom</h1>
          </div>
          <div className='items-center pl-[48px] pr-[48px] w-[915px] flex justify-end'>
            <ul className='flex gap-10 text-[18px] '>
              <Link to={"/"} className='cursor-pointer z-10 hover:text-blue-400 duration-500'>Home</Link>
              <Link to={"/about"} className='cursor-pointer z-10 hover:text-blue-400 duration-500'>CV/About</Link>
              <button className='hover:text-blue-400 duration-500 cursor-pointer z-10 flex items-center'
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
              >Projects <MdOutlineArrowDropDown className='h-[25px] w-[25px]'/></button>
              <Link to="/contact" className='cursor-pointer z-10 hover:text-blue-400 duration-500'>Contact</Link>
            </ul>
          </div>
          <span className='border-[#2e3745] border-[0.1px] bottom-0 absolute w-screen'></span>
        
        </nav>
        </div>

        <button onClick={Preveous} className='absolute md:left-[55px] md:top-[300px] top-[80px]'>{<GrPrevious className='h-[40px] w-[40px] md:h-[48px] md:w-[48px] md:text-gray-300 text-gray-400 font-thin z-10' />}</button>
        <button onClick={Next} className='absolute md:top-[300px] md:right-[55px] right-[1px] top-[80px]'>{<GrNext className='h-[40px] w-[40px] md:h-[48px] md:w-[48px] md:text-gray-300 text-gray-400 font-thin z-10' />}</button>
        <div className='flex justify-center'>
        <h5 className='top-[210px] absolute font-medium text-[20px] text-[#FFFFFF] z-10'>COMPUTER SCIENTIST</h5>
        </div>
        {items.map((item, index) => (
          <div className='flex justify-center items-center' key={item}>
            {activeImage === index ? <img src={item.image} alt='' className='md:h-[610px] h-[190px]' /> : ""}
            {activeImage === index ? <p className='absolute text-[#FFFFFF] md:top-[230px] text-[30px] md:text-[80px] z-10'>{item.description}</p> : ""}
            {activeImage === 0 ? <Link to={'/projects'} className='absolute content-center text-center md:top-[360px] md:w-[121px] w-[49px] md:h-[57px] h-[37px] top-[120px] bg-[#06A3DA] text-[#FFFFFF] z-10'>GO</Link> : ""}
            {activeImage === 1 ? <Link to={'/projects'} className='absolute text-center md:top-[360px] top-[120px] md:w-[156px] w-[84px] content-center md:h-[57px] h-[37px] text-[#FFFFFF] border-gray-400 text-[16px] border-2 z-10'>Projects</Link> : ""}
            {activeImage === 2 ? <Link to={'/projects'} className='absolute text-center md:top-[360px] top-[120px] md:w-[156px] w-[84px] md:h-[57px] h-[37px] content-center  text-[#FFFFFF] border-gray-400 text-[16px] border-2 z-10'>Projects</Link> : ""}
          </div>
        ))}

      </div>
      <div className='md:pl-[12px] md:pr-[12px] md:pt-[48px]'>
        <WorkingOn />
        <Technical />
        <Projects />
        <Achievment/>
        <PersonalSkill/>
      </div>

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
       <Link className='cursor-pointer hover:bg-gray-100' to={'/projects'}>React</Link>
       <Link className='cursor-pointer hover:bg-gray-100' to={'/projects'}>Javascript</Link>
       </div>
      </Menu>
    </div>
  )
}

export default Home