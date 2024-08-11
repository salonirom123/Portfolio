import React from 'react'

const PersonalSkill = () => {
  return (
    <div className='md:h-[687.45px] h-auto pl-[12px] pr-[12px] pt-[48px] pb-[48px] overflow-y-hidden overflow-x-hidden'>
       
        <div className='mb-[48px] pb-[16px] flex flex-col  items-center'>
           <h5 className='text-[#06A3DA] text-[20px] mb-[8px] font-medium justify-center'>PERSONAL SKILLS</h5>
           <h1 className='text-[40px] text-[#091E3E] font-bold mt-[-12px]  break-words'>My Personal Skills</h1>
           <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px] '>
           </div>
         </div>

      <div className='md:flex md:pl-[48px] pt-[4px] md:pr-[48px]'>
      <div className='mt-[48px] h-[447.45px] pl-[24px] pr-[24px] hover:shadow-lg hover:shadow-gray-300'>
        <img className='w-[399.99px] h-[266.65px] duration-500 ease-in-out hover:cursor-auto hover:scale-105' src='https://img.freepik.com/free-photo/one-young-woman-singing-sensually-stage-generated-by-ai_188544-25352.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais' alt=''/>

        <div className='bg-gray-100 pt-[24px] md:w-[399.99px] h-[180.8px] pb-[24px]'>
            <h4 className='text-[24px] text-[#06A3DA] mb-[8px] font-bold'>Singing</h4>
            <p className='text-[#6B6A75] text-[16px]'>"When I sing, my heart takes flight, every note a pure delight."
"Singing's more than just a song, it's where my soul feels it belongs."
"In melodies, I find my peace, a joy that never seems to cease."</p>
        </div>
      </div>

      <div className='mt-[48px] h-[447.45px] pl-[24px] pr-[24px] hover:shadow-lg hover:shadow-gray-300'>
        <img className='w-[399.99px] h-[266.65px] duration-500 ease-in-out hover:scale-105' src='https://andreramosprovincia.site/img/personal_skills/draw.png' alt=''/>
        <div className='bg-gray-100 pt-[24px] md:w-[399.99px] h-[180.8px] pb-[24px]'>
            <h4 className='text-[24px] text-[#06A3DA] mb-[8px] font-bold'>Draw</h4>
            <p className='text-[#6B6A75] text-[16px]'>Drawing and painting are not just hobbies to me; they are a passion that fuels my creativity and allows me to express myself in unique and meaningful ways.</p>
        </div>
      </div>

      <div className='mt-[48px] h-[447.45px] pl-[24px] pr-[24px] hover:shadow-lg hover:shadow-gray-300'>
        <img className='w-[399.99px] h-[266.65px] duration-500 ease-in-out hover:scale-105' src='https://andreramosprovincia.site/img/personal_skills/designer.png' alt=''/>
        <div className='bg-gray-100 pt-[24px] md:w-[399.99px] h-[180.8px] pb-[24px]'>
            <h4 className='text-[24px] text-[#06A3DA] mb-[8px] font-bold'>Designer</h4>
            <p className='text-[#6B6A75] text-[16px]'>During my free time, I immerse myself in design projects using Photoshop and other related tools.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PersonalSkill
