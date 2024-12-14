import React from 'react'

const Detail = ({x,Setx,xbg}) => {
  const details=[
    {
      color:'bg-red-500',
      projectName:'Claude Clone',
      description:'A basic front-end clone of Claude-Ai. It is made in Vite+React.',
      gitHubLink:'https://github.com/arnvj110/Claude-clone',
      homePage:'https://arnav-claude-clone.vercel.app/',
      image:'/Claude1.png',
    },
    {
      color:'bg-blue-500',
      projectName:'Paste',
      description:'This is a project in which you can save your code and see, update, delete it whenever you want. It is my first project including react-router-dom and some use of local storage.',
      gitHubLink:'https://github.com/arnvj110/paste',
      homePage:'https://paste-lepg.vercel.app/',
      image:'/Paste1.png',
    },
    {
      color:'bg-green-500',
      projectName:'Snake Game',
      description:'Snake Game you can play and have fun!',
      gitHubLink:'https://github.com/arnvj110/Snake_Game',
      homePage:'https://arnvj110.github.io/Snake_Game/',
      image:'/Snake1.png',
    },
    {
      color:'bg-yellow-500',
      projectName:'Valorant Clone',
      description:'Valorant front-end Clone made by collaboration with DevSource . Still in progress!',
      gitHubLink:"https://github.com/arnvj110/valorant-clone",
      homePage:'https://arnvj110.github.io/valorant-clone/',
      image:'/Valorant1.png',
    },
    {
      color:'bg-pink-500',
      projectName:'Typing Test',
      description:'A simple test to calculate words per minute and accuracy.',
      gitHubLink:"https://github.com/arnvj110/Typing_Test",
      homePage:'https://typing-test-beta-snowy.vercel.app/',
      image:'/Typing1.png',
    },
    {
      color:'bg-orange-500',
      projectName:'Stop Watch',
      description:'A stop Watch in which you can also add lap.',
      gitHubLink:"https://github.com/arnvj110/Stop_Watch",
      homePage:"https://stop-watch-livid.vercel.app/",
      image:'/StopWatch1.png',
    },
  ]
  
  return (
    <div className={`transition-all duration-500 ease-in-out rounded-2xl text-gray-100 border-none p-5 fixed border border-black ${details[xbg].color} w-[1000px] h-[95%] top-[20px] left-[400px]`}
        
        >
        
          <h1 className='m-5 text-5xl font-f4 font-bold'>{details[xbg].projectName}</h1>
          <div className='flex mt-[100px] justify-between'>
            <div className='max-w-[50%]'>
            <h4 className='font-bold  mb-3 text-lg'>Description :-</h4>
          <p className='text-lg mb-10'>{details[xbg].description}</p>
          <p className='mb-3'>Github Url - <a target='_blank' href={details[xbg].gitHubLink}><span className='text-blue-200 font-semibold underline'>{details[xbg].gitHubLink}</span></a></p>
          <p>HomePage Url - <a target='_blank' href={details[xbg].homePage}><span className='text-blue-200 font-semibold underline'>{details[xbg].homePage}</span></a></p>
            </div>
            <a target='_blank' href={details[xbg].homePage}>
            <div className={`hover:scale-105 rounded-xl transition-all duration-500 ease-in-out shadow-2xl w-[500px] h-[270px] bg-cover bg-center`}
            style={
              {
                backgroundImage:`url(/public${details[xbg].image})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
              }
            }
            ></div>
            </a>
          </div>
          
          
      </div>
  )
}

export default Detail
