import { useState, useEffect } from "react";
import FacultySidebar from "./FacultySidebar";
import "./FacultyDashboard.css";

export default function FacultyDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
                        <p>12 Pending Requests</p>
                    </div>

                    <div className="card approved">
                        <h2>Approved List</h2>
                        <p>45 Approved Requests</p>
                    </div>

                    <div className="card rejected">
                        <h2>Rejected List</h2>
                        <p>8 Rejected Requests</p>
                    </div>

                    <div className="card overall">
                        <h2>Overall List</h2>
                        <p>65 Total Requests</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
