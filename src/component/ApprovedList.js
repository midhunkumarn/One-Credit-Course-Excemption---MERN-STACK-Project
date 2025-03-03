import { useState } from "react";
import FacultySidebar from "./FacultySidebar";
import "./ApprovedList.css"; 

export default function ApprovedList({ approvedRequests }) {
    return (
        <div className="faculty-container">
            <FacultySidebar />
            <div className="dashboard-content">
                <h2>Approved Exemption Requests</h2>
                <div className="card-table">
                    <div className="card-table-header">
                        <span>Student Name</span>
                        <span>Roll No.</span>
                        <span>Department</span>
                        <span>Completed Courses</span>
                        <span>Exemption Requested</span>
                        <span>Request Date</span>
                    </div>
                    {approvedRequests.map((request, index) => (
                        <div key={index} className="card-table-row">
                            <span>{request.name}</span>
                            <span>{request.rollNumber}</span>
                            <span>{request.department}</span>
                            <span>{request.completedCourses.join(", ")}</span>
                            <span>{request.exemptionRequested}</span>
                            <span>{request.requestDate}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
