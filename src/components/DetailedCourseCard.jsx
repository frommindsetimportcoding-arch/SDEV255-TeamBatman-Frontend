function DetailedCourseCard({ course, onClose }) {
    // Fallback if data is missing
    if (!course) return null;

    return (
        <div className="backdrop-blur" onClick={onClose}>
            <div className="detailed-course-card" onClick={(e) => e.stopPropagation()}>

                <div className="detailed-course-header">
                    <span className="detailed-course-number">
                        {course.courseNumber}
                    </span>
                    <span className="detailed-course-semester">
                        {course.semester} Term
                    </span>
                </div>

                {/* -- Title Section -- */}
                <h2 className="detailed-course-name">
                    {course.courseName}
                </h2>

                {/* -- Additional details in grid format -- */}
                <div className="detailed-course-grid">
                    <div className="detailed-course-subject">
                        <strong>Course Discipline:</strong>
                        <span>{course.subjectArea}</span>
                    </div>
                    <div className="detailed-course-credits">
                        <strong>Academic Earnings:</strong>
                        <span>{course.credits} Credits</span>
                    </div>
                    <div className="detailed-course-teacher">
                        <strong>
                            Assigned Instructor:
                        </strong>
                        <span>
                            Professor {course.createdBy.firstName} {course.createdBy.lastName}
                        </span>
                        <br/>
                        <span>
                            Email: {course.createdBy.email}
                        </span>
                    </div>
                </div>
                <div className="detailed-course-description">
                    <strong>
                        Course Description:
                    </strong>
                    <p>
                        {course.description || "Course description must be updated."}
                    </p>
                </div>
                <button onClick={onClose}>
                    Return
                </button>
            </div>
        </div>
    );
}

export default DetailedCourseCard;