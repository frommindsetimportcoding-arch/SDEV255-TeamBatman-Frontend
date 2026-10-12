import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const firstName = localStorage.getItem("firstName");

    let userRole = null;
    
    // If a session token exists, decode and inspect role

    if (token) {
        try {
            const decoded = jwtDecode(token);
            userRole = decoded.role;  // Student or Teacher? 
        } catch (err) {
            console.error("Invalid session token structure:", err);
            // Clean up corrupted token.
            localStorage.clear();
        }
    }
    
    // Handle Sign Out
    const handleLogout = () => {
        if (!window.confirm("Are you sure you want to sign out?")) return;

        localStorage.clear(); // Clear token payload
        alert("They think I'm hiding in the shadows, but I am the shadows.");
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar">

                <div className="nav-container">

                    <Link to="/" className="nav-logo"><span style={{ color: "var(--white)" }}>Course</span>Hub</Link>
                    
                    {/* Conditional Link Routing */}
                        <div className="nav-links">

                            <Link to="/" className="nav-link">Home</Link>

                            {/* GUEST / UNAUTHENTICATED VIEWS */}

                            {!token && (
                                <Link to="/login" className="nav-link">Login</Link>
                            )}

                            {/* STUDENT VIEWS */}

                            {token && userRole === "student" && (
                                <Link to="/student" className='nav-link'>Student</Link>
                            )}

                            {/* TEACHER VIEWS */}

                            {token && userRole === "teacher" && (
                                <Link to="/teacher" className='nav-link'>Teacher</Link>
                            )}

                            {/* PROFILE ACCENTS & LOGOUT FUNCTION */}

                            {token && (
                                <div className='session-controls'>
                                    <span className='nav-accents'>
                                        {firstName || "User"}
                                    </span>
                                    <button 
                                        className='logout-btn'
                                        onClick={handleLogout}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                            
                            
                            {/*  COMMENTING OUT UNLESS WE DECIDE TO USE THEM
                            <Link to="/courses" className="nav-link">Courses</Link>

                            <Link to="/schedule" className="nav-link">Schedule</Link>
                            */}
                        </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar
