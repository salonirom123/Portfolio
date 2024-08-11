import React from 'react'
import Skills from './Skills'

const WorkingOn = () => {
  return (
    <div className='md:h-[849px] h-auto pt-[48px] pb-[48px] md:pl-[74px] pl-[36px] pr-[36px] md:pr-[74px] '>
       <div className='md:h-[753px] pt-[48px] pb-[48px] md:pl-[12px] md:pr-[12px]'>
          <div className='mb-[48px] pb-[16px] flex flex-col  items-center'>
           <h5 className='text-[#06A3DA] text-[20px] mb-[8px] font-medium justify-center'>AREAS OF INTEREST</h5>
           <h1 className='md:text-[40px] text-[29px] text-[#091E3E] font-bold mt-[-12px]  md:break-words text-center'>Take a look some of things  </h1>
           <h1 className='md:text-[40px] text-[29px] text-[#091E3E] font-bold mt-[-12px] md:break-words '>I love working on.</h1>
           <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px] '>
           </div>  
        </div>
        <div className='md:flex'>
        <Skills src={'https://cdn-icons-png.flaticon.com/512/1183/1183669.png'}
           head='Core Java'
           pera={'Java s "Write Once, Run Anywhere" capability, powered by the Java Virtual Machine (JVM). '}
        />
        <Skills src={'https://e7.pngegg.com/pngimages/791/922/png-clipart-react-javascript-library-redux-user-interface-tesseract-logo-symmetry.png'}
         head={'React JS'}
         pera={'React.js employs a virtual DOM, which improves performance by minimizing direct manipulation of the actual DOM,'}
        />
        <Skills
          src={'https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png'}
          head={'DS & Algorithm'}
          pera={'Data Structures and Algorithms form the backbone of efficient programming, enabling developers to write code that performs well and scales effectively.'}
        />
        </div>
        <div className='md:flex'>
        <Skills src={'https://img.freepik.com/premium-psd/coding-javascript-icon-3d-render_568120-2036.jpg'}
           head='JavaScript'
           pera={'JavaScript is a versatile scripting language primarily used for creating dynamic and interactive web pages, making it a cornerstone of modern web development.'}
        />
        <Skills src={'https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55'}
         head={'Redux toolkit'}
         pera={'Redux is a popular state management library for JavaScript applications, particularly those built with React, providing a predictable and centralized state container.'}
        />
        <Skills
          src={'https://icon2.cleanpng.com/20180405/efq/kisspng-the-c-programming-language-computer-programming-co-programmer-5ac6bd82da8a81.2143761315229740828952.jpg'}
          head={'C Language'}
          pera={'C Programming Language: C is a low-level language known for efficiency, ideal for operating systems and performance-critical applications.'}
        />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default WorkingOn