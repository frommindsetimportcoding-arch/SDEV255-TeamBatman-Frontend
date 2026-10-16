function ScheduleBuilder({ draft, onRemove, onSave }) {
    // Calculate total credits in ScheduleBuilder cart
    const totalCredits = draft ? draft.reduce((sum, course) => sum + (course.credits || 0), 0) : 0;
    
    return (
        <div className="schedule-builder-container">
            <h2>Schedule Builder</h2>
            <p>Schedule Builder will initialize with your current enrollments. You may modify this selection by adding
                or removing courses. When you are happy with your selections, you may update your schedule by hitting "Enroll".
            </p>

            {/* Check if the draft state array is empty */}
            {!draft || draft.length === 0 ? (
                <p>Your schedule is currently empty. Add courses from the catalog list.</p>
            ) : (
                <div className="schedule-builder-list">
                    {draft.map((course) => (
                        <div key={course._id} className="schedbuild-item-card">
                            <div>
                                <span className="schedbuild-item-heading">{course.courseNumber} | {course.courseName}</span>
                                <span className="schedbuild-item-sub">{course.semester} | {course.credits} Credits</span>
                            </div>

                            <button
                                className="schedbuild-remove-btn"
                                onClick={() => onRemove(course._id)}
                            >
                                X
                            </button>
                        </div>
                    ))}

                    {/* Schedule Builder Summary */}
                    <div className="schedbuild-summary">
                        <p>
                            <span>Total Credits:</span>
                            <span>{totalCredits} Credit Hours</span>
                        </p>
                    </div>

                    <button
                        className="schedbuild-submit-btn"
                        onClick={onSave}
                    >
                        Enroll
                    </button>
                </div>
            )}
        </div>
    );
}

export default ScheduleBuilder;