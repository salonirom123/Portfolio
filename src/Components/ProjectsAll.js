import React from 'react'
import Common from './Common'
import ProjPart1 from './ProjPart1'
import Kanban from '../assert/React App and 1 more page - Personal - Microsoft​ Edge 09-06-2024 23_45_59.png'
import Swiggy from '../assert/React App and 1 more page - Personal - Microsoft​ Edge 09-06-2024 23_47_07.png'
import jit from '../assert/React App and 1 more page - Personal - Microsoft​ Edge 09-06-2024 23_44_12.png'
import portfolio from '../assert/React App - Personal - Microsoft​ Edge 07-08-2024 16_55_52.png'
import addTocart from '../assert/React App and 1 more page - Personal - Microsoft​ Edge 07-08-2024 17_06_42.png'
import jira from '../assert/Jira Ticket - Personal - Microsoft​ Edge 2023-07-19 16-34-40.mp4 07-08-2024 16_57_19.png'
const ProjectsAll = () => {
  return (
    <div className='bg-[#090917]'>
      <Common data={'PROJECTS'}/>
      <div className='mb-[48px] pb-[16px] flex flex-col mt-[30px] items-center'>
           <h5 className='text-[#06A3DA] text-[20px] mb-[8px]  justify-center font-bold'>CONTACT ME</h5>
           <h1 className='md:text-[40px] text-[29px] text-[#B1B2B399] font-bold mt-[-12px]  md:break-words'>Some of Skills I working on.</h1>
           <div className='w-[150px] h-[5px] bg-[#196F8F] rounded-xl mt-[10px] mb-[-55px] '>
           </div>
         </div>
      <div className='mt-[60px] ml-[22px] gap- md:grid md:grid-cols-3 flex-col items-center justify-center md:ml-[200px] mr-[200px]'>
        <ProjPart1 img={Kanban} data1={'React Js'} data2={'Redux Js'} data3={'TailwindCSS'} name={'Kanban-Board'} desc={'A Kanban-board project organizes tasks visually on a board, representing different stages of a workflow. It enhances project management by tracking progress, prioritizing tasks, and improving team collaboration and efficiency.'}/>
        <ProjPart1 img={Swiggy} data1={'React Js'} data2={'Redux Js'} data3={'TailwindCSS'} name={'Swiggy-clone'} desc={'The Swiggy-clone project involves creating a food delivery app replica, featuring user authentication, restaurant listings, menu browsing, order placement, real-time tracking, and payment integration, providing an experience similar to Swiggy.'}/>
        <ProjPart1 img={jit} data1={'React Js'} data2={''} data3={'TailwindCSS'} name={'JIT-Page'} desc={'it contains the information about our institute we can say it is a official site of jawaharlaal institute of technology borawan. in this site we can pay fee to our institute'}/>
        <ProjPart1 img={jira} data1={'HTML'} data2={'CSS'} data3={'JavaScript'} name={'Jira-Ticket'} desc={'The JIRA-ticket project involves creating a streamlined system for managing JIRA tickets using JavaScript, HTML, and CSS, enhancing efficiency, and improving the user interface for tracking and resolving tasks effectively.'}/>
        <ProjPart1 img={portfolio} data1={'React Js'} data2={''} data3={'TailwindCSS'} name={'Portfolio'} desc={'it showcases my skills, experiences, and projects. It includes an about section, resume, project highlights, contact information, and links to social media or professional profiles.'}/>
        <ProjPart1 img={addTocart} data1={'React Js'} data2={'Redux Js'} data3={'TailwindCSS'} name={'AddTo-Cart'} desc={'The Add to Cart project streamlines online shopping by enabling users to select and store products in a virtual cart, facilitating a seamless purchasing experience with features like product management and secure checkout.'}/>
      </div>
    </div>
  )
}

export default ProjectsAll
