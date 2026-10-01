
import CourseCard from './CourseCard'

function CoursePreview() {
    return (
        <section className = "courses-preview">
            <div className = "section-heading">
                <p className = "eyebrow">EXPLORE</p>
                <h2>Available Courses</h2>
                <p>Explore courses available for the upcoming semester.</p>
            </div>
            <div className = "course-grid">
                <CourseCard
                    number = "CS 101"
                    title = "Introduction to Programming"
                    dept = "Computer Science"
                    credits = "3"
                /> 
                <CourseCard
                    number = "MATH 101"
                    title = "College Mathematics"
                    dept = "Mathematics"
                    credits = "3"
                />
                <CourseCard
                    number = "ENG 101"
                    title = "English Composition"
                    dept = "English"
                    credits = "3"
                /> 
            </div>
        </section>
    )
}

export default CoursePreview