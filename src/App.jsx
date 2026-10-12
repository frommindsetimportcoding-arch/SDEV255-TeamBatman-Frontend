import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './style.css'

// Components
import Navbar from './components/Navbar'


// Views
import Courses from './pages/Courses'
import Schedule from './pages/Schedule'
import Login from './pages/Login'
import Home from './pages/Home'
import Teacher from './pages/Teacher'
import Student from './pages/Student'


function App() {

  return (
    <>
      {/* This establishes the definitions of the Route paths to the elements. */}
      {/* Standard is BrowserRouter import, but GitHub pages runs static files so legacy 
          HashRouter provides a more seamless experience */}
      <HashRouter>
        <Navbar />
        
        <Routes>
          {/* -- Route for Home link -- */}
          <Route path="/" element={<Home />}/>

          {/* -- Route for Courses link -- */}
          <Route path="/courses" element={<Courses />} />

          {/* -- Route for home Schedule link -- */}
          <Route path="/schedule" element={<Schedule />} />

          {/* -- Route for Teacher Dashboard -- */}
          <Route path="/teacher" element={<Teacher />} />

          {/* -- Route for Student Dashboard -- */}
          <Route path="/student" element={<Student />} /> 

          {/* -- Route for Login page link -- */}
          <Route path="/login" element={<Login />} />

        </Routes>

      </HashRouter>

    </>
  )
}

export default App
