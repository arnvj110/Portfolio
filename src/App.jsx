import { useEffect, useState } from 'react'

import './App.css'
import Circle from './components/Circle'
import Info from './components/Info';
import Projects from './components/Projects';
import Detail from './components/Detail';



function App() {
  
  
  const [show,SetShow]=useState(false);
  const [x,Setx]=useState(false);
  const [xbg,Setxbg]=useState(0);
  const [transformed,Settransformed]=useState(false);
  
  
  return (
    <div className='bg-gray-800'>
      <div>
        <Circle transformed={transformed} Settransformed={Settransformed} />
      </div>

    <div className='bg-gray-800 h-screen transition-all duration-1500 ease-in-out'
    style={{
      opacity:transformed?'1':'0',
    }}
    >
      
      
      <Info show={show} x={x}/>
      <Projects xbg={xbg} Setxbg={Setxbg} show={show} SetShow={SetShow} x={x} Setx={Setx} />
      
      {x&&<Detail x={x} xbg={xbg} Setx={Setx} />}
    </div>
    </div>
  )
}

export default App
