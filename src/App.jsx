import { useEffect, useState } from 'react'

import './App.css'

import Info from './components/Info';
import Projects from './components/Projects';
import Detail from './components/Detail';



function App() {
  
  const [time,SetTime]=useState(null);
  const [logo,Setlogo]=useState(true);
  const [show,SetShow]=useState(false);
  const [x,Setx]=useState(false);
  const [xbg,Setxbg]=useState(0);
  const [transformed,Settransformed]=useState(false);
  
  
  return (
    <div className='bg-gray-800 h-screen overflow-hidden'>
      {logo && 
      <div className={`fixed transition-all  duration-1500 ease-in-out border text-white bg-gray-600 rounded-full w-[120px] h-[120px] flex items-center ${transformed ? 'bg-[url(/me1.jpg)] bg-cover bg-center':'' } justify-center font-semibold text-xl shadow-2xl hover:scale-105 cursor-pointer z-50 top-[39%] left-[45%] `}
    style={{
      scale:transformed?'1.7':'1',
      transform:transformed?'translateX(340px)':'translateX(0)'
    }}
    onClick={()=>{
      Settransformed(prev=>!prev);
      SetTime(setTimeout(()=>{
        Setlogo(prev=>!prev);
      },1500));
    }}
    >{transformed?'':'Click Me!'}</div>}
    
    <div className='bg-gray-800 h-[100%] transition-all flex duration-1500 ease-in-out'
    style={{
      opacity:transformed?'1':'0',
    }}
    >
      
      
      <Projects xbg={xbg} Setxbg={Setxbg} show={show} SetShow={SetShow} x={x} Setx={Setx} />
      <Info show={show} x={x} logo={logo}/>
      
      
      {x&&<Detail x={x} xbg={xbg} Setx={Setx} />}
    </div>
    </div>
  )
}

export default App
