import React from 'react';
import { Link } from 'react-router-dom';


const Homeherotext = () => {
  return (
    <div>
     
      <Link to="/">
        <div className='h-[4vw] w-[4vw] z-10 absolute m-1'>
          <img className='rounded-full' src="./image.png" alt="Logo" />
        </div>
      </Link>

      
      <div className='h-[3vw] w-[60vw] bg-black flex items-center justify-center gap-[12vw] ml-auto rounded-bl-full opacity-80'>
        <Link to="/projects">
          <h1 className='text-[1.5vw] text-red-400 font-bold hover:underline'>Shop Now</h1>
        </Link>
        <Link to="/contact">
          <h1 className='hover:underline font-bold'>Contact</h1>
        </Link>
        <Link to="/agence">
          <h1 className='hover:underline font-bold'>About</h1>
        </Link>
      </div>

      <div className='pt-5 text-center'>
        <div className='text-[10vw] font-semibold justify-center flex items-center uppercase leading-[10vw]'>
          THE
        </div>

        <div className='text-[10vw] font-semibold justify-center flex items-start uppercase leading-[10vw]'>
          AL
          <div className='h-[7vw] w-[16vw] rounded-full mt-6 overflow-hidden'>
            <video autoPlay loop muted src="./in.mp4"></video>
          </div>
          PINE
        </div>

        <div className='text-[10vw] font-semibold justify-center flex items-center uppercase leading-[10vw]'>
          WICK
        </div>
      </div>
    </div>
  );
};

export default Homeherotext;
