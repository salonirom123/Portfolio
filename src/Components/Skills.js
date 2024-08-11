import React from 'react'

const Skills = ({src, head, pera}) => {
  return (
    <div className='md:w-[447.99px] md:h-[184.8px] md:pl-[24px] md:pr-[24px] mt-[48px] md:flex flex-col items-center'>
      <img className='w-[60px] h-[60px] ' src={src} alt=''></img>
       
        <h4 className='text-[24px] text-left  mb-[8px] text-[#091E3E] font-bold'>{head}</h4>
        <p className='text-[#6B6A75] text-left  text-[16px] mb-0 '>{pera}</p>
       
       </div>
  )
}

export default Skills
