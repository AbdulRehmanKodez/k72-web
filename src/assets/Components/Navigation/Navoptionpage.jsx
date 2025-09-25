import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Navoptionpage = () => {

    
  const Navcontent = useRef(null)
  
    useGSAP(function(){
        
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
            height:"100%"
        })
        tl.to(Navcontent.current,{ 
            opacity:1,
            duration:1,
            ease: "power2.out"

        },"-=0.6")
    })

  return (

    <div>
                 <div className=' fixed h-screen w-full z-50 flex   pointer-events-none'>
        <div className='animation h-full w-1/5 bg-black '></div>
         <div className='animation h-full w-1/5 bg-black '></div>
          <div className='animation h-full w-1/5 bg-black'></div>
           <div className='animation h-full w-1/5 bg-black'></div>
           <div className='animation h-full w-1/5 bg-black'></div>
    </div>


    <div ref={Navcontent} className='bg-black h-screen text-white opacity-0    '>

        <div className='h-[133px] flex justify-end pb-40'>
            

         <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke="currentColor" 
           className="w-[100px] h-[200px] text-white ">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}      d="M6 18L18 6M6 6l12 12" />
         </svg>
           

        </div>
        <div className='link overflow-hidden relative w-full border-t-1 border-gray-400  
         text-center text-[110px] font-[font2] leading-[85px] pt-[15px]'>
            <h1>PROJETS</h1>
            <div className='moveX absolute top-0 flex'>

            <div className=' flex  w-max items-center text-black bg-[#d3fd50]'>
              <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            <div className=' flex  w-max left-full items-center text-black bg-[#d3fd50]'>
             <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            </div>
             
        </div>
          <div className='link overflow-hidden relative w-full border-t-1 border-gray-400  
         text-center text-[110px] font-[font2] leading-[85px] pt-[15px]'>
            <h1>AGENCE</h1>
            <div className='moveX absolute top-0 flex'>

            <div className=' flex  w-max items-center text-black bg-[#d3fd50]'>
              <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            <div className=' flex  w-max left-full items-center text-black bg-[#d3fd50]'>
             <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            </div>
             
        </div>
        <div className='link overflow-hidden relative w-full border-t-1 border-gray-400  
         text-center text-[110px] font-[font2] leading-[85px] pt-[15px]'>
            <h1>CONTACT</h1>
            <div className='moveX absolute top-0 flex'>

            <div className=' flex  w-max items-center text-black bg-[#d3fd50]'>
              <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            <div className=' flex  w-max left-full items-center text-black bg-[#d3fd50]'>
             <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            </div>
             
        </div>
        <div className='link overflow-hidden relative w-full border-y-1 border-gray-400  
         text-center text-[110px] font-[font2] leading-[85px] pt-[15px]'>
            <h1>BLOGUE</h1>
            <div className='moveX absolute top-0 flex'>

            <div className=' flex  w-max items-center text-black bg-[#d3fd50]'>
              <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            <div className=' flex  w-max left-full items-center text-black bg-[#d3fd50]'>
             <h1 className='whitespace-nowrap  '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/bag.jpg" alt="" />
              <h1 className='whitespace-nowrap '> POUR TOUT VOIR</h1>
              <img className='h-[100px] w-90 shrink-0   rounded-full   object-cover ' src="/public/box.jpg" alt="" />
               
            </div>
            </div>
             
        </div>
       
    </div>
    </div>
  )
}

export default Navoptionpage