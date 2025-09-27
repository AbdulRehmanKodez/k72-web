import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Agence from './assets/Pages/Agence'
import Projects from './assets/Pages/Projects'

import Navbar from './assets/Components/Navigation/Navbar'
import Navoptionpage from './assets/Components/Navigation/Navoptionpage'

const App = () => {
  return (
    <div  >
      {/* <Navoptionpage/> */}
     
      <Navbar/>
       
      <Routes>
         
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/navopt' element={<Navoptionpage/>} />


      </Routes>
    </div>
  )
}

export default App