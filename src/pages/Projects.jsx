import React from 'react'
import candleImg from '../assets/candle.jpg'
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
     
      <Link to="/">
        <div className='h-[4vw] w-[4vw] z-10 absolute m-1'>
          <img className='rounded-full' src="./image.png" alt="Logo" />
        </div>
      </Link>

      <div className='h-[3vw] w-[60vw] flex items-center justify-center ml-auto gap-[12vw] rounded-bl-full  
          bg-white/5 backdrop-blur-md border border-white/10 shadow-lg'>
        
        <Link className="font-bold" to="/">&lt;&lt; Back</Link>

        <Link to="/">
          <h1 className="text-[1.5vw] text-red-400 font-bold hover:underline">Home</h1>
        </Link>

        <Link to="/contact">
          <h1 className='hover:underline font-bold'>Contact</h1>
        </Link>

        <Link to="/agence">
          <h1 className='hover:underline font-bold'>About</h1>
        </Link>
      </div>

     
      <div className='h-screen w-full relative'>
        <img className='h-full w-full object-cover' src={candleImg} alt="Candle Background" />
      </div>

     
      <div className="absolute top-0 left-20 h-full w-[20vw] bg-black/5 backdrop-blur-md shadow-lg">
        <ul className="flex flex-col items-start justify-center h-full text-white pl-6 space-y-6">
          <li className="hover:text-red-400 cursor-pointer font-bold text-[3vw] underline">We Provide</li>
          <li className="text-[2vw] hover:text-red-400 cursor-pointer">Pillar Candle</li>
          <li className="text-[2vw] hover:text-red-400 cursor-pointer">Jar Candle</li>
          <li className="text-[2vw] hover:text-red-400 cursor-pointer">Floating Candle</li>
          <li className="text-[2vw] hover:text-red-400 cursor-pointer">Sculpted Candle</li>
          <li className="text-[2vw] hover:text-red-400 cursor-pointer">Votive Candle</li>
          <li className="text-[2vw] hover:text-red-400 cursor-pointer">Beeswax Candle</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects
