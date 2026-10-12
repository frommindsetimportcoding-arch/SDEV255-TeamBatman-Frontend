import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../.config';
import CourseDashboard from '../components/CourseDashboard';
import CourseCreator from '../components/CourseCreator';

function Teacher() {
    const [courses, setCourses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingCourse, setEditingCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTeacherCourses();
    }, []);

    const fetchTeacherCourses = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(`${API_BASE_URL}/courses/teacher`, {
               headers: { "x-auth": token } 
            });
            if (!response.ok) throw new Error("Failed to load catalog entries.");
            const data = await response.json();
            setCourses(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveCourse = async (formData) => {
        const token = localStorage.getItem("token");
        const method = editingCourse ? "PUT" : "POST";
        const urlPath = editingCourse ? `/courses/${editingCourse._id}` : "/courses";

        try {
            const response = await fetch(`${API_BASE_URL}${urlPath}`, {
                method: method,
                headers: { "Content-Type": "application/json", "x-auth": token },
                body: JSON.stringify({ ...formData, credits: Number(formData.credits) })
            });

            if (!response.ok) throw new Error("Failed to save data to database.");

            alert(editingCourse ? "Course edits saved" : "Course created successfully");
            handleCloseForm();
            fetchTeacherCourses();
        } catch (err) {
            alert(err.message);
        }
    };

    const handleDeleteCourse = async (courseId) => {
        if (!window.confirm("Permanently drop this course from the school catalog?")) return;
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
                method: "DELETE",
                headers: { "x-auth": token }
            });
            
            if (!response.ok) throw new Error("Failed to delete course.");
            fetchTeacherCourses();
        } catch (err) {
            alert(err.message);
        }
    };

    const handleEditClick = (course) => {
        setEditingCourse(course);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setEditingCourse(null);
        setShowForm(false);
    };

    if (loading) return <p>Loading Teacher Workspace...</p>;

    return (
        <main className='teacher-page'>
            <section className='teacher-header'>
                <p className='eyebrow'>FACULTY INTERFACE</p>
                <h1>Welcome, Professor {localStorage.getItem("lastName")}.</h1>
            </section>
            
            <section className='teacher-courses'>
                <div className='teacher-section-header'>
                    <h2>My Active Course Templates</h2>
                    {!showForm && <button className='btn' onClick={() => setShowForm(true)}>Create Course</button>}
                </div>

                {showForm && (
                    <CourseCreator
                        editingCourse={editingCourse}
                        onSave={handleSaveCourse}
                        onCancel={handleCloseForm}
                    />
                )}

                <CourseDashboard
                    courses={courses}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteCourse}
                />
            </section>
        </main>
    );
}

export default Teacher;