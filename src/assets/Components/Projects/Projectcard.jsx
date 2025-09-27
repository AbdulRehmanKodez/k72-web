import React from 'react'

const Projectcard = (props) => {
   
  return (
    <>
           
          <div className=  'relative  bg-emerald-500 h-full w-1/2 overflow-hidden transition-all   group  hover:rounded-[40px] '>
          <img className='' src={props.image1} alt="" />
          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 '>

          <h1 className='font-[font2] text-[60px] text-white border-3 rounded-full p-2 pt-4 leading-10'>VOIR LE PROJET</h1>
          </div>
          </div>


          <div className='relative bg-fuchsia-600 h-full w-1/2 overflow-hidden transition-all   group  hover:rounded-[40px]'> 
            <img className='' src=
            {props.image2} alt="" />
          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 '>

          <h1 className='font-[font2] text-[60px] text-white border-3 rounded-full p-2 pt-4 leading-10'>VOIR LE PROJET</h1>
          </div>
          
        </div>
    </>
  )
}

export default Projectcard