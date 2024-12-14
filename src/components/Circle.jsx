import React, { useState } from 'react'

const Circle = ({transformed,Settransformed}) => {
  
  return (
    <div className='fixed bg-gray-800 h-screen flex justify-center w-[100%] items-center transition-all duration-1500 ease-in-out'
    style={
      {
        zIndex:transformed?'':'30',
        opacity:transformed?'0':'1',
      }
    }>
      <div className='transition-all  duration-1500 ease-in-out border text-white bg-gray-600 rounded-full w-[120px] h-[120px] flex items-center justify-center font-semibold text-xl shadow-2xl hover:scale-105 cursor-pointer '
      style={{
        
        transform:transformed?'translateX(333px) translateY(-11px)':'translateX(0)',
        scale:transformed?'1.7':'1',
        
      }}
      onClick={()=>{Settransformed(true)}}
      >
        {transformed?'':'Click Me!'}
      </div>
    </div>
  )
}

export default Circle
