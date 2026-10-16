import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../.config';

function TeacherCourseList() {
    const [courses, setCourses ] = useState([]);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchTeacherCourses = async() => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch(`${API_BASE_URL}/courses/teacher`, {
                    headers: { "x-auth": token }
                });
                if (response.ok) {
                    const data = await response.json();
                    setCourses(data);
                }
            } catch (err) {
                console.error("Error fetching teacher courses:", err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchTeacherCourses();
    }, []);

    if (loading) return <p className="loading-message">Loading your current course offerings...</p>

    return (
        <div className="teacher-home-panel" style={{ width: "400px"}}>
            <h3>Course Offerings</h3>
            <p>"If you're good at something, never do it for free."</p>
            {courses.length === 0 ? (
                <p>You haven't created any courses yet.</p>
            ) : (
                <div className="teacher-courselist-container">
                    {courses.map(course => (
                        <div key={courses._id} className="teacher-home-card">
                            <span className="teacher-course-num"><strong>{course.courseNumber}</strong><span style={{ margin: "0px", textAlign: "right", display: "block", float: "right", opacity:"0.9"}}>{course.semester}</span></span>
                            <span className="teacher-course-name">{course.courseName}</span>
                            <span className="enrolled-students">Enrolled: {course.students?.length || 0}</span>
                        </div>
                    ))}
                </div>
            )}
       </div>
    );
}

export default TeacherCourseList;