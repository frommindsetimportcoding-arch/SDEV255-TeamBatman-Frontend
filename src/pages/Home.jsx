import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../.config';
import Hero from '../components/Hero'; 
import CoursePreview from '../components/CoursePreview';
import EnrolledCoursesHome from '../components/EnrolledCoursesHome';
import TeacherCourseList from '../components/TeacherCourseList';

function Home() {
    const [savedSchedule, setSavedSchedule] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    useEffect(() => {
        const loadStudentSchedule = async () => {
            if (token && role === "student") {
                try {
                    const response = await fetch(`${API_BASE_URL}/users/schedule`, {
                        headers: { "x-auth": token }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setSavedSchedule(data);
                    }
                } catch (err) {
                    console.error("Error loading student homepage schedule:", err);
                }
            }
            setLoading(false);
        };

        loadStudentSchedule();
    }, [token, role]);

    if (loading) return <p className="loading-message">Loading Campus Hub...</p>;

        return (
        <div className="home-container">

            {/* -- Hero Section -- */}
            <Hero />

            {/* CORE WORKSPACE: Styled split container */}
            <div className="workspace-split" style={{ display: "flex", gap: "30px", maxWidth: "100%", padding: "10px 20px", alignItems: "flex-start" }}>
                
                {/* Sticky left container conditional based on role logged in */}
                {token && (
                    <div className="student-schedule-builder" style={{ 
                        width: "300px", 
                        flexShrink: 0,
                        position: "sticky", // Holds the item fixed relative to the screen view
                        top: "20px"         
                    }}>
                        {role === "teacher" && <TeacherCourseList />}
                        {role === "student" && <EnrolledCoursesHome officialCourses={savedSchedule} />}
                    </div>
                )}

                {/* Right side container: fits remaining space. */}
                <div className="student-course-list" style={{ flex: "1", minWidth: 0 }}>

                    {/* -- Course Preview -- */}
                    <CoursePreview />
                </div>

            </div>
        </div>
    );

}

export default Home;
