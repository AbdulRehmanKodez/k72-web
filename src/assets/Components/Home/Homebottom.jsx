import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import gsap from 'gsap'

const Homebottom = () => {
  const navigate = useNavigate()
  const ani = (to)=>{   
        let tl =gsap.timeline()
        tl.set(" .animation",{
            opacity:1
        })
        tl.from(" .animation",{
            height:0,
            
            stagger:{
                amount:-0.3
            }
        })
        tl.to(" .animation",{
            y:"100%",
            
            stagger:{
                amount:0.3
            }
        })
        tl.set(" .animation",{y:0,
            opacity:0,
            height:"100%",
            onComplete:()=>{
              navigate(to)
            }
        })
    }

  
  return (
    
    <div>
    
      <div>
                 <div className=' fixed h-screen w-full z-50 flex   pointer-events-none'>
        <div className='animation opacity-0 h-full w-1/5 bg-black '></div>
         <div className='animation opacity-0 h-full w-1/5 bg-black '></div>
          <div className='animation opacity-0 h-full w-1/5 bg-black'></div>
           <div className='animation opacity-0 h-full w-1/5 bg-black'></div>
           <div className='animation opacity-0 h-full w-1/5 bg-black'></div>
    </div>
    <div className=' flex items-center justify-center gap-2 font-[font2]'>
      <Link  className='text-[90px] leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] text-white border-2 rounded-full pt-[10pxz] px-[25px] ' to='/Projects'>PROJETS</Link>
      
      <Link onClick={(e)=>{
         e.preventDefault()
         ani('/Agence')
      }}  className='text-[90px] leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] text-white border-2 rounded-full px-[30px] pt-[10px]' >AGENCE</Link>
    </div>
    <div>MONTREAL</div>
    </div>
    </div>
  )
}

export default Homebottom