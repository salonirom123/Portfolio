import React from 'react'
import Carousal from './Carousal'

const Technical = () => {
  return (
    <div className='md:pl-[12px] md:pr-[12px] md:pt-[48px] md:pb-[48px] md:h-[690.8px] h-auto'>
       <div className='pl-[12px] pr-[12px] md:pt-[48px] md:h-[594.8px] h-auto  pb-[48px]'>
         <div className='mb-[24px]  pb-[16px] flex flex-col items-center'>
            <h5 className='text-[#06A3DA] text-[20px] font-bold mb-[8px]'>TECHNICAL SKILLS</h5>
            <h1 className='text-[#091E3E] font-bold md:text-[40px] text-center text-[29px] mt-[-9px]'>Some of Skills I working on.</h1>
            <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px] '>
           </div> 
         </div>
         <div className='mt-[100px] ml-[24px] mr-[24px]'>
         <Carousal/>
         </div>
       </div>
    </div>
  )
}

export default Technical