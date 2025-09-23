import React from 'react'
import { Link } from 'react-router-dom'

const Homebottom = () => {
  return (
    <div>
    
      
    <div className=' flex items-center justify-center gap-2 '>
      <Link  className='text-[90px] leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] text-white border-2 rounded-full px-[25px] ' to='/Projects'>PROJETS</Link>
      
      <Link  className='text-[90px] leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] text-white border-2 rounded-full pl-[25px] pr-[20px]' to='/Agence'>AGENCE</Link>
    </div>
    <div>MONTREAL</div>
    </div>
  )
}

export default Homebottom