import React, { useState } from 'react';
import './ExcemptionCard.css';

const ExcemptionCard = () => {
  const [courseDetails, setCourseDetails] = useState({
    name: '',
    courseCode: '',
    department: '',
    faculty: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('Pending'); // Status of the course (Pending, Approved, Rejected)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      const approvalStatus = Math.random() > 0.5 ? 'Approved' : 'Rejected';
      setStatus(approvalStatus);
    }, 240000); 
  };

  return (
    <div className="excemption-card-container">
     
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="course-form">
          <h3>Enter Course Exemption Details</h3>
          <div className="input-group">
            <label>Course Name</label>
            <input
              type="text"
              name="name"
              value={courseDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Course Code</label>
            <input
              type="text"
              name="courseCode"
              value={courseDetails.courseCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={courseDetails.department}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Faculty Name</label>
            <input
              type="text"
              name="faculty"
              value={courseDetails.faculty}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="excemption-card">
          <h3 className="course-name">Course: {courseDetails.name}</h3>
          <div className="course-details">
            <div className="course-info">
              <strong>Course Code:</strong> {courseDetails.courseCode}
            </div>
            <div className="course-info">
              <strong>Department:</strong> {courseDetails.department}
            </div>
            <div className="course-info">
              <strong>Faculty Name:</strong> {courseDetails.faculty}
            </div>
            <div className="course-info">
              <strong>Status:</strong> {status}
            </div>
            <div className="course-info">
              <strong>Note:</strong> Your course exemption is under review. Please allow 24 hours for processing.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcemptionCard;
