import React from 'react'
import jit from '../assert/React App and 1 more page - Personal - Microsoft​ Edge 09-06-2024 23_44_12.png';
import kanban from '../assert/React App and 1 more page - Personal - Microsoft​ Edge 09-06-2024 23_45_59.png'
import swiggy from '../assert/React App and 1 more page - Personal - Microsoft​ Edge 09-06-2024 23_47_07.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='pt-[48px] md:pb-[48px] pb-[10px] md:pl-[12] md:pr-[12px]'>
            <div className='mb-[48px] pb-[16px] flex flex-col  items-center'>
                <h5 className='text-[#06A3DA] text-[20px] mb-[8px] font-medium justify-center'>PROJECTS</h5>
                <h1 className='md:text-[40px] text-[29px] text-[#091E3E] font-bold mt-[-12px] pl-[24px] pr-[24px] text-center break-words'>Some of projects i working on. </h1>
                <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px] '>
                </div>

                <div className='border-gray border-[1px] absolute mt-[270px] md:w-[1290.4px]'></div>


                <div className='md:flex mt-[50px] md:gap-4 '>
                    <div className='md:h-[446px] md:w-[431.99px] mt-[70px] bg-gray-100'>
                        <div className='pt-[24px] pb-[24px] pl-[48px] pr-[48px] mb-[24px]'>
                            <h4 className='text-[24px] mb-[4px] font-bold text-[#06A3DA] text-left'>JIT-Page</h4>
                            <p className='text-[#6B6A75] text-[14px] text-left'>REACT | TAILWINDCSS </p>
                        </div>
                        <div className='mt-[20px] pb-[10px]'>
                            <img className='mb-[48px] h-[270px]' src={jit} alt=''></img>
                        </div>
                    </div>


                    <div className='md:h-[446px] md:w-[431.99px] md:mt-[70px] '>
                        <div className='pt-[24px] pb-[24px] pl-[48px] pr-[48px] mb-[24px]'>
                            <h4 className='text-[24px] mb-[4px] font-bold text-[#06A3DA] text-left'>Kanban-board</h4>
                            <p className='text-[#6B6A75] text-[14px] text-left'>REACT | TAILWINDCSS | Redux </p>
                        </div>
                        <div className='mt-[20px] pb-[10px]'>
                            <img className='mb-[48px] h-[270px]' src={kanban} alt=''></img>
                        </div>
                    </div>


                    <div className='md:h-[446px] md:w-[431.99px] md:mt-[70px] bg-gray-100'>
                        <div className='pt-[24px] pb-[24px] pl-[48px] pr-[48px] mb-[24px]'>
                            <h4 className='text-[24px] mb-[4px] font-bold text-[#06A3DA] text-left'>Swiggy-clone</h4>
                            <p className='text-[#6B6A75] text-[14px] text-left'>REACT | TAILWINDCSS | Redux</p>
                        </div>
                        <div className='mt-[20px] pb-[10px]'>
                            <img className='mb-[48px] h-[270px]' src={swiggy} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' md:ml-[198px] md:mr-[198px] pb-[16px] md:mb-[48px] mt-[-30px]'>
                <h5 className='text-[#06A3DA] flex justify-center text-[20px] mb-[16px] font-semibold '>WATCH MORE PROJECTS</h5>
                <div className='flex justify-center'>
                    <div className='flex justify-center items-center  md:h-[57px] h-[37.6px] md:w-[160px] w-[92.5px] bg-[#06A3DA]'>
                        <Link to={'/projects'} className='text-white cursor-pointer font-bold text-[16px]'>SEE ALL</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
