import React, { useEffect, useState } from "react";
import './Home.css'; 
import Sidebar from './Sidebar';

import Profile from './profile/Profile';
import CourseCountCard from './CourseCountCard';
import ExemptionCountCard from './ExemptionCountCard';
import ExemptionStatusCard from './ExemptionStatusCard';

export default function Home() {
    const [user, setUser] = useState(null);
    const [completedCourses, setCompletedCourses] = useState(5);
    const [exemptionCount, setExemptionCount] = useState(2);
    const [exemptionStatus, setExemptionStatus] = useState("Approved");
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());
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
                    active: true,
                    department: "Engineering",
                    gmail: data.email,
                    phone: data.phone,
                    photo: "https://via.placeholder.com/100", 
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
        <div className="home-container">
            <div className="main-content">
                <Sidebar />
                <div className="content-area">
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
                    <div className="card-container">
                        <CourseCountCard completedCourses={completedCourses} />
                        <ExemptionCountCard exemptionCount={exemptionCount} />
                        <ExemptionStatusCard status={exemptionStatus} dateTime={dateTime} />
                    </div>
                </div>
            </div>
        </div>
    );
}
