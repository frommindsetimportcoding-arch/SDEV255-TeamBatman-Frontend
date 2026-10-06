import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar">

                <div className="nav-container">

                    <Link to="/" className="nav-logo">CourseHub</Link>

                        <div className="nav-links">

                            <Link to="/" className="nav-link">Home</Link>

                            <Link to="/courses" className="nav-link">Courses</Link>

                            <Link to="/schedule" className="nav-link">Schedule</Link>

                            <Link to="/login" className="nav-link">Login</Link>

                        </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar
