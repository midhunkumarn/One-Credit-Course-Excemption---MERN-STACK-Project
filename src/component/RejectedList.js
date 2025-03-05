import { useState, useEffect } from "react";
import FacultySidebar from "./FacultySidebar";
import "./RejectedList.css"; 

export default function RejectedList() {
    const [rejectedRequests, setRejectedRequests] = useState([]);

    // ✅ Fetch rejected requests from backend on component mount
    useEffect(() => {
        fetch("http://localhost:5000/home/rejectedlist") 
            .then(response => response.json())
            .then(data => setRejectedRequests(data))
            .catch(error => console.error("❌ Error fetching rejected requests:", error));
    }, []);

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
                    {rejectedRequests.length > 0 ? (
                        rejectedRequests.map((request, index) => (
                            <div key={index} className="card-table-row">
                                <span>{request.name}</span>
                                <span>{request.rollNumber}</span>
                                <span>{request.department}</span>
                                <span>{request.completedCourses?.join(", ")}</span>
                                <span>{request.exemptionRequested}</span>
                                <span>{request.requestDate}</span>
                                <span>{request.rejectedDate}</span>
                                <span>{request.reason}</span>
                            </div>
                        ))
                    ) : (
                        <p>No rejected requests found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
