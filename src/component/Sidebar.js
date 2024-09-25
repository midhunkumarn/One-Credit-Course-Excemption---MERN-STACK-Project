import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

export default function Sidebar() {
    const handleLogout = () => {
        // Perform logout logic (e.g., clear token)
        localStorage.removeItem('userToken'); // Example of removing token
        window.location.pathname = '/login'; // Redirect to login page
    };

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={val.title === "Logout" ? handleLogout : () => { window.location.pathname = val.link; }}
                        >
                            <div id="icon">{val.icon}</div>
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
