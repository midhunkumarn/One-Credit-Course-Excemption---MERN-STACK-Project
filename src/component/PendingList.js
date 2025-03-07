import { useState, useEffect } from "react";
import FacultySidebar from "./FacultySidebar";
import "./PendingList.css"; // Import styles

export default function PendingList() {
    const [pendingRequests, setPendingRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [reason, setReason] = useState("");

    useEffect(() => {
        fetchPendingRequests();
    }, []);

    const fetchPendingRequests = async () => {
        try {
            const response = await fetch("http://localhost:5000/home/pendinglist"); // Backend URL
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("📩 Data received from backend:", data); // Debugging
            setPendingRequests(data);
        } catch (error) {
            console.error("❌ Error fetching pending requests:", error);
        }
    };

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

    const handleReject = async () => {
        if (!selectedRequest || !reason.trim()) {
            alert("Please provide a reason for rejection.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/home/reject", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: selectedRequest._id, reason }) // Send rejection data
            });

            if (response.ok) {
                const result = await response.json();
                console.log("❌ Request rejected successfully!", result);

                
                setPendingRequests(pendingRequests.filter(req => req._id !== selectedRequest._id));

                
                setRejectedRequests(prev => [...prev, { ...selectedRequest, reason }]);

                setSelectedRequest(null);
                setReason(""); 
            } else {
                console.error("❌ Failed to reject request:", await response.text());
            }
        } catch (error) {
            console.error("❌ Error rejecting request:", error);
        }
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

                        <textarea
                            className="reject-reason"
                            placeholder="Reason for rejection (if any)"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        ></textarea>

                        <div className="modal-buttons">
                            <button className="approve-btn" onClick={handleApprove}>Approve</button>
                            <button className="reject-btn" onClick={handleReject}>Reject</button>
                        </div>

                        <button className="close-btn" onClick={() => setSelectedRequest(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
