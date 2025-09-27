import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = () => {
    const stairparentdev = useRef(null)
    const currentpath= useLocation().pathname
  
    useGSAP(function(){
        let tl =gsap.timeline()
        tl.to(stairparentdev.current,{
            opacity:1,
            pointerEvents:"auto"
        })
        tl.from(".stair",{
            height:0,
            
            stagger:{
                amount:-0.3
            }
        })
        tl.to(".stair",{
            y:"0%",
            
            stagger:{
                amount:0
            }
        })
        tl.set(".stairparent ",{
            
            y:0,
            
        })
        tl.to(stairparentdev.current ,{
            opacity:0,
            pointerEvents:"none"
        })
         
        
    },[currentpath])
  return (
    
     <div className='stairparent fixed h-screen w-full z-50 top-0 '>
    <div ref={stairparentdev} className='  h-full w-full   '>
        <div  className='stair h-full w-full  '></div>
         
    </div>
    </div>
  )
}

export default Stairs