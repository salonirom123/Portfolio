import React from 'react'
import { Link } from 'react-router-dom'
import pp from '../assert/perfil.png'
import c1 from '../assert/carousel-1.jpg'
import Menu from '@mui/material/Menu';
import { MdOutlineArrowDropDown } from "react-icons/md";
const Common = ({data}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=''>
        <div className='relative overflow-hidden '>
          <div className='absolute inset-0 bg-blue-950 opacity-50'></div>
       <div className='hidden md:block'>
       <nav className=' h-[97.8px]  absolute top-0 flex  text-[#FFFFFF]'>
          <div className='pl-[48px] pr-[48px] flex gap-4 cursor-pointer w-[491px] items-center'>
            <img className='h-[40px] w-[40px] mt-[8px]' src={pp} alt='' />
            <h1 className='text-[40px] font-bold z-10'>Saloni Rom</h1>
          </div>
          <div className='items-center pl-[48px] pr-[48px] w-[915px] flex justify-end'>
            <ul className='flex gap-10 text-[18px] '>
              <Link to={"/"} className='cursor-pointer z-10 hover:text-blue-400 duration-500'>Home</Link>
              <Link to={"/about"} className='cursor-pointer z-10 hover:text-blue-400 duration-500'>CV/About</Link>
              <botton className='hover:text-blue-400 duration-500 cursor-pointer z-10 flex items-center'
                   id="basic-button"
                   aria-controls={open ? 'basic-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick}
              >Projects <MdOutlineArrowDropDown className='h-[25px] w-[25px]'/></botton>
              <Link to="/contact" className='cursor-pointer z-10 hover:text-blue-400 duration-500'>Contact</Link>
            </ul>
          </div>
          <span className='border-[#3b3b56] border-[0.1px] bottom-0 absolute w-screen'></span>
        </nav>
       </div>
         <img className=' md:h-[355px] h-[236px] w-screen' src={c1} alt=''/>
         <div className='absolute flex justify-center w-screen md:top-[210px] top-[115px] items-center'>
         <h1 className='md:text-[56px] text-[37px]  font-bold  absolute text-white z-10'>{data}</h1>
         </div>
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
       <Link className='cursor-pointer hover:bg-gray-100' to={'/react'}>React</Link>
       <Link className='cursor-pointer hover:bg-gray-100' to={'/javaScript'}>Javascript</Link>
       </div>
      </Menu>
    </div>
  )
}

export default Common