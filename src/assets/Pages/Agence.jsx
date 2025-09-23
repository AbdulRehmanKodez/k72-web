import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"


const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = ['/public/dbz.jpg',
    '/public/Sanji.jpg',
    '/public/doffy.jpg',
    '/public/Luffy.jpg',
    '/public/Zoro.jpg',
    '/public/nika.jpg',
    '/public/sabo.jpg',
    '/public/rock.jpg',
    '/public/shanks.jpg',
  ]
 

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.to(imageDivRef.current,{
         scrollTrigger:{
          trigger:imageDivRef.current,
          markers:true,
          pin:true,
          start:"top 35%",
          end:"top -50%",
          onUpdate:(elam)=>{
            const index = Math.floor (elam.progress*imageArray.length)
            if (index=== 0){
               imageRef.current.src =imageArray[0]
            }
             if (index=== 1){
               imageRef.current.src =imageArray[1]
            }
             if (index=== 2){
               imageRef.current.src =imageArray[2]
            }
             if (index=== 3){
               imageRef.current.src =imageArray[3]
            }
             if (index=== 4){
               imageRef.current.src =imageArray[4]
            }
             if (index=== 5){
               imageRef.current.src =imageArray[5]
            }
            if (index=== 6){
               imageRef.current.src =imageArray[6]
            }
            if (index=== 7){
               imageRef.current.src =imageArray[7]
            }
            if (index=== 8){
               imageRef.current.src =imageArray[8]
            }
        
  }

         }
    })
  })
  return (
    <div>
      <div className='section1'>
          <div ref={imageDivRef} className='absolute h-[300px] w-[220px] top-6
          0 left-100 rounded-2xl overflow-hidden bg-amber-500'>
            <img ref={imageRef} className='' src="/public/dbz.jpg" alt="" />
      </div>
     <div >
      <h1 className='relative text-[290px] text-amber-50 text-center mt-[320px] uppercase leading-60'>Soixan7e  <br />douze</h1>
     </div>
     <div >
      <p className='text-amber-50 pl-[60%] text-[20px] mt-20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  Pirates are evil? Marines are righteous? These terms have always changed throughout the course of history! Kids who have never seen peace and kids who have never seen war have different values! Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say? Of course it will… but only those who win the war will become Justice!"</p>
     </div>

      </div>
      <div className='swction2 h-screen'></div>
    </div>
  )
}

export default Agence