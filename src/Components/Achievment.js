import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievment = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    const arr =[
        {
            img:'https://leetcode.com/static/images/LeetCode_Sharing.png',
            info:'600+ problem solved on Leetcode'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFeC0-onVNm7uKHQ0oCYblCfNUQ5zQkAcKw&s',
            info:'GFG-Tshirt'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvFVpivQkBMns3rV68nBe2xMaJaD9pStMOfdtBDRkEYH-Sy3Nns__vsVt-nM1c5KxiuM&usqp=CAU',
            info:'500+ problem solved on GFG'
        },
        {
            img:'https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
            info:'JS Certificate from LinkedIn'
        }
    ]
  return (
    <div className='pl-[12px] pr-[12px] pb-[48px]'>
       <div className='pt-[48px] flex flex-col items-center pb-[48px] pl-[12px] pr-[12px]'>
        <h5 className='text-[#06A3DA] text-[20px] mb-[8px] font-medium justify-center'>ACHIEVEMENTS</h5>
        <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px] '></div>

      </div>
   <div className='hidden md:block'>
   <Slider {...settings} >
      {
        arr.map((item)=>(
            <div className='hidden md:block'>
              <div className=' bg-gray-100 flex items-center gap-4 mt-[50px] h-[134px] pt-[48px] pl-[48px] pr-[48px] pb-[24px]'>
                
            <img className='w-[60px]  h-[60px] rounded-full' src={item.img} alt=''/>
            <h4 className='mb-[4px] text-[#06A3DA]'>{item.info}</h4>  
              </div>
            </div>
        ))
      }  
      </Slider>
   </div>
   <div className='md:hidden'>
   <Slider {...setting} >
      {
        arr.map((item)=>(
            <div >
              <div className=' bg-gray-100 flex items-center gap-4 mt-[50px] h-[134px] p-[4px]'>   
            <img className='w-[60px]  h-[60px] rounded-full' src={item.img} alt=''/>
            <h4 className='mb-[4px] text-[#06A3DA]'>{item.info}</h4>  
              </div>
            </div>
        ))
      }  
      </Slider>
   </div>
      
      </div>
  )
}

export default Achievment
