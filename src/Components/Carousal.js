import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = () => {
    const data = [
        {
            name: "Java",
            type: 'PROGRAMING LANGUAGE',
            img: 'https://t3.ftcdn.net/jpg/04/51/12/88/360_F_451128839_vmKOyil368UoXcac46W7aaqelTtLuNFk.jpg',
            review: "I'm working on Java, a versatile programming language renowned for its platform independence and robustness. It enables me to develop a variety of applications, from web and mobile apps to enterprise-level systems, ensuring strong performance and security."
        },
        {
            name: "DSA",
            type: 'DATA STRUCTURE',
            img: 'https://media.licdn.com/dms/image/D5612AQHk1TSLucGSCQ/article-cover_image-shrink_720_1280/0/1699339646894?e=2147483647&v=beta&t=Z65Bgt43ndSoHk_X1HK2jJRxanlsvoYkz-5dW3-EU9Q',
            review: "I'm working on Data Structures and Algorithms (DSA), focusing on optimizing data organization and processing. Mastering DSA is essential for efficient problem-solving and software development, as it enhances the performance and scalability of applications."
        },
        {
            name: "C language",
            type: 'PROGRAMING LANGUAGE',
            img: 'https://media.licdn.com/dms/image/D4D12AQGvWHFDSOhMCg/article-cover_image-shrink_600_2000/0/1679804058550?e=2147483647&v=beta&t=79sIbe7ddYz70rldXsyxVdBUfAn--qK6yeMmRY77ZQY',
            review: "I'm working on C language, a powerful and efficient programming language widely used for system programming and embedded systems."
        },
        {
            name: "React.js",
            type: 'JS FRAMEWORK',
            img: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
            review: "I'm working on React, a popular JavaScript library for building user interfaces. React component-based architecture and virtual DOM enable me to create dynamic, high-performance web applications with ease and efficiency."
        },
        {
            name: "JavaScript",
            type: 'SCRIPTING LANGUAGE',
            img: 'https://st2.depositphotos.com/1004174/7566/i/450/depositphotos_75664411-stock-photo-programming-concept.jpg',
            review: "I'm working on JavaScript, a versatile scripting language essential for web development. JavaScript allows me to create dynamic and interactive web pages, enhancing user experience through features like animations, form validations, and real-time updates."
        },
        {
            name: "SQL",
            type: 'DATABASE',
            img: 'https://img.freepik.com/free-vector/abstract-technology-sql-illustration_23-2149237139.jpg',
            review: "I'm working on SQL, a powerful language used for managing and manipulating databases. SQL enables me to efficiently query, update, and organize data, ensuring robust data management and retrieval in various applications."
        },
        {
            name: "Redux",
            type: 'TOOLKIT',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-9sd-Dkjxw9YiolNtvIvoNPZcV3Ius3D0Q&s',
            review: "I'm working on Redux, a state management library for JavaScript applications. Redux helps me maintain a predictable state container, making it easier to manage and debug the state of complex applications, particularly when working with React."
        },
    ]

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div >
            <div className='hidden md:block'>
            <Slider {...setting}>
            {data.map((d) => (
                <div className='bg-gray-100 h-[324px]  w-[432px]'>
                    <div className='pt-[48px] pl-[48px] pr-[48px] pb-[24px] flex '>
                        <img src={d.img} alt='' className='h-[60px] rounded-full w-[80px]' />
                        <div className='pl-[24px]'>
                            <h4 className='text-[#06A3DA] font-bold text-left text-[24px] mb-[4px]'>{d.name}</h4>
                            <small className='text-[14px] text-left text-[#6B6A75]'>{d.type}</small>
                        </div>
                    </div>
                    <div className='border-gray-300 border-[1px]'></div>
                    <div className='pt-[24px] pl-[48px] pr-[48px] pb-[48px]'>
                        <p className='text-[#6B6A75] text-[16px] text-left'>{d.review}</p>
                    </div>
                </div>
            ))}
            </Slider>
            </div>
            <div className='md:hidden'>
            <Slider {...settings}>
            {data.map((d) => (
                <div className='bg-gray-100 shadow-lg md:h-[324px] h-auto w-[432px]'>
                    <div className='pt-[48px] pl-[48px] pr-[48px] md:pb-[24px] flex '>
                        <img src={d.img} alt='' className='h-[60px] rounded-full w-[80px]' />
                        <div className='pl-[24px]'>
                            <h4 className='text-[#06A3DA] font-bold text-left text-[24px] mb-[4px]'>{d.name}</h4>
                            <small className='text-[14px] text-left text-[#6B6A75]'>{d.type}</small>
                        </div>
                    </div>
                    <div className='border-gray-300 border-[1px]'></div>
                    <div className='pt-[24px] pl-[48px] pr-[48px] pb-[48px]'>
                        <p className='text-[#6B6A75] text-[16px] text-left'>{d.review}</p>
                    </div>
                </div>
            ))}
            </Slider>
            </div>
        </div>
    )
}

export default Carousal
