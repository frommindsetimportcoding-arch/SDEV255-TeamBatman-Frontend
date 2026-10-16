
import CourseCard from './CourseCard'
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../.config';
import DetailedCourseCard from './DetailedCourseCard';

function CoursePreview() {
    // Create state varable to hold database courses
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Fetch data from the backend when page loads
    useEffect(() => {
        // Constant used to switch between testing and production URLS. --> .config to switch. 
        fetch(`${API_BASE_URL}/courses`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);  // This saves the database array into state
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching from backend:", err);
                setLoading(false);
            });
    }, []); // The empty array forces it to run only once when loading.

    if (loading) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Loading Courses...</div>;
    }

    return (
        <section className = "courses-preview">
            <div className = "section-heading">
                <p className = "eyebrow">EXPLORE</p>
                <h2>Available Courses</h2>
                <p>Explore courses available for the upcoming semester.</p>
            </div>
            <div className = "course-grid">
               {courses.map((course) => (
                    <div 
                    key={course._id}
                    className="course-card-white"
                    onClick={() => setSelectedCourse(course)}
                    style={{ cursor: "pointer" }}                    
                    >
                        <CourseCard
                            key={course._id}
                            number = {course.courseNumber}
                            title = {course.courseName}
                            dept = {course.subjectArea}
                            credits = {course.credits.toString()}
                        /> 
                    </div>
                ))}
            </div>
            {selectedCourse && (
                <DetailedCourseCard
                    course={selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                />
            )}
        </section>
    );
}

export default CoursePreview;