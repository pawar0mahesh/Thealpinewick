import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const App = () => {

  const stairParentRef= useRef(null)

  useGSAP(function(){
    const tl= gsap.timeline()

    tl.to(stairParentRef.current,{
      display:'block',
      duration:0.2
    })

    tl.from('.stair',{
      height:0,
      duration:0.3,
      stagger:{
        amount:-0.25 
      }
    })
    tl.to('.stair',{
      y:'100%',
      duration:0.3,
      stagger:{
        amount:0.25
      }
    })
    tl.to(stairParentRef.current,{
      display:'none'
    })
     tl.to('.stair',{
      y:'0%',
      
    })
  })
  return (
    <div className='text-white'>

      <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
        <div className='h-screen w-full flex'>
          <div className='stair h-full w-1/5 bg-yellow-300 opacity-85'></div>
          <div className='stair h-full w-1/5 bg-yellow-300 opacity-85'></div>
          <div className='stair h-full w-1/5 bg-yellow-300 opacity-85'></div>
          <div className='stair h-full w-1/5 bg-yellow-300 opacity-85'></div>
          <div className='stair h-full w-1/5 bg-yellow-300 opacity-85'></div>
        </div>
      </div>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App