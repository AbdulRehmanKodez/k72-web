import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"


const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    '/public/nika.jpg',
    '/public/Luffy.jpg',
    '/public/ace2.jpg',
    '/public/dbz.jpg',
    '/public/Sanji.jpg',
    '/public/doffy.jpg',
    '/public/Zoro.jpg',
    '/public/sabo.jpg',
    '/public/rock.jpg',
    '/public/shanks.jpg',
  ]
 

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.to(imageDivRef.current,{
         scrollTrigger:{
          trigger:imageDivRef.current,
          
          pin:true,
          start:"top 35%",
          end:"top -100%",
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
            if (index=== 9){
               imageRef.current.src =imageArray[9]
            }
        
  }

         }
    })
  })

                  
  // section2

   useGSAP(function(){
        gsap.from(".rotateText",{
           rotationX: -90,

            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".rotateText",
                // markers:true,
                start:"top 80%",
                end:"top -150%",

                scrub:2
            }
        })
    })





  return (
    <div >
      <div className='section1'>
          <div ref={imageDivRef} className='absolute h-[300px] w-[220px] top-60 left-100 rounded-2xl overflow-hidden '>
            <img ref={imageRef} className='' src="/public/dbz.jpg" alt="" />
      </div>
     <div >
      <h1 className='relative text-[270px] font-[font2] text-black text-center mt-[380px] uppercase leading-60'>Soixan7e  <br />douze</h1>
     </div>
     <div >
      <p className='text-black pl-[50%]  text-[40px] font-[font1] mt-20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  Pirates are evil? Marines are righteous? These terms have always changed throughout the course of history! Kids who have never seen peace and kids who have never seen war have different values! Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say? Of course it will… but only those who win the war will become Justice!"</p>
     </div>

      </div>
                             {/* section 2 */}


      <div className='swction2 '></div>
       <div id='pg2-main' className='bg-white text-black '>

        <div  className='rotateText '>
            <h1  className=' text-[20vw]  font-[Font1] flex items-center justify-center leading-[35vw] ' >MY</h1>
        </div>
        <div className='rotateText'>
            <h1 className=' text-[20vw]  font-[Font1] flex items-center justify-center leading-[35vw]' >SOLDERS</h1>
        </div>
        <div className='rotateText'>
            <h1 className=' text-[20vw]  font-[Font1] flex items-center justify-center leading-[35vw]' >PUSH</h1>
        </div>
        <div className='rotateText'>
        <h1 className=' text-[20vw]  font-[Font1] flex items-center justify-center leading-[35vw]' >FORWARD</h1>
        </div>
        <div className='h-[2px] w-[45vw] bg-black mx-auto mt-32 mb-20'>
            
            
        </div>
          
    </div>
    </div>
    
  )
}

export default Agence