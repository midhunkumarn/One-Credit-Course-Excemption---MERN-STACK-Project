import React from 'react';
import './CompletedCard.css'; 
import Sidebar from './Sidebar';

const CompletedCard = () => {
  const completedCourse1 = {
    name: 'Web Development',
    domain: 'Frontend Development',
    startDate: '15th June 2024',
    endDate: '15th August 2024',
    faculty: 'John Doe',
    result: 'Completed'
  };

  const completedCourse2 = {
    name: 'Data Science',
    domain: 'Machine Learning & AI',
    startDate: '1st March 2024',
    endDate: '1st June 2024',
    faculty: 'Jane Smith',
    result: 'Completed'
  };

  const completedCourse3 = {
    name: 'Digital Marketing',
    domain: 'Marketing',
    startDate: '20th May 2024',
    endDate: '20th July 2024',
    faculty: 'Alice Johnson',
    result: 'Not Completed'
  };

  const completedCourse4 = {
    name: 'Cyber Security',
    domain: 'Network Security',
    startDate: '5th April 2024',
    endDate: '5th June 2024',
    faculty: 'Bob Brown',
    result: 'Completed'
  };

  const getButtonClass = (result) => {
    return result === 'Completed' ? 'completed-button' : 'not-completed-button';
  };

  return (
    <div className="completed-card-container">
      <Sidebar />
      <div className="completed-card">
        <h3 className="course-name">{completedCourse1.name}</h3>
        <div className="course-details">
          <div className="course-info">
            <strong>Domain:</strong> {completedCourse1.domain}
          </div>
          <div className="course-info">
            <strong>Starting Date:</strong> {completedCourse1.startDate}
          </div>
          <div className="course-info">
            <strong>Ending Date:</strong> {completedCourse1.endDate}
          </div>
          <div className="course-info">
            <strong>Faculty:</strong> {completedCourse1.faculty}
          </div>
        </div>
        <button className={`course-button ${getButtonClass(completedCourse1.result)}`}>
          {completedCourse1.result === 'Completed' ? 'Completed' : 'Not Completed'}
        </button>
      </div>

      {/* Course 2 */}
      <div className="completed-card">
        <h3 className="course-name">{completedCourse2.name}</h3>
        <div className="course-details">
          <div className="course-info">
            <strong>Domain:</strong> {completedCourse2.domain}
          </div>
          <div className="course-info">
            <strong>Starting Date:</strong> {completedCourse2.startDate}
          </div>
          <div className="course-info">
            <strong>Ending Date:</strong> {completedCourse2.endDate}
          </div>
          <div className="course-info">
            <strong>Faculty:</strong> {completedCourse2.faculty}
          </div>
        </div>
        <button className={`course-button ${getButtonClass(completedCourse2.result)}`}>
          {completedCourse2.result === 'Completed' ? 'Completed' : 'Not Completed'}
        </button>
      </div>

      {/* Course 3 */}
      <div className="completed-card">
        <h3 className="course-name">{completedCourse3.name}</h3>
        <div className="course-details">
          <div className="course-info">
            <strong>Domain:</strong> {completedCourse3.domain}
          </div>
          <div className="course-info">
            <strong>Starting Date:</strong> {completedCourse3.startDate}
          </div>
          <div className="course-info">
            <strong>Ending Date:</strong> {completedCourse3.endDate}
          </div>
          <div className="course-info">
            <strong>Faculty:</strong> {completedCourse3.faculty}
          </div>
        </div>
        <button className={`course-button ${getButtonClass(completedCourse3.result)}`}>
          {completedCourse3.result === 'Completed' ? 'Completed' : 'Not Completed'}
        </button>
      </div>

      {/* Course 4 */}
      <div className="completed-card">
        <h3 className="course-name">{completedCourse4.name}</h3>
        <div className="course-details">
          <div className="course-info">
            <strong>Domain:</strong> {completedCourse4.domain}
          </div>
          <div className="course-info">
            <strong>Starting Date:</strong> {completedCourse4.startDate}
          </div>
          <div className="course-info">
            <strong>Ending Date:</strong> {completedCourse4.endDate}
          </div>
          <div className="course-info">
            <strong>Faculty:</strong> {completedCourse4.faculty}
          </div>
          
        </div>
        <button className={`course-button ${getButtonClass(completedCourse4.result)}`}>
          {completedCourse4.result === 'Completed' ? 'Completed' : 'Not Completed'}
        </button>
      </div>
    </div>
  );
};

export default CompletedCard;
