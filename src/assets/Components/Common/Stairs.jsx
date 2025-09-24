import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = () => {
  const currentPath =  useLocation().pathname
  
    useGSAP(function(){
        let tl =gsap.timeline()
        tl.set(".stair",{
            opacity:1
        })
        tl.from(".stair",{
            height:0,
            
            stagger:{
                amount:-0.3
            }
        })
        tl.to(".stair",{
            y:"100%",
            
            stagger:{
                amount:0.3
            }
        })
        tl.set(".stair",{y:0,
            opacity:0,
            height:"100%"
        })
    },[currentPath])
  return (
     
    <div className=' fixed h-screen w-full z-50 flex  pointer-events-none'>
        <div className='stair h-full w-1/5 bg-black '></div>
         <div className='stair h-full w-1/5 bg-black '></div>
          <div className='stair h-full w-1/5 bg-black'></div>
           <div className='stair h-full w-1/5 bg-black'></div>
           <div className='stair h-full w-1/5 bg-black'></div>
    </div>
    
  )
}

export default Stairs