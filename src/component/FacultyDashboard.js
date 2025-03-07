import { useState, useEffect } from "react";
import FacultySidebar from "./FacultySidebar";
import "./FacultyDashboard.css";

export default function FacultyDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [counts, setCounts] = useState({
        pending: 0,
        approved: 0,
        rejected: 0,
        overall: 0
    });

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response = await fetch("http://localhost:5000/home/dashboard-counts");
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                setCounts(data);
            } catch (error) {
                console.error("❌ Error fetching dashboard counts:", error);
            }
        };

        fetchCounts();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsSidebarOpen(true); // Always open on desktop
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="faculty-dashboard">
            {isMobile && (
                <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    ☰
                </button>
            )}

            <FacultySidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <div className="dashboard-content">
                <h1>Faculty Dashboard</h1>
                <p>Welcome to the faculty dashboard!</p>

                {/* Cards Section */}
                <div className="cards-container">
                    <div className="card pending">
                        <h2>Pending List</h2>
                        <p>{counts.pending} Pending Requests</p>
                    </div>

                    <div className="card approved">
                        <h2>Approved List</h2>
                        <p>{counts.approved} Approved Requests</p>
                    </div>

                    <div className="card rejected">
                        <h2>Rejected List</h2>
                        <p>{counts.rejected} Rejected Requests</p>
                    </div>

                    <div className="card overall">
                        <h2>Overall List</h2>
                        <p>{counts.overall} Total Requests</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
