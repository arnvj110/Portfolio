import React, { useState } from 'react'
import A from './A';

const Projects = ({show,SetShow,x,Setx,Setxbg,xbg}) => {
  
  const projectName=['Claude Clone','Paste','Snake Game','Valorant Clone','Typing Test','Stop Watch'];
  return (
    <div className='fixed top-0 left-0 w-[50%] h-[100%]'>
      <div className={`absolute border border-black w-[150px] ${show?'h-[100%]':'h-[95%] mt-5 rounded-r-2xl hover:scale-105'} flex justify-center text-white items-center transition-all duration-500 bg-gray-500 ease-in-out z-10 cursor-pointer  `}
      onClick={()=>{
        SetShow(prev=>!prev);
        Setx(false);
      }}
      >
        <span className='text-2xl flex justify-between items-center'>
          
          {show?'Hide':'Projects'}
        </span>
      </div>
      <div className='absolute w-[500px] h-[95%] mt-5 flex gap-2 '>
        <div className='flex justify-center flex-col gap-2'>
        {projectName.map((e,i)=>(
         <A i={i} key={i} Setxbg={Setxbg} show={show} e={e} xbg={xbg} Setx={Setx}/>
        ))}
        </div>
        
        

      </div>
      
    </div>
  )
}

export default Projects
