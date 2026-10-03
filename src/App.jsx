import { useState } from 'react'
import './style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoursePreview from './components/CoursePreview'
import CourseForm from './components/CourseForm'


function App() {

  return (
    <>
      <Navbar />

      {/* -- Main Page Content -- */}
      <main>

          {/* -- Hero Section -- */}
          <Hero />

          {/* -- Course Preview -- */}
          <CoursePreview /> 

          {/* -- Temporary Placement -- */}
          <CourseForm />


      </main>
    </>
  )
}

export default App
