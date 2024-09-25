import React, { useEffect, useState } from "react";
import './Dashboard.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './profile/Profile';
import CourseCountCard from './CourseCountCard'; // Import Course Count Card
import ExemptionCountCard from './ExemptionCountCard'; // Import Exemption Count Card
import ExemptionStatusCard from './ExemptionStatusCard'; // Import Exemption Status Card

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [completedCourses, setCompletedCourses] = useState(5); // Example course count
    const [exemptionCount, setExemptionCount] = useState(2); // Example exemption count
    const [exemptionStatus, setExemptionStatus] = useState("Approved"); // Example exemption status
    const [dateTime, setDateTime] = useState(new Date().toLocaleString()); // Current date and time
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); // Mock API for user data
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();
                setUser({
                    name: data.name,
                    active: true, // This can be modified based on your actual logic
                    department: "Engineering", // This can be modified based on your actual logic
                    gmail: data.email,
                    phone: data.phone,
                    photo: "https://via.placeholder.com/100", // Placeholder for user photo
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="dashboard-container">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content-area"> {/* A wrapper for content */}
                    {user && (
                        <Profile
                            name={user.name}
                            active={user.active}
                            department={user.department}
                            gmail={user.gmail}
                            phone={user.phone}
                            photo={user.photo}
                        />
                    )}
                    <div className="card-container"> {/* Card Container */}
                        <CourseCountCard completedCourses={completedCourses} /> {/* Course Count Card */}
                        <ExemptionCountCard exemptionCount={exemptionCount} /> {/* Exemption Count Card */}
                        <ExemptionStatusCard status={exemptionStatus} dateTime={dateTime} /> {/* Exemption Status Card */}
                    </div>
                </div>
            </div>
        </div>
    );
}
