import { useState, useEffect } from "react";
import FacultySidebar from "./FacultySidebar";
import "./ApprovedList.css"; 

export default function ApprovedList() {
    const [approvedRequests, setApprovedRequests] = useState([]);

    useEffect(() => {
        fetchApprovedRequests();
    }, []);

    const fetchApprovedRequests = async () => {
        try {
            const response = await fetch("http://localhost:5000/approve/approvedlist");
            const data = await response.json();
            setApprovedRequests(data);
        } catch (error) {
            console.error("Error fetching approved requests:", error);
        }
    };

    return (
        <div className="faculty-container">
            <FacultySidebar />
            <div className="dashboard-content">
                <h2>Approved Exemption Requests</h2>
                <div className="table-container">
                    <table className="approved-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Roll No.</th>
                                <th>Department</th>
                                <th>Completed Courses</th>
                                <th>Exemption Requested</th>
                                <th>Approved Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvedRequests.length > 0 ? (
                                approvedRequests.map((request) => (
                                    <tr key={request._id}>
                                        <td>{request.name || "N/A"}</td>
                                        <td>{request.rollNumber || "N/A"}</td>
                                        <td>{request.department || "N/A"}</td>
                                        <td>{Array.isArray(request.completedCourses) ? request.completedCourses.join(", ") : "N/A"}</td>
                                        <td>{request.exemptionRequested || "N/A"}</td>
                                        <td>{request.approvedDate || "N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="no-data">No approved requests found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
