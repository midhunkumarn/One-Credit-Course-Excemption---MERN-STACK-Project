import React from 'react';
import './CourseCountCard.css';

const CourseCountCard = ({ completedCourses }) => {
    return (
        <div className="course-count-card">
            <h2 className="course-count-title">Courses Completed</h2>
            <p className="course-count">{completedCourses}</p>
        </div>
    );
};

export default CourseCountCard;