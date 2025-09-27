import React from 'react'
import Projectcard from '../Components/Projects/Projectcard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import TiltText from '../components/Navigation/TiltText'
import Page1Bottom from '../components/Navigation/Page1Bottom'
const Projects = () => {
   const cards =[
        {image1:'/public/p1.jpg',
            image2:'/public/p2.jpg'
        },{image1:'/public/p3.jpg',
            image2:'/public/p4.jpg'
        },{image1:'/public/p5.jpg',
            image2:'/public/p6.jpg'
        },{image1:'/public/p7.jpg',
            image2:'/public/p8.jpg'
        }
    ]
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
  gsap.from(".hero", {
    height: "50px",
    stagger: { amount: 0.3 },
    scrollTrigger: {
      trigger: ".lol",
      markers: true,
      scrub: true,
      start: "top 100%",
      end: "top -150%"
    }
  });
});

  return (

    <div> 
       <div className='h-screen   bg-white flex justify-center  items-center pl-[8px] pr-[8px]'>
      <div className= ' h-[650px] w-[1450px]  rounded-3xl bg-[url(https://images.alphacoders.com/138/1383009.jpg)] bg-center bg-cover shadow-xl ' >
      
      
      <TiltText/>
      <Page1Bottom/>
     
       
      
        </div>
      
    </div>
      <div className='meow pt-[280px] p-2'>
      <h1 className='text-[200px] font-[font2] text-black -mb-[85px]'>PROJETS</h1>
      </div>
     <div className='heee lol'>
  {cards.map((elem, idx) => (
    <div key={idx} className='hero w-full h-[450px] overflow-hidden flex gap-2 px-2 mt-2'>
      <Projectcard image1={elem.image1} image2={elem.image2}/>
    </div>
  ))}
</div>

    </div>
  )
}

export default Projects