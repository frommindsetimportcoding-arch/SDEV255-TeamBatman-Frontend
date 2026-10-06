import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './style.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoursePreview from './components/CoursePreview'

// Views
import Courses from './pages/Courses'
import Schedule from './pages/Schedule'
import Login from './pages/Login'


function App() {

  return (
    <>
      {/* This establishes the definitions of the Route paths to the elements. */}
      {/* Standard is BrowserRouter import, but GitHub pages runs static files so legacy 
          HashRouter provides a more seamless experience */}
      <HashRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={
              <main>

                {/* -- Hero Section -- */}
                <Hero />

                {/* -- Course Preview -- */}
                <CoursePreview /> 

              </main>
            }
          />

          {/* Route for Courses link */ }
          <Route path="/courses" element={<Courses />} />

          {/* Route for home Schedule link */ }
          <Route path="/schedule" element={<Schedule />} />

          {/* Route for Login page link */ }
          <Route path="/login" element={<Login />} />

        </Routes>

      </HashRouter>

    </>
  )
}

export default App
