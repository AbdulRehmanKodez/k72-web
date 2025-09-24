import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Agence from './assets/Pages/Agence'
import Projects from './assets/Pages/Projects'
import Stairs from './assets/Components/Common/Stairs'

const App = () => {
  return (
    <div >
      <Stairs />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Projects/>} />


      </Routes>
    </div>
  )
}

export default App