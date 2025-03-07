import { useState, useEffect } from "react";
import FacultySidebar from "./FacultySidebar";
import "./RejectedList.css";

export default function RejectedList() {
    const [rejectedRequests, setRejectedRequests] = useState([]);

   
    useEffect(() => {
        const fetchRejectedRequests = async () => {
            try {
                const response = await fetch("http://localhost:5000/reject/rejectedlist");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("📩 Fetched rejected requests:", data);
                setRejectedRequests(data);
            } catch (error) {
                console.error("❌ Error fetching rejected requests:", error);
            }
        };
        
        fetchRejectedRequests();
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
                            <div key={request._id || index} className="card-table-row">
                                <span>{request.name || "N/A"}</span>
                                <span>{request.rollNumber || "N/A"}</span>
                                <span>{request.department || "N/A"}</span>
                                <span>{request.completedCourses?.join(", ") || "None"}</span>
                                <span>{request.exemptionRequested || "N/A"}</span>
                                <span>{new Date(request.requestDate).toLocaleDateString() || "N/A"}</span>
                                <span>{new Date(request.rejectedDate).toLocaleDateString() || "N/A"}</span>
                                <span>{request.reason || "No reason provided"}</span>
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
