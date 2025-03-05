import { useState, useEffect } from "react";
import FacultySidebar from "./FacultySidebar";
import "./PendingList.css"; // Import styles

export default function PendingList({ onApprove, onReject }) {
    const [pendingRequests, setPendingRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [reason, setReason] = useState("");

    // ✅ Fetch Pending Requests from Backend
    useEffect(() => {
        fetch("http://localhost:5000/home/pendinglist") // Backend URL
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("📩 Data received from backend:", data); // Debugging
                setPendingRequests(data);
            })
            .catch(error => console.error("❌ Error fetching pending requests:", error));
    }, []);

    const handleVerify = (request) => {
        setSelectedRequest(request);
    };

    const handleApprove = async () => {
        if (!selectedRequest) return;
    
        try {
            const response = await fetch("http://localhost:5000/home/approve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: selectedRequest._id }) // Sending object ID
            });
    
            if (response.ok) {
                console.log("✅ Request approved successfully!");
                setPendingRequests(pendingRequests.filter(req => req._id !== selectedRequest._id));
                setSelectedRequest(null);
            } else {
                console.error("❌ Failed to approve request:", await response.text());
            }
        } catch (error) {
            console.error("❌ Error approving request:", error);
        }
    };

    const handleReject = () => {
        if (!selectedRequest || !reason) {
            alert("Please provide a reason for rejection.");
            return;
        }
        onReject({ ...selectedRequest, rejectedDate: new Date().toISOString().split("T")[0], reason });
        setPendingRequests(pendingRequests.filter(req => req._id !== selectedRequest._id));
        setSelectedRequest(null);
        setReason("");
    };

    return (
        <div className="faculty-container">
            <FacultySidebar />
            <div className="dashboard-content">
                <h2>Pending Exemption Requests</h2>
                <div className="card-table">
                    <div className="card-table-header">
                        <span>Student Name</span>
                        <span>Roll No.</span>
                        <span>Department</span>
                        <span>Completed Courses</span>
                        <span>Exemption Requested</span>
                        <span>Request Date</span>
                        <span>Action</span>
                    </div>
                    {pendingRequests.length > 0 ? (
                        pendingRequests.map((request) => (
                            <div key={request._id} className="card-table-row">
                                <span>{request.name}</span>
                                <span>{request.rollNumber}</span>
                                <span>{request.department}</span>
                                <span>{request.completedCourses?.join(", ")}</span>
                                <span>{request.exemptionRequested}</span>
                                <span>{request.requestDate}</span>
                                <button className="verify-btn" onClick={() => handleVerify(request)}>Verify</button>
                            </div>
                        ))
                    ) : (
                        <p>No pending requests found.</p>
                    )}
                </div>
            </div>

            {selectedRequest && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Verify Exemption Request</h3>
                        <p><strong>Name:</strong> {selectedRequest.name}</p>
                        <p><strong>Roll No:</strong> {selectedRequest.rollNumber}</p>
                        <p><strong>Department:</strong> {selectedRequest.department}</p>
                        <p><strong>Completed Courses:</strong> {selectedRequest.completedCourses?.join(", ")}</p>
                        <p><strong>Exemption Requested:</strong> {selectedRequest.exemptionRequested}</p>
                        <p><strong>Request Date:</strong> {selectedRequest.requestDate}</p>

                        <div className="modal-buttons">
                            <button className="approve-btn" onClick={handleApprove}>Approve</button>
                            <button className="reject-btn" onClick={handleReject}>Reject</button>
                        </div>

                        <textarea
                            className="reject-reason"
                            placeholder="Reason for rejection (if any)"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        ></textarea>

                        <button className="close-btn" onClick={() => setSelectedRequest(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
