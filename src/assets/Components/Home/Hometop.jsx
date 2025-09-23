import React from 'react'
import Video from '/src/assets/Components/Home/Video'

const Hometop = () => {
  return (
    <div className=' text-white  text-center'>
        <div className='text-[10vw] uppercase flex items-center justify-center leading-[9vw]'>L'étincelle</div>
            <div className='flex items-center justify-center'>
        <div className='text-[10vw] uppercase flex items-center justify-center leading-[9vw]'>qui</div> 
        <div className='h-[100px] w-[220px] overflow-hidden rounded-full  leading-[9vw]  object-cover ' ><Video /></div> 
        <div className='text-[10vw] uppercase flex items-center justify-center leading-[9vw]' >génère</div>
             </div>
        <div className='text-[10vw] uppercase flex items-center justify-center leading-[9vw]'>la créativité</div>
    </div>
  )
}

export default Hometop