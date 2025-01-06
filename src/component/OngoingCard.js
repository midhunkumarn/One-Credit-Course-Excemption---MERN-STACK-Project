import React from 'react';
import './OngoingCard.css'; 
import Sidebar from './Sidebar';

const OngoingCard = () => {
  const courses = [
    {
      name: 'Web Development',
      domain: 'Frontend Development',
      startDate: '15th January 2025',
      endDate: '15th March 2025',
      faculty: 'John Doe'
    },
    {
      name: 'Data Science',
      domain: 'Machine Learning & AI',
      startDate: '1st February 2025',
      endDate: '1st April 2025',
      faculty: 'Jane Smith'
    },
    {
      name: 'Digital Marketing',
      domain: 'Marketing',
      startDate: '20th January 2025',
      endDate: '20th March 2025',
      faculty: 'Alice Johnson'
    },
    {
      name: 'Cyber Security',
      domain: 'Network Security',
      startDate: '5th February 2025',
      endDate: '5th April 2025',
      faculty: 'Bob Brown'
    }
  ];

  return (
    
        
      <div className="ongoing-card-container">
      <Sidebar />
        {courses.map((course, index) => (
          <div key={index} className="ongoing-card">
            <h3 className="course-name">{course.name}</h3>
            <div className="course-details">
              <div className="course-info">
                <strong>Domain:</strong> {course.domain}
              </div>
              <div className="course-info">
                <strong>Starting Date:</strong> {course.startDate}
              </div>
              <div className="course-info">
                <strong>Ending Date:</strong> {course.endDate}
              </div>
              <div className="course-info">
                <strong>Faculty:</strong> {course.faculty}
              </div>
            </div>
          </div>
        ))}
      </div>
      
  );
};

export default OngoingCard;
