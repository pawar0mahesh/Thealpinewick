import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      
      <Link to="/">
        <div className='h-[4vw] w-[4vw] z-10 absolute m-1'>
          <img className='rounded-full' src="./image.png" alt="Logo" />
        </div>
      </Link>

      
      <div className='h-[3vw] w-[60vw] flex items-center justify-center ml-auto gap-[12vw] rounded-bl-full  
          bg-white/5 backdrop-blur-md border border-white/10 shadow-lg'>

        <Link className="font-bold" to="/">&lt;&lt;Back</Link>

        <Link to="/">
          <h1 className='text-[1.5vw] text-red-400 font-bold hover:underline'>Home</h1>
        </Link>

        <Link to="/projects">
          <h1 className='hover:underline font-bold'>Shop</h1>
        </Link>

        <Link to="/agence">
          <h1 className='hover:underline font-bold'>About</h1>
        </Link>
      </div>

      <div className="min-h-screen flex items-center justify-center z-20 absolute text-white p-6 ml-[20vw]">
        <div className="max-w-md w-full text-center bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-200 mb-6">
            We’d love to hear from you! Reach out to us directly on Instagram or
            WhatsApp.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl hover:opacity-90 transition"
            >
              Message on Instagram
            </a>

            <a
              href="https://img.freepik.com/premium-photo/3d-render-whatsapp-logo-shaped-from-semi-transparent-plastic-floating-slight-rotation-neon-gr_1020495-782670.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      
      <div className='h-screen w-full relative'>
        <img className='h-full w-full object-cover' src="cand2.jpg" alt="Candle Background" />
      </div>
    </div>
  );
};

export default Contact;
