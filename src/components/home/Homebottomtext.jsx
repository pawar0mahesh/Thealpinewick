import React from 'react'
import { Link } from 'react-router-dom'


const Homebottomtext = () => {
  return (
    <div className='flex items-center justify-center gap-10'>
      <div className='h-[6vw] leading-[6vw] hover:border-gray-800 hover:text-gray-800 border-3 pt-1 border-white rounded-full px-15'>
         <Link className='text-[4vw]' to='/projects'>SHOP NOW</Link>
      </div>
     <div className='h-[6vw] leading-[6vw] hover:border-gray-800 hover:text-gray-800 border-3 pt-1 border-white rounded-full px-15'>
      <Link className='text-[4vw]' to='/agence'>WHY US?</Link>
     </div>
    </div>
  )
}

export default Homebottomtext