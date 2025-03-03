import FacultySidebar from "./FacultySidebar";

export default function OverallList() {
    return (
        <div className="faculty-container">
            <FacultySidebar />
            <div className="dashboard-content">
                <h2>Overall Exemption Requests</h2>
                <p>Show all exemption requests with statuses here...</p>
            </div>
        </div>
    );
}
