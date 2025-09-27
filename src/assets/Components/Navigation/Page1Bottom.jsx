import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {
  useGSAP(function(){
    gsap.to('.image',{
      rotate:360,
      duration:5  ,
      repeat:-1,
      ease:'linear',
    })
  })
  return (
    <div className='absolute w-[95vw] bottom-0 flex justify-between pl-20 pr-10' >
      <div>
        <h2 className='font-[Font3] text-[20px]'>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className='font-[Font3] text-gray-400 text-[15px]'>BESPOKE FREELANCE</h3>
      </div>
      <div id='img-dev' className='mb-20'>
        <img  className='image'  src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
      </div>

    </div>
  )
}

export default Page1Bottom