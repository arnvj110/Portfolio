import React from 'react'

const A = ({show,i,e,Setx,Setxbg,xbg}) => {
    const color=['bg-red-500','bg-blue-500','bg-green-500','bg-yellow-500','bg-pink-500','bg-orange-500'];
    
  return (
    <div className={`transition-all  cursor-pointer duration-1000 ease-in-out ${show?'w-[400px]':'w-0'} ${color[i]} border hover:scale-105 border-black h-[100px] rounded-xl flex items-center  overflow-hidden`}
    onClick={()=>{
      
      if(xbg!=i){
        Setx(true);
        Setxbg(i);
      }
      else{
        Setx(prev=>!prev);
      }
    }}
    >
        <span className={`flex justify-between w-[390px] text-white font-f1 transition-all duration-1000  ease-in-out pl-[170px] text-3xl whitespace-nowrap ${show?'transition-opacity delay-800 duration-500':'opacity-0'} flex-wrap`}>{e}
          {show && 
        <svg className='w-10' viewBox="0 0 24.000001 24.000001" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <filter id="a" colorInterpolationFilters="sRGB" height="1.798065" width="1.31919" x="-.159595" y="-.399032"> <feGaussianBlur stdDeviation="1.3302515"></feGaussianBlur> </filter> <g transform="matrix(.90944794 0 0 .90944794 -259.0175 -817.2446)"> <path d="m300.84375 908.875c-.35929.0633-.67275.33918-.78125.6875l-.625 1.8125h-10.4375c-.52358.00005-.99995.47642-1 1v1c.00005.52358.47642.99995 1 1h10.4375l.625 1.8125c.17584.53611.8642.83335 1.375.59375l6-3c.36721-.17625.60257-.59466.5625-1 .001-.0312.001-.0625 0-.0937-.0597-.31022-.27572-.58621-.5625-.71875l-6-3c-.1822-.0907-.39248-.12385-.59375-.0937z" filter="url(#a)" opacity=".2"></path> <path d="m308 911.67377a1.0001 1.0001 0 0 0 -.5625-.71875l-6-3a1.0001 1.0001 0 0 0 -1.375.59375l-.625 1.8125h-10.4375a1.0001 1.0001 0 0 0 -1 1v1a1.0001 1.0001 0 0 0 1 1h10.4375l.625 1.8125a1.0001 1.0001 0 0 0 1.375.59375l6-3a1.0001 1.0001 0 0 0 .5625-1 1.0001 1.0001 0 0 0 0-.0937z"></path> <path d="m307 911.86127-6-3-.84375 2.5h-11.15625v1h11.15625l.84375 2.5z" fill="#fefefe"></path> </g> </g></svg>}
        </span>
        
        

    </div>
    
  )
}

export default A
