import React from 'react'
import Video from '../components/home/Video'
import Homeherotext from '../components/home/Homeherotext'
import Homebottomtext from '../components/home/Homebottomtext'
const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
      <Video/>
    </div>
    <div className=' h-screen w-screen relative overflow-hidden flex flex-col justify-between  '>
      <Homeherotext/>
      <Homebottomtext/>

    </div>
    </div>
    
  )
}

export default Home