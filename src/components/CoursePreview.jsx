
import CourseCard from './CourseCard'
import React, { useState, useEffect } from 'react';

function CoursePreview() {
    // Create state varable to hold database courses
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the backend when page loads
    useEffect(() => {
        // Commented out. Uncomment for local test
        //fetch("http://localhost:3000/api/courses")
        fetch("https://sdev255-teambatman-backend.onrender.com/api/courses")
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
                    <CourseCard
                        key={course._id}
                        number = {course.courseNumber}
                        title = {course.courseName}
                        dept = {course.subjectArea}
                        credits = {course.credits.toString()}
                    /> 
                ))}
            </div>
        </section>
    )
}

export default CoursePreview