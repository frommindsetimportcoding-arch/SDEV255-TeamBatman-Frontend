function EnrolledCoursesHome({ officialCourses }) {
    // Calculate total registered credit hours
    const totalEnrolledCredits = officialCourses 
        ? officialCourses.reduce((sum, course) => sum + (course.credits) || 0, 0)
        : 0; 

    return (
        <div className="enrolled-courses-container" style={{ width: "400px"}}>
            <div style={{ fontSize: "1.4rem", paddingBottom: "10px", margin: "10px"}}>
                "I made you, you made me first"
            </div>
            <div className="enrolled-header-row">
                <div className="enrolled-credit-total" style={{ marginLeft: "114px" }}>
                    Registered: <span>{totalEnrolledCredits} Credit Hours</span>
                </div>
            </div>

            {/* Validate fetch enrolled courses */}
            {!officialCourses || officialCourses.length === 0 ? (
                <div className="unregistered-fallback">
                    <p>You are not currently enrolled in any courses for the upcoming term.</p>
                </div>
                ) : (
                    <div className="enrolled-schedule-grid">
                        {officialCourses.map((course) => (
                            <div key={course._id} className="enrolled-course-card">
                                <div className="enrolled-card-header">
                                    <span className="enrolled-course-number">{course.courseNumber}</span>
                                    <span className="enrolled-course-term">{course.semester} Term</span>
                                </div>

                                <h3 className="enrolled-course-title">{course.courseName}</h3>
                                <p className="enrolled-course-subject">{course.subjectArea}</p>
                                {/*I don't think I want this here. <p className="enrolled-course-desc">{course.description}</p>*/}

                                <div className="enrolled-card-footer">
                                    <span className="enrolled-course-credits">{course.credits} Credits</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
}

export default EnrolledCoursesHome;