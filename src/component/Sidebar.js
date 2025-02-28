import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

export default function Sidebar({ isOpen, setIsOpen }) {
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        window.location.pathname = '/login';
    };

    return (
        <>
            {/* Toggle Button */}
            <button className={`toggle-btn ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* Overlay (for closing sidebar) */}
            {isOpen && <div className="overlay active" onClick={() => setIsOpen(false)}></div>}

            {/* Sidebar */}
            <div className={`Sidebar ${isOpen ? "active" : ""}`}>
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => (
                        <li key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                setIsOpen(false); // Close sidebar after clicking
                                val.title === "Logout" ? handleLogout() : window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
