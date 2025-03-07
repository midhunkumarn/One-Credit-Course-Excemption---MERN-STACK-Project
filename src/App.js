import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./component/Login";
import Logout from "./component/logout";
import Home from "./component/Home";
import Ongoing from "./component/Ongoing";
import Completed from "./component/Completed";
import FacultyDashboard from "./component/FacultyDashboard";
import PendingList from "./component/PendingList";
import ApprovedList from "./component/ApprovedList";
import RejectedList from "./component/RejectedList";
import OverallList from "./component/OverallList";
import ExcemptionCard from "./component/ExcemptionCard";
import Excemption from "./component/Excemption";

function App() {
    // ✅ State for storing approved and rejected requests
    const [approvedRequests, setApprovedRequests] = useState([]);
    const [rejectedRequests, setRejectedRequests] = useState([]);

    // ✅ Function to handle approval
    const handleApprove = (request) => {
        setApprovedRequests([...approvedRequests, request]);
    };

    // ✅ Function to handle rejection
    const handleReject = (request) => {
        setRejectedRequests([...rejectedRequests, request]);
    };

    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/home" element={<Home />} />
                <Route path="/ongoing" element={<Ongoing />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/exempt" element={<Excemption/>} />

               
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route path="/faculty/pending" element={<PendingList onApprove={handleApprove} onReject={handleReject} />} />
                <Route path="/faculty/approved" element={<ApprovedList approvedRequests={approvedRequests} />} />
                <Route path="/faculty/rejected" element={<RejectedList rejectedRequests={rejectedRequests} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
