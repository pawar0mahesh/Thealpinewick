import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {

  const imageDivref = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://chus.vn/images/Blog/T%E1%BA%B7ng%20n%E1%BA%BFn%20th%C6%A1m%20cho%20b%E1%BA%A1n%20trai%20%C4%91%C6%B0%E1%BB%A3c%20kh%C3%B4ng/Kh%C3%B4ng%20gian%20s%E1%BB%91ng%20c%C5%A9ng%20l%C3%A0%20m%E1%BB%99t%20y%E1%BA%BFu%20t%E1%BB%95%20quan%20tr%E1%BB%8Dng%20khi%20quy%E1%BA%BFt%20%C4%91%E1%BB%8Bnh%20t%E1%BA%B7ng%20n%E1%BA%BFn%20th%C6%A1m.jpg?1720993850554',
    'https://images.pexels.com/photos/1123256/pexels-photo-1123256.jpeg',
    'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg',
    'https://images.pexels.com/photos/1721096/pexels-photo-1721096.jpeg',
    'https://images.pexels.com/photos/33629527/pexels-photo-33629527.jpeg',
    'https://images.pexels.com/photos/5760846/pexels-photo-5760846.jpeg',
    'https://images.pexels.com/photos/7004676/pexels-photo-7004676.jpeg',
    'https://images.pexels.com/photos/6087621/pexels-photo-6087621.jpeg',
    'https://images.pexels.com/photos/14587639/pexels-photo-14587639.jpeg',
    'https://images.pexels.com/photos/17997391/pexels-photo-17997391.jpeg',
  ];

  useGSAP(() => {
    gsap.to(imageDivref.current, {
      scrollTrigger: {
        trigger: imageDivref.current,
        start: 'top 41%',
        end: "top -70%",
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    });
  });

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
          <h1 className='text-[1.5vw] text-red-400 font-bold hover:underline'>Home</h1>
        </Link>

        <Link to="/contact">
          <h1 className='hover:underline font-bold'>Contact</h1>
        </Link>

        <Link to="/projects">
          <h1 className='hover:underline font-bold'>Shop</h1>
        </Link>

      </div>

     
      <div className='section1'>
        <div ref={imageDivref} className='absolute overflow-hidden h-[20vw] rounded-2xl w-[15vw] top-75 left-[30vw]'>
          <img ref={imageRef} className='h-full w-full object-cover' src={imageArray[0]} alt="" />
        </div>

        <div>
          <div className='relative mt-[55vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[15vw]'>
              Breathe<br />the Alps
            </h1>
          </div>

          <div className='relative pl-[40%] mt-20'>
            <p className='text-5xl'>
              Our aroma candles are carefully handcrafted to fill your space with soothing fragrances and a gentle glow. Made with natural wax and inspired by the freshness of the mountains, each candle creates a calming atmosphere, bringing warmth, peace, and nature’s essence into your home.
            </p>
          </div>
        </div>
      </div>

    
      <div className="section2 h-screen relative">
        <h1 className="absolute bottom-4 right-4 text-gray-500">
          © created by Mahesh Rajput
        </h1>
      </div>
    </div>
  );
};

export default Agence;
