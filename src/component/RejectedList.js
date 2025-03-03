import { useState } from "react";
import FacultySidebar from "./FacultySidebar";
import "./RejectedList.css"; 

export default function RejectedList({ rejectedRequests }) {
    return (
        <div className="faculty-container">
            <FacultySidebar />
            <div className="dashboard-content">
                <h2>Rejected Exemption Requests</h2>
                <div className="card-table">
                    <div className="card-table-header">
                        <span>Student Name</span>
                        <span>Roll No.</span>
                        <span>Department</span>
                        <span>Completed Courses</span>
                        <span>Exemption Requested</span>
                        <span>Request Date</span>
                        <span>Rejected Date</span>
                        <span>Reason</span>
                    </div>
                    {rejectedRequests.map((request, index) => (
                        <div key={index} className="card-table-row">
                            <span>{request.name}</span>
                            <span>{request.rollNumber}</span>
                            <span>{request.department}</span>
                            <span>{request.completedCourses.join(", ")}</span>
                            <span>{request.exemptionRequested}</span>
                            <span>{request.requestDate}</span>
                            <span>{request.rejectedDate}</span>
                            <span>{request.reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
