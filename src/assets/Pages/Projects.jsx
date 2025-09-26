import React from 'react'
import Projectcard from '../Components/Projects/Projectcard'

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
  return (
    <div  > 
      <div className='pt-[280px] p-2'>
      <h1 className='text-[200px] font-[font2] text-black -mb-[85px]'>PROJETS</h1>
      </div>
           {cards.map(function(elem){
            return <Projectcard   image1 = {elem.image1}
                                   image2 = {elem.image2}/>
           })}
      
    </div>
  )
}

export default Projects