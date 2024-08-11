import React from 'react'
const ProjPart1 = ({img, data1, data2, data3, name, desc}) => {
  return (
    <div>
        <div className='w-[330px] h-[490px] shadow-xl rounded-lg bg-[#171721] p-[20px] mb-[30px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300'>
            <img className='w-[290px] h-[180px]' src={img} alt=''/>
            <div className='mt-[4px] '>
              <div className='flex gap-[10px]'>
              <div className='bg-[#854CE615] mt-[20px] h-[22.4px]  w-[66.34px] rounded-full pt-[2px] text-[12px] pb-[2px] pl-[8px] pr-[8px] flex justify-center text-[#854CE6]'>
                {data1}
              </div>
              <div className='bg-[#854CE615] mt-[20px] h-[22.4px]  w-[66.34px] rounded-full pt-[2px] text-[12px] pb-[2px] pl-[8px] pr-[8px] flex justify-center text-[#854CE6]'>
              {data2}
              </div>
              <div className='bg-[#854CE615] mt-[20px] h-[22.4px]  w-[80.34px] rounded-full pt-[2px] text-[12px] pb-[2px] pl-[8px] pr-[8px] flex justify-center text-[#854CE6]'>
              {data3}
              </div>
              </div>
              
            </div>
            <div className='p-[2px] h-[124px] mt-[10px]'>
              <div className='text-[#B1B2B3] text-[20px] font-semibold'>{name}</div>
              <div className='text-[16px] mt-[8px] font-semibold text-[#B1B2B399]'>{desc} </div>
            </div>
        </div>
    </div>
  )
}

export default ProjPart1