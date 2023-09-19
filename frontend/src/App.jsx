import { useState } from 'react'

import BlogList from './components/BlogList'
import Navbar from './components/Navbar'
import BlogPost from './components/BlogPost'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    < >
      <Navbar />
      <Routes >
        <Route path='/' element = {<BlogList/>} exact/>
        <Route  path='/blog/:id' element = {<BlogPost/> } />
      </Routes>
   
    </>
  )
}

export default App
