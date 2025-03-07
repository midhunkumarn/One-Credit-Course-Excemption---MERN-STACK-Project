import React from 'react';
import './CompletedCard.css'; 
import Sidebar from './Sidebar';

const CompletedCard = () => {
  const completedCourses = [
    { name: 'Web Development', domain: 'Frontend Development', startDate: '15th June 2024', endDate: '15th August 2024', faculty: 'John Doe', result: 'Completed' },
    { name: 'Data Science', domain: 'Machine Learning & AI', startDate: '1st March 2024', endDate: '1st June 2024', faculty: 'Jane Smith', result: 'Completed' },
    { name: 'Digital Marketing', domain: 'Marketing', startDate: '20th May 2024', endDate: '20th July 2024', faculty: 'Alice Johnson', result: 'Not Completed' },
    { name: 'Cyber Security', domain: 'Network Security', startDate: '5th April 2024', endDate: '5th June 2024', faculty: 'Bob Brown', result: 'Completed' }
  ];

  const getButtonClass = (result) => 
    result === 'Completed' ? 'completed-button' : 'not-completed-button';

  return (
    <div className="main-container"> {/* Flex container */}
      <Sidebar />
      <div className="completed-card-container">
        {completedCourses.map((course, index) => (
          <div key={index} className="completed-card">
            <h3 className="course-name">{course.name}</h3>
            <div className="course-details">
              <div className="course-info"><strong>Domain:</strong> {course.domain}</div>
              <div className="course-info"><strong>Starting Date:</strong> {course.startDate}</div>
              <div className="course-info"><strong>Ending Date:</strong> {course.endDate}</div>
              <div className="course-info"><strong>Faculty:</strong> {course.faculty}</div>
            </div>
            <button className={`course-button ${getButtonClass(course.result)}`}>
              {course.result}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedCard;
