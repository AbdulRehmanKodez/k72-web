import React from 'react'
import Video from '/src/assets/Components/Home/Video'
import Hometop from '../Components/Home/Hometop'
import Homebottom from '../Components/Home/Homebottom'


const Home = () => {
  return (
    <div>
    <div className='h-full w-full fixed'>
     <Video/>
    </div>
    <div className='h-screen w-screen relative flex flex-col justify-between'>
           <Hometop/>
           <Homebottom />
    </div>
    </div>
  )
}

export default Home