import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {
    const navigate = useNavigate(); // ✅ Use React Router for navigation

    if (typeof setIsOpen !== 'function') {
        console.error("setIsOpen is not a function. Make sure Sidebar is receiving the prop correctly.");
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('user'); // ✅ Ensure correct key is removed
        navigate('/logout'); // ✅ Redirect using React Router
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
                                if (val.title === "Logout") {
                                    handleLogout(); // ✅ Call logout function
                                } else {
                                    navigate(val.link); // ✅ Use React Router
                                }
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
